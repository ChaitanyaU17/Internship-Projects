```
# 👨‍💼 Employee Management System

A full-stack MERN-based employee management system with secure login, role-based access (Admin/Employee), employee CRUD, and salary management features.

---

## 📌 About

This project allows admins to manage employees (add/edit/delete) and lets employees securely view/update their profile. It uses JWT for authentication and separates access based on roles.

---

## ⚙️ Tech Stack

**Frontend**
- React.js
- Context API
- Axios
- Tailwind CSS / Bootstrap

**Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Auth
- Cloudinary (for image uploads, optional)

---

## 🗂️ Project Structure

### 📁 Backend 

```
employee-management-backend/
│
├── config/                # DB config
│   └── db.js
├── controllers/
│   ├── authController.js
│   └── employeeController.js
├── middleware/
│   ├── authMiddleware.js
│   └── roleMiddleware.js
├── models/
│   └── User.js
├── routes/
│   ├── authRoutes.js
│   └── employeeRoutes.js
├── .env
├── app.js
└── package.json
```

### 🌐 Frontend end

```
employee-management-frontend/
│
├── public/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   │   └── Login.js
│   │   ├── Admin/
│   │   │   ├── Dashboard.js
│   │   │   ├── AddEmployee.js
│   │   │   └── EmployeeList.js
│   │   ├── Employee/
│   │   │   └── Profile.js
│   ├── context/
│   │   └── AuthContext.js
│   ├── pages/
│   │   ├── AdminHome.js
│   │   └── EmployeeHome.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   └── index.js
├── .env
└── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repo

```bash
git clone: https://github.com/ChaitanyaU17
cd employee-management-system
```

### 2️⃣ Install dependencies

```bash
cd employee-management-backend
npm install

cd ../employee-management-frontend
npm install
```

### 3️⃣ Set up `.env` files

**Backend** (`employee-management-backend/.env`):

```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=5000
JWT_EXPIRE=1d
NODE_ENV=
JWT_COOKIE_EXPIRE=1
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

**Frontend** (`employee-management-frontend/.env`):

```
REACT_APP_API_URL=http://localhost:5000/api
```

### 4️⃣ Start the App

```bash
# In backend folder
npm start

# In frontend folder
npm run dev
```

---

## ✨ Features

- 🧑‍💼 Admin Dashboard
- 👨‍💻 Employee Profile Page
- 🔐 Role-based Access (Admin/Employee)
- 📦 JWT Authentication
- 🗃️ Add/Update/Delete Employees
- 💼 Salary breakdown (base, bonus, deductions)
- ☁️ Optional Cloudinary image upload
- 📱 Responsive UI

---

## 📸 Screenshots

> `screenshots/`

### 🔐 Login Page  


### 📊 Admin Dashboard  


### 👤 Employee Profile  


---

## 📮 Author

Made with ❤️ by **[Chaitanya]**  
```

