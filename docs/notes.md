# Known Behaviors and Notes

## 1. COD Is the Main Working Checkout Flow

Cash on Delivery is the primary operational checkout path.

Stripe code exists, but:

- it depends on `STRIPE_SECRET_KEY`
- it is optional
- startup no longer crashes if Stripe is missing

Razorpay routing exists, but the controller implementation is currently empty.

## 2. Admin Auth Is Environment-Based

Admin users are not stored in MongoDB.

The admin panel authenticates against:

- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`

This is simple, but not suitable for multi-admin or role-based access without redesign.

## 3. API Error Handling Is JSON-Oriented, Not Status-Code-Oriented

Most backend errors respond with:

- `success: false`
- `message: ...`

Many routes still return HTTP `200`.

If you build more clients or integrate third-party services, consider standardizing status codes.

## 4. Cart Is Stored as a Nested Object

`user.cartData` is an object keyed by:

- product ID
- then size

Example shape:

```json
{
  "productId123": {
    "M": 2,
    "L": 1
  }
}
```

## 5. Product Image Upload Flow

The backend expects multipart fields:

- `image1`
- `image2`
- `image3`
- `image4`

The uploaded image files are first handled by Multer and then uploaded to Cloudinary.

## 6. Production Depends on Successful Frontend and Admin Builds

The backend production server expects these folders to exist:

- `frontend/dist`
- `admin/dist`

If they are missing, the deployed app will not serve the storefront or admin correctly.

## 7. Root `package.json` Is Required for Heroku

The root `package.json` is part of the deployment contract.

It must be committed to git so Heroku sees the correct build and start scripts.

## 8. Atlas Connectivity Is a Real Production Dependency

The app can build successfully but still fail at runtime if Atlas rejects network access.

The production deployment must be validated with:

- Heroku dyno state
- Heroku logs
- a real request to the deployed URL

## 9. Additional Static/Informational Pages Exist

The storefront includes several static support pages such as:

- Help Center
- Privacy Policy
- Shipping Policy
- Refund Policy
- Terms and Conditions
- Find Store

These pages should be kept aligned with actual business policy if the site is made public.

## 10. Documentation Maintenance Rule

Whenever any of the following changes, these docs should be updated:

- API routes
- env vars
- deployment process
- frontend route set
- admin features
- payment flow
