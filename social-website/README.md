# Social Website

## Overview
This project is a social website built using Django, where users can register, create profiles, log in, and interact with content shared by other users. It includes functionalities like bookmarking images, creating user profiles, social authentication, and activity streams, all integrated with asynchronous JavaScript features for enhanced user interaction.

**Dashboard page**
![social-w_D](https://github.com/user-attachments/assets/9f81e269-1500-4264-983f-5629b050eb7e)

**Bookmarked images page**
![Social_w_B](https://github.com/user-attachments/assets/de76ea5b-17a3-4e1f-92e3-ab65260a732c)

**Like and views for an image with people who liked them**
![Social_B_L V](https://github.com/user-attachments/assets/20a77a64-463f-4275-a1fa-2f78f7a3f1e9)

**Accounts page**
![Social_w_P](https://github.com/user-attachments/assets/2613102e-af54-49d2-a6b6-f0feef364866)

**Profile page**
![Social_w_f](https://github.com/user-attachments/assets/9648366a-9cb2-4ea4-bfbe-4aa9a4f24eb0)

**Edit Profile page**
![Social_w_E](https://github.com/user-attachments/assets/0baca3fb-7815-4ad9-960f-2184df5f69f6)

**Login Page**
![Social_w_a](https://github.com/user-attachments/assets/b37bf444-91d0-4bc1-99d5-3e466263c68b)


## Features

- **User Authentication**:
  - User registration, login, logout, password change, and password reset functionality.
  - Uses Django's built-in authentication framework.
  
- **User Profiles**:
  - Users can create and update their profiles.
  - Custom user model with the ability to extend user information.
  - Profile pictures and media file handling using Pillow.

- **Social Authentication**:
  - Integrates with Google for social authentication, allowing users to sign up and log in using their Google accounts.
  
- **Image Bookmarking**:
  - Users can bookmark images from other websites.
  - Many-to-many relationships are used for user-image interactions.
  - Allows posting and sharing images, including content from other websites.

- **Activity Stream**:
  - Tracks user actions such as following/unfollowing other users and bookmarking images.
  - Displays an activity stream using the contenttypes framework and generic relations.

- **Asynchronous Actions**:
  - JavaScript-powered features for bookmarking images, following users, and interacting with the site asynchronously.
  - Implements infinite scroll pagination for the image list.
  - Prevents cross-site request forgery (CSRF) for JavaScript actions.

- **Image Management**:
  - Automatically creates image thumbnails using `easy-thumbnails`.
  - Image views are counted and stored in Redis for quick access.
 
## Usage

### User Registration and Login
- **Register**: Users can create an account by providing basic details such as username, email, and password.
- **Login**: Users can log in using their username and password.
- **Social Login**: Users can sign up or log in using their Google account for easier access.

### Profile Management
- Users can edit their profile, including uploading a profile picture.
- Profile information is stored in a custom user model and can be extended further as needed.

### Image Bookmarking
- Users can bookmark images by providing the image URL.
- Bookmarked images are displayed on user profiles and the main feed.

### Activity Stream
- Users can follow/unfollow others, and their actions will be tracked in an activity stream.
- The activity stream displays updates when users interact with the site (e.g., following others, bookmarking images).

### JavaScript Features
- The site features asynchronous interactions, such as bookmarking images and following users, without needing to reload the page.
- It also includes infinite scroll pagination to load more images dynamically as users scroll.

## Technologies Used
- **Django**: The web framework used for building the social website.
- **Python**: The programming language used for the backend.
- **PostgreSQL/MySQL**: The relational database used for storing user and content data.
- **Redis**: Used to count image views and store rankings for images.
- **Pillow**: Library for handling media files like profile images.
- **JavaScript (ES6+)**: Used for asynchronous actions and infinite scroll functionality.
- **HTML/CSS**: Used for frontend design and structure.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/social-website.git
   cd social-website
2. Install Dependencies
   - Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv\Scripts\activate
3. Database Setup:
   - Apply migrations to set up the database:
   ```bash
   python manage.py migrate
   ```
4. Media Files Setup:
   ```bash
   pip install Pillow
   ```
5. Start the Development Server:
   ```bash
   python manage.py runserver
   ```
