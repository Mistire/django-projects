# Blog Website

**Blog List page**
![blog_w](https://github.com/user-attachments/assets/c64124b9-5808-4298-802d-171e7b871973)

**Blog Detail page**
![blog_w_d](https://github.com/user-attachments/assets/b952aff5-0b92-45ac-a119-7113e20ea479)
 

A simple blog website built with **Django** that allows users to create, view, and interact with blog posts. It includes features like comments, email recommendations, tagging, and SEO-friendly URLs. The project also supports full-text search and a custom comment system.

## Features

- **User Authentication**: Users can log in, log out, and register.
- **Blog Post Management**: Create, edit, and display posts with support for categories and tags.
- **Comments System**: Users can add comments to individual posts, which can be managed in the admin panel.
- **Pagination**: Blog posts are paginated for better browsing.
- **SEO-friendly URLs**: The URLs are optimized for search engines.
- **Email Recommendations**: Users can recommend blog posts to others via email.
- **Search Functionality**: Full-text search to find posts by title, content, or tags.
- **Custom Tags & Filters**: Custom Django template tags and filters for better customization.

## Technologies Used

- **Django**: Backend framework for building the application.
- **Python**: Programming language used for backend development.
- **PostgreSQL**: Database for storing posts and user data.
- **Docker**: For containerizing the application.
- **django-taggit**: For implementing tagging functionality.
- **Django REST Framework**: For creating APIs (if applicable).

## Setup

1. Clone this repository.
   ```bash
   git clone <repo_url>
   cd blog-website
   ```
2. Set up a virtual environment and activate it
   ```bash
   python -m venv venv
   venv\Scripts\activate
   ```
3. Run migrations to set up the database.
  ```bash
  python manage.py migrate
  ```
4. Create a superuser to access the admin panel.
  ```bash
  python manage.py createsuperuser
  ```
5. Run the development server.
  ```bash
  python manage.py runserver
  ```
