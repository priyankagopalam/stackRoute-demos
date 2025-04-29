## Assignment Case Study – Sprint 2  
**Project Title**: Movie Ticket Booking System  
**Sprint Title**: Authentication & Protected Routing

---

### Sprint Objective

To design and implement the **Login & Register pages**, connect them with the existing NestJS backend for user authentication, and configure **protected routes** to restrict access to authenticated users only.

---

### Assignment Requirements

This sprint involves implementing **user registration, login**, and **protecting routes** from anonymous users.

---

### Authentication Flow to Implement

1. **Register Page**:
   - Form with the following fields:
     - Name
     - Email
     - Password
     - Confirm Password
   - On submit, call the backend API to register the user.
   - Display appropriate success/error messages.

2. **Login Page**:
   - Fields:
     - Email
     - Password
   - On submit:
     - Call backend login API.
     - Store the **JWT token** in `localStorage` or `sessionStorage`.
     - Redirect the user to the **Home page** after successful login.

3. **Protecting Routes**:
   - Implement **PrivateRoute** (HOC or wrapper component) to restrict pages like `MoviePage` to only logged-in users.
   - If not authenticated, redirect the user to the **Login** page.

4. **Routing Setup**:
   - Use `react-router-dom` to configure routing between:
     - `/login`
     - `/register`
     - `/movies` (protected)
     - `/` (default redirect or landing page)

5. **Logout Feature**:
   - Add a **Logout** button on navbar.
   - On logout, clear the token from storage and redirect to `/login`.