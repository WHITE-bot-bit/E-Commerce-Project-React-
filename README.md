# 🛒 Full-Stack E-Commerce Platform

A full-stack e-commerce web application built with **React, Vite, Node.js, REST APIs, and PostgreSQL**.

The application provides a complete shopping workflow including product browsing, cart management, delivery selection, checkout, order creation, and order history. The project also includes automated testing and production deployment.

🔗 **Live Demo:** https://ecommerce-frontend-z7p1.onrender.com/

---

## 📌 Project Overview

This project is a full-stack e-commerce application designed to demonstrate how a modern web application works from the frontend to the backend and database.

The application follows a client-server architecture:

```text
User
 │
 ▼
React + Vite Frontend
 │
 │ HTTP Requests
 ▼
Node.js Backend
 │
 │ REST APIs
 ▼
PostgreSQL Database
 │
 ▼
Neon PostgreSQL
```

The frontend communicates with the backend through REST APIs, while the backend manages application data using PostgreSQL.

---

## ✨ Features

### 🛍️ Product Management
- Display products dynamically
- Product information and pricing
- Product images
- Product selection and shopping workflow

### 🛒 Shopping Cart
- Add products to cart
- Update product quantities
- Remove products from cart
- Automatically calculate cart totals
- Persist cart data through the backend API

### 🚚 Delivery Options
- Multiple delivery options
- Delivery price calculation
- Estimated delivery dates
- Delivery option selection for individual cart items

### 💳 Checkout
- Checkout page
- Order summary
- Payment summary
- Delivery information
- Final order creation

> Note: The project implements the checkout/order workflow and payment summary UI. It does not claim to process real financial payments unless a payment gateway is explicitly integrated.

### 📦 Order Management
- Create orders
- Store order information
- Display previous orders
- Display ordered products
- Display order totals
- Display delivery information

### 🧭 Client-Side Routing
Implemented using React Router.

Main routes include:

```text
/
├── Home
├── Checkout
└── Orders
```

### 🧪 Automated Testing
The project includes automated tests using **Vitest** and React Testing Library.

Tests cover areas such as:

- Utility functions
- Money formatting
- React components
- Add-to-cart functionality
- Homepage integration
- Order-related functionality

### ⚡ Modern React Development
The project uses:

- React functional components
- `useState`
- `useEffect`
- `useRef`
- Props
- Component composition
- React Router
- Axios
- Vite

---

# 🏗️ Technology Stack

## Frontend

| Technology | Purpose |
|---|---|
| React | UI development |
| Vite | Development server and production build |
| JavaScript | Application logic |
| HTML/CSS | Structure and styling |
| React Router | Client-side navigation |
| Axios | API communication |
| Day.js | Date handling |
| Vitest | Automated testing |
| React Testing Library | Component/integration testing |

## Backend

| Technology | Purpose |
|---|---|
| Node.js | Backend runtime |
| REST APIs | Client-server communication |
| Axios/HTTP | API requests |
| PostgreSQL | Relational database |

## Database & Deployment

| Technology | Purpose |
|---|---|
| PostgreSQL | Application database |
| Neon | Cloud PostgreSQL database |
| Render | Production deployment |
| GitHub | Source control and repository hosting |

---

# 🔄 Application Flow

The main application flow is:

```text
              ┌───────────────┐
              │     User      │
              └───────┬───────┘
                      │
                      ▼
             ┌─────────────────┐
             │ React Frontend  │
             │   + Vite        │
             └────────┬────────┘
                      │
              HTTP / REST API
                      │
                      ▼
             ┌─────────────────┐
             │  Node.js Server │
             │    REST APIs    │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │   PostgreSQL    │
             │     Database    │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ Neon PostgreSQL │
             └─────────────────┘
```

---

# 🛒 Shopping Flow

```text
Browse Products
       │
       ▼
Select Product
       │
       ▼
Add to Cart
       │
       ▼
Update Cart
       │
       ▼
Checkout
       │
       ▼
Select Delivery Option
       │
       ▼
Review Order Summary
       │
       ▼
Create Order
       │
       ▼
Refresh Cart
       │
       ▼
Navigate to Orders
       │
       ▼
View Order History
```

---

# 🔌 REST API

The frontend communicates with the backend through REST endpoints.

### Products

```text
GET /api/products
```

Used to retrieve available products.

### Cart

```text
GET    /api/cart-items
POST   /api/cart-items
PUT    /api/cart-items/:id
DELETE /api/cart-items/:id
```

Used for cart management.

### Delivery Options

```text
GET /api/delivery-options
```

Used to retrieve available delivery methods and estimated delivery times.

### Payment Summary

```text
GET /api/payment-summary
```

Used to retrieve calculated checkout/payment summary information.

### Orders

```text
GET  /api/orders
POST /api/orders
```

Used for order creation and retrieving previous orders.

---

# 🗄️ Database

The application uses **PostgreSQL** as the relational database.

The production database is hosted using **Neon PostgreSQL**.

The database stores application information such as:

```text
Products
Cart Items
Delivery Options
Orders
Order Items
```

### Why Neon?

