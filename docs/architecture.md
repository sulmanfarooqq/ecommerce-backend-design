# Architecture

## Repository Structure

```text
Ecommerce-Store-Forever-MERN/
├─ admin/
├─ backend/
├─ docs/
├─ frontend/
├─ prototype/
├─ package.json
└─ README.md
```

## Runtime Components

### 1. Backend

The backend is the system of record.

Responsibilities:

- Connect to MongoDB
- Configure Cloudinary
- Authenticate users and admins
- Manage products
- Manage carts
- Manage orders
- Serve production frontend and admin builds

Main entry file:

- `backend/server.js`

### 2. Storefront

The storefront consumes backend APIs and renders the customer shopping experience.

Responsibilities:

- Show product catalog
- Show product details
- Manage cart state
- Authenticate users
- Place orders
- Show legal/help pages

Main files:

- `frontend/src/App.jsx`
- `frontend/src/contexts/ShopContext.jsx`

### 3. Admin Panel

The admin panel is a separate React app.

Responsibilities:

- Admin login
- Product creation
- Product listing and removal
- Order list and status updates

Main file:

- `admin/src/App.jsx`

## Data Flow

### Product Creation

1. Admin logs in
2. Admin submits product form with text data and image files
3. `multer` stores uploaded files temporarily
4. Backend uploads those files to Cloudinary
5. Backend stores product record in MongoDB
6. Storefront later fetches products from `/api/product/list`

### Cart Flow

1. Storefront loads all products
2. Local cart state is updated immediately in the browser
3. If a user token exists, cart changes are also synced to the backend
4. Cart data is stored in `user.cartData`

### Order Flow

1. User submits checkout form
2. Storefront converts cart state into order items
3. Backend creates an order document
4. For COD, backend clears the user cart immediately
5. Admin can later view all orders and update their status

## Auth Model

### User Auth

- JWT payload: `{ id }`
- Token stored in local storage
- Protected user routes read `token` from request headers

### Admin Auth

- Admin credentials are environment-based, not database-based
- Admin token is generated from `ADMIN_EMAIL + ADMIN_PASSWORD`
- Protected admin routes validate that decoded token string

## Production Serving

The backend serves static assets:

- `/admin` -> `admin/dist`
- all other non-API routes -> `frontend/dist`

This makes the backend both API server and static asset host in production.
