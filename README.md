# Rent My Drones — Frontend Application

Frontend application for **Rent My Drones**, a simulated drone rental platform.  
The application provides role-based user interfaces for **Renters** and **Owners**, enabling users to browse drones, manage rentals, and manage owned inventory through a clean, state-driven React UI.

🌐 **Live Demo (Frontend):**  
https://www.rent-my-drones-fe.vercel.app

---

## 🧩 Overview

The frontend is built with **React and Redux** and communicates with a RESTful backend API.  
It supports authentication, role-based navigation, protected routes, and dynamic dashboards for two distinct user types.

Key responsibilities of the frontend include:
- Rendering role-specific dashboards and navigation
- Managing application state with Redux
- Handling form validation and user input
- Integrating with backend API endpoints via Axios
- Enforcing route protection based on authentication state

---

## 🧑‍💻 User Roles & UI Behavior

### 🔓 Not Logged In
- Home
- Login
- Signup

---

### 🧍 Renter Experience

When a **Renter** logs in:

- Redirected to a **Renter Dashboard**
- Dashboard displays:
  - Welcome card with user email
  - Card showing total number of drones currently rented
- Navigation options:
  - **Dash** — renter dashboard
  - **Available** — view all available drones across all owners
  - **Rented** — view drones currently rented by the renter
  - **Logout**

#### Renting a Drone
- Available drones are displayed as card profiles
- Clicking **Rent**:
  - Rents the drone
  - Redirects back to the dashboard
  - Displays a success message
  - Updates the rented drone count in real time

#### Returning a Drone
- Rented drones are displayed as card profiles
- Clicking **Return**:
  - Returns the drone
  - Redirects back to the dashboard
  - Displays a success message
  - Updates the rented count automatically

---

### 🧑‍💼 Owner Experience

When an **Owner** logs in:

- Redirected to an **Owner Dashboard**
- Dashboard displays:
  - Welcome card with user email
  - Card showing number of owned drones currently rented by renters
- Navigation options:
  - **Dash** — owner dashboard
  - **Market** — owned drones available for rent
  - **Rented** — owned drones currently rented by renters
  - **Owned** — all owned drones (rented + available)
  - **Add** — add a new drone
  - **Logout**

#### Adding a Drone
- Owner fills out a form with:
  - Drone name
  - Description
  - Cost
  - Image URL (stored as a string)
- On successful submission:
  - Redirects to dashboard
  - Displays success message
  - Drone becomes available in the marketplace

---

## 🛠️ Tech Stack

- **React**
- **Redux**
- **Redux Thunk**
- **Redux Logger**
- **React Router**
- **Axios**
- **Docker** (local development only)

---

## 🔐 Authentication & Authorization (Frontend)

- JWT token and user role are stored in **localStorage** after login
- Token is attached to API requests via a centralized Axios instance
- Application behavior is determined based on stored role

### Role-Based Rendering
- A **Dashboard super-component** renders:
  - `RenterDashboard` or `OwnerDashboard` based on role
- A **LoggedInNavigation super-component** renders:
  - `RenterNav` or `OwnerNav` based on role

### Route Protection
A `ProtectedRoute` component:
- Reads JWT from localStorage
- Guards routes based on authentication state and role

#### Protected Routes

**Renter**
- `/dashboard`
- `/dashboard/available`
- `/dashboard/rented`

**Owner**
- `/dashboard`
- `/dashboard/owner-drone-market`
- `/dashboard/owner-rented-drones`
- `/dashboard/owners-drones`
- `/dashboard/add-drone`

---

## ✅ Form Validation

A custom hook, **`useValidation`**, is used for form validation and shared logic.

### Form Schemas (Yup)
Stored in `formSchemas/`:

- `login-form-schema.jsx`
  - Email and password validation
- `signup-form-schema.jsx`
  - First name, last name, email, password, and user role
- `add-drone-form-schema.jsx`
  - Drone name, cost, description, and image URL

These schemas ensure consistent validation across forms.

---

## 📂 Project Structure

```
rent-my-drones-fe/
├── src/
│   ├── Assets/
│   ├── components/
│   ├── form-schemas/
│   ├── hooks/
│   │   └── useValidation.jsx
│   ├── state/
│   │   ├── actions/
│   │   ├── reducers/
│   │   └── store.js
│   ├── styles/
│   └── App.jsx
├── package.json
└── README.md
```
---

## ⚙️ Running the Frontend Locally

From the project root:

- npm install
- npm start

The app will run locally and communicate with the backend API.

--- 

## 🌐 Backend Integration

The frontend communicates with the backend using a centralized Axios instance configured with:

- Base URL: backend API URL

- Authorization header with JWT token

Backend API (Docker deployment on Heroku):
👉 **https://rent-my-drones-be-ffc04f1c4ced.herokuapp.com**

---

##🔗 Linked Repository

**Backend API:**
https://github.com/OniWarrior/rent-my-drones-be

---

## 🤝 Notes for Recruiters

This frontend demonstrates:

- Role-based application design

- Dynamic UI rendering based on authentication state

- Centralized state management with Redux

- Secure frontend-to-backend API integration

- Custom hooks and reusable validation logic

- Real-world navigation and routing patterns

- Clear separation of concerns in component design

 The project reflects how I build maintainable frontend applications that integrate cleanly with backend services in a full-stack environment.

---

## 📬 Contact

Stephen Aranda
- **Email:** aranda.stephen88@gmail.com

- **LinkedIn:** https://www.linkedin.com/in/stephen-aranda-9b9974205

- **GitHub:** https://github.com/OniWarrior
