# Personal Portfolio Website (MERN Stack)

This is a personal portfolio website built using the MERN (MongoDB, Express.js, React, Node.js) stack. It showcases projects, skills, and experience while providing dynamic content management. The project consists of three main folders:

- **client**: The frontend for the portfolio website.
- **admin**: A separate React-based admin panel with JWT authentication.
- **server**: The backend API handling authentication, database, and other operations.

---

## Features

- Modern, responsive portfolio frontend built with React and Tailwind CSS
- Admin dashboard for managing projects, tools, and content
- JWT-based authentication for secure admin access
- Dynamic project and skill management (CRUD operations)
- RESTful API with Express.js and MongoDB
- Image upload and management (Cloudinary integration)
- Rate limiting, security headers, and CORS configuration
- Toast notifications and loading states for better UX

---

## Tech Stack

- **Frontend**: React, TypeScript, Vite, Tailwind CSS
- **Admin Panel**: React, TypeScript, Redux Toolkit, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js, TypeScript, MongoDB (Mongoose)
- **Authentication**: JWT, Cookies
- **Other**: Cloudinary (image uploads), Envalid (env validation), Sonner (notifications)

---

## Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/your-portfolio.git
   cd your-portfolio
   ```

2. **Install dependencies for each folder:**
   ```sh
   cd client
   npm install
   cd ../admin
   npm install
   cd ../server
   npm install
   ```

3. **Set up environment variables:**  
   See the [Environment Variables](#environment-variables) section below.

4. **Run the development servers:**
   - **Client:**  
     ```sh
     cd client
     npm run dev
     ```
   - **Admin:**  
     ```sh
     cd admin
     npm run dev
     ```
   - **Server:**  
     ```sh
     cd server
     npm run dev
     ```

---

## Environment Variables

Each folder (`client`, `admin`, `server`) requires its own `.env` file.

### Example `.env` for `server`:

```
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret

GMAIL_USER=your_gmail_user
GMAIL_PASSWORD=your_gmail_password
GMAIL_ID=your_gmail_id

TOKEN_KEY=your_jwt_secret
TOKEN_KEY_EXPIRY=7d

PORT=8000
ADMIN_URL=http://localhost:5174
CLIENT_URL=http://localhost:5173
MONGO_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

### Example `.env` for `client` and `admin`:

```
VITE_API_URL=http://localhost:8000/api
```

> **Note:** Adjust the URLs and credentials as needed for your environment.

---

## License