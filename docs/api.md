# API Reference

Base URL in development:

- `http://localhost:3000`

Production:

- same host as the deployed backend

## Authentication Conventions

### User routes

Protected user routes expect:

- request header: `token`

### Admin routes

Protected admin routes expect:

- request header: `token`

## User Routes

### `POST /api/user/register`

Registers a new customer account.

Request body:

```json
{
  "name": "User Name",
  "email": "user@example.com",
  "password": "password123"
}
```

Response:

```json
{
  "success": true,
  "token": "jwt-token"
}
```

### `POST /api/user/login`

Logs in a customer account.

### `POST /api/user/admin`

Logs in the admin using environment-based credentials.

Request body:

```json
{
  "email": "admin@example.com",
  "password": "your-password"
}
```

## Product Routes

### `GET /api/product/list`

Returns all products.

Response shape:

```json
{
  "success": true,
  "products": []
}
```

### `POST /api/product/add`

Admin-only.

Multipart form-data fields:

- `name`
- `description`
- `price`
- `category`
- `subCategory`
- `bestseller`
- `sizes`
- `image1`
- `image2`
- `image3`
- `image4`

Notes:

- `sizes` is parsed from a string into JSON
- uploaded images are pushed to Cloudinary

### `POST /api/product/remove`

Admin-only.

Body:

```json
{
  "id": "product-id"
}
```

### `POST /api/product/single`

Admin-only in the current implementation.

Body:

```json
{
  "productId": "product-id"
}
```

## Cart Routes

All cart routes require a user token.

### `POST /api/cart/get`

Returns the authenticated user's `cartData`.

### `POST /api/cart/add`

Body:

```json
{
  "itemId": "product-id",
  "size": "M"
}
```

### `POST /api/cart/update`

Body:

```json
{
  "itemId": "product-id",
  "size": "M",
  "quantity": 2
}
```

## Order Routes

### Admin

#### `POST /api/order/list`

Admin-only. Returns all orders.

#### `POST /api/order/status`

Admin-only. Updates order status.

Body:

```json
{
  "orderId": "order-id",
  "status": "Shipped"
}
```

### User

#### `POST /api/order/place`

User-only. Creates a COD order.

Body includes:

- `items`
- `amount`
- `address`

#### `POST /api/order/userorders`

User-only. Returns orders for the logged-in user.

#### `POST /api/order/stripe`

User-only. Creates a Stripe checkout session if Stripe is configured.

#### `POST /api/order/verifyStripe`

User-only. Verifies Stripe payment result.

#### `POST /api/order/razorpay`

Present in routing, but not implemented.

## Error Style

Most routes respond with:

```json
{
  "success": false,
  "message": "error message"
}
```

HTTP status codes are not used consistently; many failures still return `200` with `success: false`.
