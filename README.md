This repository contains the source code for an Angular application that serves as a blogging platform. The application allows users to login, view user information & view blog posts.

Features:
- User authentication: User can log in and log out
- Home: This screen contains overall information regading blogs like total orders, total expenses, total revenue,  total new users and recently posted blogs.
- Users: Users can view & search personal information for other users in list view and grid view.
- Blogs: All blog posts are displayed in cards view, user can browse through them.
- Responsive design: The application is designed to work seamlessly on various devices, including desktops, tablets and mobile phones.
- Readmore: Readmore button in blog post will be visible if content lenght is more than 100 charactres.

Login information:
Email: Sincere@april.biz
Password: 123456

Data Points
- This Application uses https://jsonplaceholder.typicode.com/ data points API to display useful information.

Angular Version: 
Angular 16.1.4

Additional Dependencies:
- @angular/forms: v16.1.4
- @angular/material: v16.1.4
- @angular-material-data-table: v0.10.10
- bootstrap: v5.3.0
- ngx-toastr: v14.3.0

Project Structure:
- src/ : This directory contains the main source code of the Angular application.
- src/app/ : The app directory is where most of the application-specific code resides.
- src/assets/ : This directory holds static assets such as images, fonts, etc.
- src/environments/ : The environments directory contains configuration files for different environments (e.g., development, production).

Routing:
- The Angular project uses the Angular Router module for handling client-side routing. Routing configuration is defined in the app-routing.module.ts file.
	routes:
		Home: /
		Home: /home
		Users: /users
		blogs: /blogs

- The application is composed of several components responsible for different parts of the UI.
Components list:
	- AuthComponent
	- NavComponent
	- HomeComponent
	- HomeSummaryComponent
	- HomeBlogListComponent
	- UsersComponent
	- UsersListViewComponent
	- UsersGridViewComponent
	- BlogsComponent
	- BlogPostViewComponent