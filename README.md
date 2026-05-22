# 📝 Handle Notes

A modern full-stack note-taking application built with the MERN stack.  
Create, edit, delete, and securely manage your notes from anywhere.

🌐 Live Demo: https://handle-notes.vercel.app

---

## 🚀 Features

- 🔐 User Authentication (JWT Based)
- 📝 Create, Edit & Delete Notes
- 📂 Organized Note Management
- ⚡ Fast & Responsive UI
- 🌙 Clean Modern Interface
- ☁️ Cloud Deployment with Vercel
- 🔒 Secure API & Protected Routes

---

## 🛠️ Tech Stack

### Frontend
- HTML
- CSS
- JavaScript
- React.js

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Authentication
- JWT (JSON Web Token)
- bcrypt.js

### Deployment
- Vercel

---

# 📂 Folder Structure

```bash
handle-notes/
│
├── backend/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── connections.js
│   └── index.js
│
├── frontend/
│   ├── css/
│   ├── index.html
│   └── auth.html
│
└── README.md
```

---

# 🔒 Authentication Flow

1. User registers an account
2. Password gets encrypted using bcrypt
3. JWT token is generated on login
4. Protected routes verify token before access
5. User can securely manage personal notes
