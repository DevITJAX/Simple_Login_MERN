## Simple_Login_MERN Project Documentation

### Project Overview

This project is a basic implementation of user login and registration using the MERN stack (MongoDB, Express, React, Node.js). It allows users to create accounts, log in, and presumably access protected content, though the specific functionality beyond login/registration isn't detailed in the provided code.

### Technologies Used

*   **MongoDB**: Database for storing user information (credentials, etc.).
*   **Express.js**: Backend framework to handle API routes and middleware.
*   **React.js**: Frontend library for creating the user interface.
*   **Node.js**: Runtime environment for the server-side code.
*   **Mongoose**: ODM (Object-Document Mapper) to interact with MongoDB.
*   **bcrypt**: Library for hashing passwords to store them securely.
*   **jsonwebtoken**: Library for creating JSON Web Tokens for user authentication.

### Project Structure

The project is structured into two main directories: `client` (frontend) and `server` (backend).

```
Simple_Login_MERN/
├── client/         # React frontend
│   ├── public/
│   ├── src/
│   │   ├── App.js       # Main app component
│   │   ├── components/  # React components
│   │   ├── pages/       # Login and Register pages
│   │   └── styles/      # CSS styles
│   ├── package.json
│   └── ...
├── server/         # Node.js/Express backend
│   ├── models/      # Mongoose models
│   │   └── User.js    # User model
│   ├── routes/      # API routes
│   │   └── auth.js    # Authentication routes
│   ├── config/      # Database configuration
│   │   └── db.js      # MongoDB connection
│   ├── middleware/  # Custom middleware
│   │   └── auth.js    # Authentication middleware
│   ├── .env         # Environment variables
│   ├── server.js    # Main server file
│   └── package.json
├── README.md       # Project documentation
└── ...
```

### Backend Setup (Server)

1.  **Configuration**:

    *   The `server.js` file sets up the Express server, connects to MongoDB using Mongoose, and defines API routes.
    *   Environment variables (like the MongoDB URI and JWT secret) are managed using `dotenv`.

2.  **Models**:

    *   The `User.js` model defines the schema for user data in MongoDB, including fields for username, email, password, etc.

3.  **Routes**:

    *   The `auth.js` file handles user registration and login routes.
    *   It uses `bcrypt` to hash passwords before saving them to the database.
    *   `jsonwebtoken` is used to create and verify tokens for user authentication.

4.  **Middleware**:
    *   The `auth.js` middleware is used to protect routes. It verifies the JWT token from the header, retrieves the user's information, and attaches the user object to the request.

### Frontend Setup (Client)

1.  **Components**:

    *   React components are created in the `src/components/` directory.
    *   The main component for the application is `App.js`.
    *   The `src/pages/` directory contains the Login and Register components.

2.  **API Requests**:

    *   The frontend makes API requests to the backend using libraries like `axios` or `fetch`.
    *   The `Login` component sends a request to the `/login` endpoint with the user's credentials and receives a JWT token.
    *   The `Register` component sends a request to the `/register` endpoint to create a new user account.

### API Endpoints

The backend exposes the following API endpoints:

*   `POST /register`: Registers a new user.
*   `POST /login`: Logs in an existing user and returns a JWT token.
*   `GET /user`: Retrieves the current user's information (protected route).

### Getting Started

1.  **Clone the repository:**

    ```
    git clone https://github.com/DevITJAX/Simple_Login_MERN
    ```
2.  **Navigate to the project directory:**

    ```
    cd Simple_Login_MERN
    ```
3.  **Install backend dependencies:**

    ```
    cd server
    npm install
    ```
4.  **Install frontend dependencies:**

    ```
    cd ../client
    npm install
    ```
5.  **Set up environment variables:**

    *   Create a `.env` file in the `server` directory.
    *   Add the following environment variables:

        ```
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret_key
        ```
6.  **Run the backend:**

    ```
    cd server
    npm start
    ```
7.  **Run the frontend:**

    ```
    cd ../client
    npm start
    ```

### Additional Notes

*   Ensure MongoDB is running and accessible.
*   Replace `your_mongodb_connection_string` and `your_jwt_secret_key` with your actual MongoDB connection string and a strong secret key.
*   This is a basic setup, so you may want to add more features, such as input validation, error handling, and UI improvements.

Citations:
[1] https://github.com/DevITJAX/Simple_Login_MERN

---
Answer from Perplexity: https://www.perplexity.ai/search/an-you-do-a-documentation-for-q7d_oI8DQuSWKywdFKXrTA?login-source=fileUpload&login-new=true&2=d&utm_source=copy_output
