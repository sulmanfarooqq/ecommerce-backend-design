# Deployment Guide

## Current Deployment Model

This project is configured to deploy as a single Heroku app.

Production behavior:

- backend runs as the `web` process
- frontend is built into `frontend/dist`
- admin is built into `admin/dist`
- backend serves both static builds

## Root `package.json`

The root `package.json` contains the deployment scripts:

```json
{
  "start": "node backend/server.js",
  "backend": "cd backend && npm install",
  "frontend": "cd frontend && npm install --include=dev && npm run build",
  "admin": "cd admin && npm install --include=dev && npm run build",
  "heroku-postbuild": "npm run backend && npm run frontend && npm run admin"
}
```

## Why `--include=dev` Matters

Both `frontend` and `admin` use Vite from `devDependencies`.

On Heroku, production install behavior may omit devDependencies.

Without `--include=dev`, builds can fail with:

```text
vite: not found
```

## Backend Static Serving

The backend serves:

- `/admin` from `admin/dist`
- all other non-API routes from `frontend/dist`

This logic lives in:

- `backend/server.js`

## Heroku Requirements

### Config Vars

Set:

- `MONGODB_URI`
- `JWT_SECRET`
- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`
- `CLOUDINARY_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

Optional:

- `STRIPE_SECRET_KEY`

### MongoDB Atlas

Atlas Network Access must permit Heroku to connect.

If the dyno crashes with MongoDB connection errors, check:

- Atlas `Network Access`
- the connection string in Heroku config vars

## Useful Heroku Commands

```bash
heroku config --app <app-name>
heroku logs --num 200 --app <app-name>
heroku ps --app <app-name>
heroku restart --app <app-name>
```

## Deployment Validation Checklist

After deploy, verify:

1. root URL returns `200`
2. `/admin` returns `200`
3. `/api/product/list` returns `200`
4. dyno state is `up`
5. logs show `Database Connected Successfully`

## Current Heroku Runtime Notes

This project was validated against:

- Heroku-24 stack
- Node.js 24.x

## Alternative Hosting

This repo also contains `vercel.json` files in app folders, but the current integrated production setup is centered on Heroku and backend static serving.
