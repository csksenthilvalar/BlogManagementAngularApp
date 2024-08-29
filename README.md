# **Blog Management System (Angular)**

This repository contains the code for a **Blog Management System** built using Angular, allowing users to create, view, update, and manage blog posts. The frontend application communicates with a backend API (typically a .NET Core WebAPI) to perform CRUD operations.

### **Features:**

 **Blog Post Management:**
   - **Create:** Users can create new blog posts with a rich text editor.
   - **Read:** Display a list of all blog posts with options to filter by categories or tags.
   - **Update:** Edit existing blog posts, including the title, content, and associated tags or categories.
   - **Delete:** Remove blog posts with confirmation prompts to avoid accidental deletion.

 **Commenting System:**
   - Users can add comments to individual blog posts.
   - View all comments related to a particular post.
   - Edit or delete comments based on user roles.

 **Error Handling and Notifications:**
   - Proper error handling with user-friendly error messages.
   - Notifications for successful actions like creating, updating, or deleting posts.

### **Technologies Used:**

- **Angular:** The frontend framework used for building the application.
- **BootStrap:** For UI components and styling.
- **RxJS:** Reactive programming library for managing asynchronous operations.
- **NgRx (optional):** State management for handling application state.
- **HTTPClient:** To make API requests to the backend server.-
- **HTML5, CSS3, and TypeScript:** For structuring, styling, and scripting the application.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.






## **Getting Started:**

1. **Install Dependencies:**
   - Navigate to the project directory and run:    

3. **Set Up Environment Configuration:**
   - Update the `environment.ts` file with the correct API endpoint URL (e.g., for development and production environments):
   - apiUrl: 'http://localhost:7000/api'  or 'https://localhost:7000/api/JSONBlogMngmt'// Update with your backend API URL   

4. **Run the Application:**
   - Use the Angular CLI to start the development server:     
   - Open a browser and navigate to `http://localhost:4200` to see the application in action.

5. **Building for Production:**
   - To create a production-ready build, run: 
   - The build artifacts will be stored in the `dist/` directory.
   - 

