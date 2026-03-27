# Setup Guide

## Prerequisites

- Node.js 24.x recommended
- npm
- MongoDB Atlas database
- Cloudinary account

Optional:

- Stripe secret key if Stripe checkout is needed

## Install the Project

From the repository root:

```bash
npm install
```

Install app-level dependencies as needed:

```bash
cd backend && npm install
cd ../frontend && npm install
cd ../admin && npm install
```

## Local Environment Files

Create:

- `backend/.env`
- `frontend/.env`
- `admin/.env`

Use the examples in:

- `backend/.env.example`
- `frontend/.env.example`
- `admin/.env.example`

## Run Locally

### Backend

```bash
cd backend
npm start
```

Default:

- `http://localhost:3000`

### Storefront

```bash
cd frontend
npm run dev
```

Default:

- `http://127.0.0.1:5173`

### Admin Panel

```bash
cd admin
npm run dev
```

Default:

- `http://127.0.0.1:5174`

## Expected Local Flow

1. Start backend
2. Start storefront
3. Start admin
4. Log into admin
5. Add products
6. Open storefront and verify products appear

## Admin Login

Admin credentials are read from environment variables:

- `ADMIN_EMAIL`
- `ADMIN_PASSWORD`

## Local Production Build Test

Frontend:

```bash
cd frontend
npm run build
```

Admin:

```bash
cd admin
npm run build
```

Root Heroku-style build:

```bash
npm run heroku-postbuild
```
