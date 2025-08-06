# 🛒 MyShop – Functional E-commerce React App

A fully functional, responsive e-commerce application built using React and DummyJSON API. It includes features like product listing, detailed views, search, cart functionality, user authentication, and more – all styled with Tailwind CSS.

---

## 📌 Features

- 🔍 Live Product Search with Image & Price Dropdown
- 🛍 Product Listing with Categories, Brands, Sizes, Colors (from Fake API)
- 🧾 Product Details with Dynamic Routing
- 🛒 Add to Cart & Cart Item Counter
- 👤 User Authentication (Login / Register)
- 🔐 Protected User Dropdown with Login/Register Options
- 📱 Fully Responsive Layout (Mobile + Desktop)
- ✅ Form Validations & Success Messages

---

## 🧑‍💻 Tech Stack

### Frontend
- **React.js** – Component-based architecture
- **React Router DOM** – Page routing
- **Tailwind CSS** – Utility-first styling
- **Lucide React** – Icon components
- **JavaScript (ES6+)**

### State Management
- **React Context API** – Global state (cart & auth)
- **Custom Hooks** – Encapsulated logic (e.g. `useCart`)

### API & Data
- **DummyJSON API** – Products, categories, and auth endpoints
  - `https://dummyjson.com/products`
  - `https://dummyjson.com/auth/login`

---

## 📁 Folder Structure

```
/src
 ┣ /components        → Reusable components (Navbar, ProductCard)
 ┣ /pages             → Route pages (Home, Products, Cart, Login)
 ┣ /context           → Contexts for Cart and Auth
 ┣ /assets            → Static images or icons
 ┗ App.jsx            → Route setup
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/myshop.git
cd myshop
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Open in browser

```
http://localhost:5173
```

---

## 🛠 Dummy Credentials (via DummyJSON)

```
Username: kminchelle
Password: 0lelplR
```

---

## 📸 Screenshots

> _You can add screenshots of home page, product page, cart, login, etc._

---

## 📦 Future Enhancements

- ✅ Add real payment integration (Stripe/Razorpay)
- ✅ Admin Dashboard for Product Management
- ✅ Wishlist & Reviews
- ✅ Backend with MongoDB or Supabase

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

> Generated on August 05, 2025 – Happy Coding 💙
