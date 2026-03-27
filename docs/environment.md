# Environment Variables

## Root

The root project does not currently require a dedicated `.env` file for runtime.

It does define deployment scripts in `package.json`.

## Backend

Required in `backend/.env`:

```env
PORT=3000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
STRIPE_SECRET_KEY=optional_or_empty
```

### Notes

- `MONGODB_URI` should be a working MongoDB Atlas URI
- In this project, Stripe is optional
- If `STRIPE_SECRET_KEY` is missing, the Stripe order route returns a safe failure message instead of crashing startup

## Frontend

Required in `frontend/.env`:

```env
VITE_BACKEND_URL=http://localhost:3000
```

## Admin

Required in `admin/.env`:

```env
VITE_BACKEND_URL=http://localhost:3000
```

## Heroku Config Vars

The deployed app expects these Heroku config vars:

- `MONGODB_URI`
- `JWT_SECRET`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `CLOUDINARY_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

Optional:

- `STRIPE_SECRET_KEY`

## Atlas Network Access

If the Heroku dyno crashes during MongoDB connection, check MongoDB Atlas Network Access.

For a typical Heroku deployment, Atlas often needs:

- `0.0.0.0/0`

or another valid rule that allows Heroku outbound IPs.
