# 🛒 CommerceAPP — React E-Commerce Application

A fully featured front-end e-commerce application built with **React 18**, **Vite**, **Redux Toolkit**, **React Router DOM**, **Material UI**, **Bootstrap**, and **Axios**. Fetches real product data from an external API and supports cart (basket) management with toast notifications.

---

## 🚀 Features

- 🛍️ **Product Listing** — Fetches and displays products from [FakeStoreAPI](https://fakestoreapi.com)
- 🔍 **Product Detail Page** — View detailed info for each product
- 🛒 **Basket / Cart Management** — Add, remove, and update item quantities
- 🔔 **Toast Notifications** — Instant feedback on cart actions
- ⏳ **Loading Indicator** — Shown while fetching data from API
- 🗺️ **Client-Side Routing** — Smooth navigation with React Router DOM v6
- 📦 **Global State Management** — Redux Toolkit with multiple slices
- 📱 **Responsive Design** — Bootstrap + Material UI for a modern layout

---

## 🛠️ Tech Stack

![React](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

| Package | Version | Purpose |
|---|---|---|
| `react` | ^18.3.1 | UI library |
| `react-dom` | ^18.3.1 | DOM rendering |
| `react-router-dom` | ^6.26.0 | Client-side routing |
| `@reduxjs/toolkit` | ^2.2.7 | State management |
| `react-redux` | ^9.1.2 | Redux bindings |
| `axios` | ^1.7.3 | HTTP API requests |
| `@mui/material` | ^5.16.7 | UI components |
| `@emotion/react` | ^11.13.0 | MUI dependency |
| `@emotion/styled` | ^11.13.0 | MUI dependency |
| `bootstrap` | ^5.3.3 | Responsive layout |
| `react-icons` | ^5.2.1 | Icon set |
| `vite` | ^5.3.4 | Build tool & dev server |

---

## 📁 Project Structure

```
Project3_CommerceAPP/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navbar with search & basket icon
│   │   ├── Products.jsx        # Product card grid
│   │   ├── ProductDetails.jsx  # Single product detail view
│   │   ├── Basket.jsx          # Shopping cart / basket panel
│   │   ├── Notification.jsx    # Toast notification component
│   │   └── Loading.jsx         # Loading spinner
│   ├── pages/
│   │   └── MainPage.jsx        # Main landing page
│   ├── redux/
│   │   ├── slice/
│   │   │   ├── productSlice.jsx # Product data & API fetch logic
│   │   │   ├── basketSlice.jsx  # Cart state: add, remove, update qty
│   │   │   └── appSlice.jsx     # App-level state (loading, notifications)
│   │   └── store/
│   │       └── store.jsx        # Redux store configuration
│   ├── config/
│   │   └── RouterSettings.jsx  # React Router route definitions
│   ├── App.jsx                 # Root component
│   ├── App.css                 # Global component styles
│   ├─�� index.css               # Base styles
│   └── main.jsx                # App entry point with Redux Provider
├── index.html
├── package.json
└── vite.config.js
```

---

## 🧩 Components

### `Header`
Navigation bar featuring:
- App logo / brand name
- Search functionality
- Basket icon with item count badge (from Redux state)

### `Products`
- Fetches product data from **FakeStoreAPI** via Axios
- Renders a responsive product card grid
- Each card links to the product detail page

### `ProductDetails`
- Displays full product info: image, title, description, price, rating
- **Add to Basket** button dispatches to Redux basket slice

### `Basket`
- Lists all items in the cart
- Increase / decrease item quantity
- Remove individual items
- Shows total price

### `Notification`
- Toast-style notification shown after cart actions (add / remove)
- Driven by `appSlice` Redux state

### `Loading`
- Full-screen or inline spinner shown while API data is being fetched

---

## 🗄️ Redux State

### `productSlice`
| Action | Description |
|---|---|
| `fetchProducts` | Async thunk — fetches products from FakeStoreAPI |

### `basketSlice`
| Action | Description |
|---|---|
| `addToBasket` | Add a product to the cart |
| `removeFromBasket` | Remove a product from the cart |
| `increaseQuantity` | Increase item quantity |
| `decreaseQuantity` | Decrease item quantity |

### `appSlice`
| Action | Description |
|---|---|
| `setLoading` | Toggle loading spinner |
| `setNotification` | Show/hide toast notification |

---

## 🗺️ Routes

| Path | Component | Description |
|---|---|---|
| `/` | `MainPage` → `Products` | Product listing homepage |
| `/product/:id` | `ProductDetails` | Individual product detail |
| `/basket` | `Basket` | Shopping cart page |

---

## ⚡ Getting Started

### Prerequisites
- Node.js >= 16
- npm >= 7

### Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/yunusemre04/React.git

# 2. Navigate to the project folder
cd React/Project3_CommerceAPP

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

The app will be available at **http://localhost:5173**

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🌐 API

This project uses the free **[Fake Store API](https://fakestoreapi.com)** to fetch product data.

| Endpoint | Description |
|---|---|
| `GET /products` | Fetch all products |
| `GET /products/:id` | Fetch a single product |

---

## 👤 Author

**Yunus Emre Acar**
🔗 [github.com/yunusemre04](https://github.com/yunusemre04)

---

⬅️ [Back to Main Repository](../README.md)