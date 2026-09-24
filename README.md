

# 🌹 Royal Perfume Store — Luxury E-Commerce Web Application
<div align="center">

[![Watch Demo Video](https://img.shields.io/badge/▶%20Watch%20Demo%20Video-Play%20%2F%20Download-c9a227?style=for-the-badge&logoColor=white)](https://github.com/kerolesboles26/Perfume-store/releases/download/v1.0.0/Video.Project.1.mp4)
[![Release Version](https://img.shields.io/badge/Release-v1.0.0-blue?style=for-the-badge)](https://github.com/kerolesboles26/Perfume-store/releases/tag/v1.0.0)

### 🎬 [اضغط هنا لمشاهدة فيديو استعراض المشروع الكامل | Full Project Demo](https://github.com/kerolesboles26/Perfume-store/releases/download/v1.0.0/Video.Project.1.mp4)

https://github.com/kerolesboles26/Perfume-store/releases/download/v1.0.0/Video.Project.1.mp4

</div>


> An ultra-luxurious, full-stack responsive fragrance boutique web application featuring interactive checkout, order management, multi-language (Arabic/English) support, Firebase authentication, and Progressive Web App (PWA) installation.

---



## 🌟 Key Features

### 1. 💎 Luxury Visual Identity & Architecture
- **Curated Royal Theme**: Gold accents (`#c9a227`), deep obsidian glassmorphism backgrounds (`#0d0e12`), and elegant typography.
- **Bilingual (Arabic & English)**: Full instant RTL/LTR switching across all pages with zero reload lag.
- **Progressive Web App (PWA)**: Installable directly onto mobile devices and desktop (via `manifest.json` and `sw.js` offline caching).

### 2. 🛍️ Browsing & Discovery Experience
- **Dynamic Olfactory Filtering**: Filter by scent family (Fresh, Woody, Floral, Oriental/Oud, Aquatic, Fruity), gender (Men, Women, Unisex), and price tier.
- **Live Search & Multi-criteria Sorting**: Search by perfume notes, ingredients, name; sort by popularity, rating, and price.
- **Skeleton Loaders**: Golden shimmer placeholders ensuring zero perceived delay on listings.
- **Interactive Ratings & Reviews Breakdown**: 5-star rating system with verified customer badge and rating distribution bar charts.
- **Social Sharing**: One-click sharing directly to WhatsApp, LinkedIn, and instant clipboard link copy.

### 3. 💳 Cart, Checkout & Payment Simulation
- **Persistent Cart & Wishlist**: Synchronized instantly between local browser state and Firebase Cloud Firestore.
- **Interactive Promo Codes**: Supports discount coupons with live discount calculation (`LUXURY10`, `ROYAL20`).
- **Interactive Payment Options**: Cash on Delivery and Credit Card with instant validation.
- **Official Printable Invoice**: Auto-styled luxury printable receipt with royal seal and itemized breakdown (`printOrderInvoice`).

### 4. 📦 Real-Time Order Management & Tracking
- **Interactive Stepper Tracking**: Visual 4-stage tracking (Order Received 📝 ➔ Luxury Packing 🎁 ➔ Out for Delivery 🚚 ➔ Delivered ✨).
- **Instant Actions (No Annoying Popups)**: Non-blocking instant order cancellation and permanent order deletion with smooth scale/fade micro-animations.
- **Admin Management Dashboard (`admin.html`)**: Real-time sales metrics, order counters, customer tracking, and status update controls with sleek toast feedback.

---

## 🛠️ Technology Stack

- **Frontend**: Vanilla JavaScript (ES6+), Semantic HTML5, Pure Vanilla CSS (No heavyweight UI frameworks, high performance).
- **Backend & Serving**: Node.js HTTP Server (`server.js`).
- **Database & Auth**: Firebase Auth (Email/Password, Google OAuth), Cloud Firestore for orders, wishlist, and cart persistence.
- **PWA & Offline**: Web App Manifest, Service Worker Cache API.

---

## 🚀 One-Click Quick Start

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Start the Application
Simply double-click the **`start.bat`** file in the project folder:
```cmd
start.bat
```
This will automatically launch the server and open **`http://localhost:5000`** in your default web browser!

Or run manually via terminal:
```bash
node server.js
```

---

## 🎬 LinkedIn Demo Video Script (Recommended 90-Second Walkthrough)

1. **0:00 - 0:15 | Hero & Aesthetics**:
   - Show the landing page, hover effects, and switch language between **English** and **العربية (RTL)**.
2. **0:15 - 0:30 | Product Discovery**:
   - Open **Products**, filter by *Oriental / Oud* or *Men*, use search, and open a product details page.
   - Show the fragrance notes, rating breakdown, and click the **Share** button (highlighting LinkedIn & WhatsApp).
3. **0:30 - 0:50 | Cart & Checkout**:
   - Add fragrance to cart, apply coupon `ROYAL20`, complete the checkout flow.
4. **0:50 - 1:10 | Order Tracking & Invoice**:
   - View the **Order Confirmed** screen and **My Orders** page.
   - Show the 4-step progress tracker, print the luxury invoice preview, and demonstrate instant **Cancel** or **Delete Order**.
5. **1:10 - 1:30 | Admin Dashboard & PWA**:
   - Open `/admin.html` to showcase live sales statistics and order status updates.
   - Highlight the "Install App" PWA capability in the browser address bar.
