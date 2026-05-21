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

# 📸 Screenshots

## Home Page
(Add screenshot here)

## Notes Dashboard
(Add screenshot here)

## Login / Signup
(Add screenshot here)

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/handle-notes.git
```

---

## 2️⃣ Navigate to Project Folder

```bash
cd handle-notes
```

---

## 3️⃣ Install Dependencies

### Frontend

```bash
npm install
```

### Backend

```bash
cd backend
npm install
```

---

## 4️⃣ Create Environment Variables

Create a `.env` file inside backend folder.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

---

## 5️⃣ Run the Application

### Backend

```bash
npm start
```

### Frontend

```bash
npm start
```

---

# 🔑 API Routes

## Auth Routes

| Method | Route | Description |
|---|---|---|
| POST | `/api/auth/createuser` | Register User |
| POST | `/api/auth/login` | Login User |
| POST | `/api/auth/getuser` | Get User Details |

---

## Notes Routes

| Method | Route | Description |
|---|---|---|
| GET | `/api/notes/fetchallnotes` | Fetch All Notes |
| POST | `/api/notes/addnote` | Add New Note |
| PUT | `/api/notes/updatenote/:id` | Update Note |
| DELETE | `/api/notes/deletenote/:id` | Delete Note |

---

# 📂 Folder Structure

```bash
handle-notes/
│
├── backend/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── db.js
│   └── index.js
│
├── src/
│   ├── components/
│   ├── context/
│   ├── App.js
│   └── index.js
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

---

# 🌟 Future Improvements

- 📌 Pin Important Notes
- 🎨 Dark Mode
- 🏷️ Tags & Categories
- 🔍 Search Functionality
- 📱 Mobile App Version
- 🤖 AI Note Summarization
