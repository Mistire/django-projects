from django.http import HttpResponse
import weasyprint
from django.contrib.admin.views.decorators import staff_member_required
from django.shortcuts import redirect, render, get_object_or_404
from cart.cart import Cart
from django.shortcuts import render
from .forms import OrderCreateForm
from .models import Order, OrderItem
from .tasks import order_created
from django.contrib.staticfiles import finders
from django.template.loader import render_to_string



# Create your views here.
def order_create(request):
  cart = Cart(request)
  if request.method == 'POST':
    form = OrderCreateForm(request.POST)
    if form.is_valid():
      order = form.save(commit=False)
      if cart.coupon:
        order.coupon = cart.coupon
        order.discount = cart.coupon.discount
      order.save()
      for item in cart:
        OrderItem.objects.create(
          order=order,
          product=item['product'],
          price=item['price'],
          quantity=item['quantity']
        )
      cart.clear()
      order_created.delay(order.id)
      # set the order in the session
      request.session['order_id'] = order.id
      # redirect for payment

      return redirect('payment:process')
  else:
    form = OrderCreateForm()
  return render(
    request,
    'orders/order/create.html',
    {'cart': cart, 'form': form}
  )

@staff_member_required
def admin_order_detail(request, order_id):
  order = get_object_or_404(Order, id=order_id)
  return render(
    request, 
    'admin/orders/order/detail.html', 
    {'order': order}
  )

@staff_member_required
def admin_order_pdf(request, order_id):
  order = get_object_or_404(Order, id=order_id)
  html = render_to_string('orders/order/pdf.html', {'order': order})

  css_path = finders.find('css/pdf.css')
  if not css_path:
    raise FileNotFoundError("CSS file for PDF styling not found")

  response = HttpResponse(content_type='application/pdf')
  response['Content-Disposition'] = f'filename=order_{order.id}.pdf'
  pdf_content = weasyprint.HTML(string=html).write_pdf(
    stylesheets=[weasyprint.CSS(css_path)]
  )
  response.write(pdf_content)
  
  return response
