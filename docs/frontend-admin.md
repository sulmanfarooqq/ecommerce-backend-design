# Frontend and Admin Guide

## Storefront

The storefront is a React + Vite app under `frontend`.

### Main Responsibilities

- Product browsing
- Search and filters
- Product details
- Cart management
- User login/register
- Order placement
- Legal/help pages

### Main Files

- `frontend/src/App.jsx`
- `frontend/src/contexts/ShopContext.jsx`
- `frontend/src/pages/*`
- `frontend/src/components/*`

### ShopContext

`ShopContext` is the main client-side state layer.

It manages:

- `products`
- `search`
- `showSearch`
- `cartItems`
- `token`
- cart helpers
- product fetch
- cart sync

### Storefront Routes

Current route set includes:

- `/`
- `/collection`
- `/about`
- `/contact`
- `/product/:productId`
- `/cart`
- `/login`
- `/place-order`
- `/orders`
- `/verify`
- `/find-store`
- `/refund-policy`
- `/shipping-policy`
- `/privacy-policy`
- `/terms-conditions`
- `/help-center`

### UI Direction

The storefront was redesigned toward a marketplace-like layout with:

- denser section blocks
- a multi-row header
- a more structured collection page
- a product detail layout with seller and pricing panels
- a more utility-oriented cart page

## Admin Panel

The admin panel is a separate React + Vite app under `admin`.

### Main Responsibilities

- Admin authentication
- Product creation
- Product listing/removal
- Order monitoring and status updates

### Main Files

- `admin/src/App.jsx`
- `admin/src/components/Login.jsx`
- `admin/src/pages/Add.jsx`
- `admin/src/pages/List.jsx`
- `admin/src/pages/Orders.jsx`

### Admin Routing

Routes:

- `/add`
- `/list`
- `/orders`

Root admin route redirects to `/add`.

### Backend URL

Both `frontend` and `admin` use:

- `import.meta.env.VITE_BACKEND_URL`

This must point to the backend host.

### Data Relationship

The storefront and admin share the same backend and database.

That means:

- products added in admin appear in storefront product listing
- orders placed in storefront appear in admin orders