During local development, the application can use a local/backend database setup.

For production, the backend needs access to a database that is available online.

Neon provides a hosted PostgreSQL database, allowing the deployed backend to communicate with the production database.

```text
Render Backend
      │
      │ PostgreSQL connection
      ▼
Neon PostgreSQL
```

This means the production application does not depend on a PostgreSQL database running on the developer's personal computer.

---

# 🌍 Environment Variables

Environment variables are used to keep environment-specific configuration outside the source code.

For the frontend, the API URL is configured using:

```env
VITE_API_URL=YOUR_BACKEND_API_URL
```

The application accesses it through:

```javascript
import.meta.env.VITE_API_URL
```

For example:

```javascript
axios.post(
  `${import.meta.env.VITE_API_URL}/api/orders`
);
```

This allows the same frontend codebase to work with different backend environments.

### Development

```text
React Frontend
      │
      ▼
Local Backend
```

### Production

```text
React Frontend
      │
      ▼
Production Backend
```

The API URL can therefore change without rewriting every API request.

---

# 🚀 Production Deployment

The application was deployed for production using **Render**.

### Production architecture

```text
                     GitHub
                       │
                       ▼
              ┌────────────────┐
              │     Render     │
              │   Frontend     │
              └───────┬────────┘
                      │
                      │ HTTPS API Requests
                      ▼
              ┌────────────────┐
              │     Render     │
              │    Backend     │
              └───────┬────────┘
                      │
                      │ PostgreSQL
                      ▼
              ┌────────────────┐
              │      Neon      │
              │   PostgreSQL   │
              └────────────────┘
```

### Deployment process

1. Push source code to GitHub.
2. Connect the repository to Render.
3. Configure the frontend as a static site.
4. Run the Vite production build.
5. Configure the production API URL using an environment variable.
6. Deploy the backend separately.
7. Configure the backend's database connection.
8. Connect the backend to Neon PostgreSQL.
9. Test the production application.
10. Verify frontend → backend → database communication.

---

# 📦 Production Build

The frontend uses Vite.

The production build is generated using:

```bash
npm run build
```

Vite transforms the application's source code and generates optimized production assets in the `dist` directory.

The production server serves these generated files.

---

# 🧪 Testing

Automated testing was added using **Vitest** and **React Testing Library**.

Examples of tested functionality include:

```text
Utility functions
      │
      ├── formatMoney
      │
      ▼
React Components
      │
      ├── Product
      ├── Checkout
      └── Orders
      │
      ▼
Integration Tests
      │
      └── User interaction flows
```

Testing helps detect regressions when application functionality is changed.

---

# 📁 Project Structure

A simplified structure of the project:

```text
E-Commerce Project
│
├── src
│   ├── Components
│   │
│   ├── Pages
│   │   ├── Home
│   │   ├── Checkout
│   │   └── Order
│   │
│   ├── utils
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── public
│
├── package.json
├── vite.config.js
├── .gitignore
└── README.md
```

The project also contains backend/server-side code for handling REST API requests and database operations.

---

# 🔧 Local Development

Clone the repository:

```bash
git clone https://github.com/WHITE-bot-bit/Full-stack-ecommerce-platform.git
```

Move into the project directory:

```bash
cd Full-stack-ecommerce-platform
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The Vite development server will provide a local URL similar to:

```text
http://localhost:5173
```

---

# 🔐 Environment Configuration

Create the required environment file for local development.

Example:

```env
VITE_API_URL=http://localhost:3000
```

Use the appropriate backend URL for your local setup.

Production environment variables should be configured through the deployment platform rather than committing secrets to GitHub.

---

# 📈 Key Engineering Concepts Demonstrated

This project demonstrates practical understanding of:

- Component-based React development
- React state management
- React hooks
- Client-side routing
- REST API integration
- Asynchronous JavaScript
- Axios
- CRUD operations
- Database integration
- PostgreSQL
- Environment variables
- Production builds
- Git and GitHub
- Automated testing
- Integration testing
- Frontend deployment
- Backend deployment
- Cloud database deployment
- Production API configuration

---

# 🎯 What I Learned

Through this project, I worked with the complete lifecycle of a web application:

```text
Development
     ↓
Frontend
     ↓
Backend APIs
     ↓
Database
     ↓
Testing
     ↓
Git/GitHub
     ↓
Production Build
     ↓
Cloud Deployment
     ↓
Production API Configuration
     ↓
Live Application
```

The project helped me understand how frontend, backend, database, testing, version control, and deployment work together as one full-stack system.

---

# 📚 Learning Reference

The project development was guided by the **SuperSimpleDev React course/tutorial**, while the application was implemented, configured, tested, and deployed as a personal full-stack project.

---

# 🔗 Links

**Live Application:**  
https://ecommerce-frontend-z7p1.onrender.com/

**GitHub Repository:**  
https://github.com/WHITE-bot-bit/Full-stack-ecommerce-platform

---

## 👨‍💻 Author

**Moreshwar Gaidhane**

Full-Stack / Frontend Developer

GitHub:  
https://github.com/WHITE-bot-bit
