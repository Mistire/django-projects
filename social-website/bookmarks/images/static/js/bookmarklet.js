const siteUrl =' //127.0.0.1:8000/';
const styleUrl = siteUrl + 'static/css/bookmarklet.css';
const minWidth = 250;
const minHeight = 250;

// load css
let head = document.getElementsByTagName('head')[0];
let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = styleUrl + '?r=' + Math.floor(Math.random() * 9999999999999999);
head.appendChild(link);

//load html
let body = document.getElementsByTagName('body')[0];
boxHtml = `
  <div id="bookmarklet">
    <a href="#" id="close">&times;</a>
    <h1>Select an image to bookmark:</h1>
    <div class="images"></div>
  </div>`;

body.innerHTML += boxHtml;
// console.log("HTML added");

// console.log("scripts started");
function bookmarkletLaunch() {
  // console.log("bookmarkletLaunch started");
  let bookmarklet = document.getElementById('bookmarklet');
  let imagesFound = bookmarklet.querySelector('.images');

  // clear images found
  imagesFound.innerHTML = '';
  // display bookmarklet
  bookmarklet.style.display = 'block';

  // close event
  bookmarklet.querySelector('#close').addEventListener('click', function () {
    bookmarklet.style.display = 'none';
  });

  //fins image in the dom with the minimum dimensions
  images = document.querySelectorAll(
    'img[src$=".jpg"], img[src$=".jpeg"], img[src$=".png"]'
  );

  Array.from(images).forEach((image) => {
    if (image.naturalWidth >= minWidth && image.naturalHeight >= minHeight) {
      // console.log("Image found:", image.src);
      let imageElement = document.createElement('img');
      imageElement.src = image.src;
      imagesFound.append(imageElement);
    }
  });

  //select image event
  imagesFound.querySelectorAll('img').forEach(image => {
    image.addEventListener('click', function(event) {
      imageSelected = event.target;
      bookmarklet.style.display = 'none';
      window.open(siteUrl + 'images/create/?url=' 
        + encodeURIComponent(imageSelected.src)
        + '&title='
        + encodeURIComponent(document.title), '_blank');
    })
  })
}

//launch the bookmarklet
bookmarkletLaunch();
