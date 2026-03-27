# Overview

## What This Project Is

This repository is a full-stack MERN ecommerce application with three major parts:

1. `backend`
   An Express API connected to MongoDB and Cloudinary.
2. `frontend`
   The customer-facing storefront built with React, Vite, and Tailwind CSS.
3. `admin`
   The internal admin panel used to add products, list products, and manage orders.

The root of the repository also contains a Heroku-oriented deployment setup that installs and builds the frontend and admin, then runs the backend as the production web process.

## Core Business Flows

- Admin logs in with `ADMIN_EMAIL` and `ADMIN_PASSWORD`
- Admin uploads products with up to 4 images
- Product images are uploaded to Cloudinary
- Product metadata is stored in MongoDB
- Storefront fetches product list from the backend API
- Users can register, log in, add items to cart, and place orders
- Cash on Delivery is the primary working checkout flow
- Stripe code exists, but is optional and guarded by runtime config

## Tech Stack

### Backend

- Node.js
- Express
- Mongoose
- MongoDB Atlas
- Cloudinary
- Multer
- JWT
- Bcrypt

### Frontend and Admin

- React
- Vite
- React Router
- Axios
- Tailwind CSS
- React Toastify

## Production Shape

In production, the backend serves:

- the customer storefront from `frontend/dist`
- the admin panel from `/admin` using `admin/dist`

This means the deployed app can run as a single Heroku web dyno backed by one Express server.
