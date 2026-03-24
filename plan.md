Build an eCommerce site with:

* Home page
* Product listing page
* Product details page
* Search
* Pagination
* Login/signup
* Protected admin actions
* Add product form
* Responsive desktop + mobile
* Express backend + database + templating engine  

The hidden trap is this: if you build it like a random “frontend + backend mixed mess,” you will waste time and fail code quality. The file structure matters because this project is really about **separation of concerns**.

## 1) What this project actually is

This is **not** a full marketplace like Amazon.

It is a **server-rendered eCommerce demo app** with these flows:

* User opens homepage
* Homepage shows featured products
* User browses products
* User searches or paginates products
* User opens a product details page
* User can sign up / log in
* Admin or authenticated user can add products
* Some routes are protected by auth middleware 

So the cleanest stack is:

* **Node.js**
* **Express.js**
* **MongoDB + Mongoose**
* **EJS**
* **HTML/CSS/JS in public**
* **JWT auth with cookies**
* **Multer** for image upload if needed

That matches the task and is the fastest serious implementation.

---

## 2) Best architecture choice

Use **MVC-ish structure**.

Why:

* Routes stay thin
* Controllers handle logic
* Models handle DB
* Middleware handles auth
* Views handle rendering
* Public handles frontend assets

Do **not** put database queries directly inside routes everywhere. That is beginner-level chaos.

---

## 3) Recommended full folder structure

This is the structure I would use:

```bash
ecommerce-backend-design/
│
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── env.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── pageController.js
│   │   ├── productController.js
│   │   └── adminController.js
│   │
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   ├── errorMiddleware.js
│   │   ├── uploadMiddleware.js
│   │   └── localsMiddleware.js
│   │
│   ├── models/
│   │   ├── Product.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── web/
│   │   │   ├── pageRoutes.js
│   │   │   ├── productRoutes.js
│   │   │   ├── authRoutes.js
│   │   │   └── adminRoutes.js
│   │   │
│   │   └── api/
│   │       ├── productApiRoutes.js
│   │       └── authApiRoutes.js
│   │
│   ├── services/
│   │   ├── authService.js
│   │   └── productService.js
│   │
│   ├── utils/
│   │   ├── appError.js
│   │   ├── catchAsync.js
│   │   ├── jwt.js
│   │   ├── pagination.js
│   │   └── formatCurrency.js
│   │
│   ├── views/
│   │   ├── layouts/
│   │   │   └── main.ejs
│   │   │
│   │   ├── partials/
│   │   │   ├── head.ejs
│   │   │   ├── navbar.ejs
│   │   │   ├── footer.ejs
│   │   │   ├── product-card.ejs
│   │   │   ├── search-bar.ejs
│   │   │   ├── pagination.ejs
│   │   │   ├── alerts.ejs
│   │   │   └── mobile-menu.ejs
│   │   │
│   │   ├── pages/
│   │   │   ├── home.ejs
│   │   │   ├── products.ejs
│   │   │   ├── product-details.ejs
│   │   │   ├── login.ejs
│   │   │   ├── signup.ejs
│   │   │   ├── add-product.ejs
│   │   │   ├── not-found.ejs
│   │   │   └── error.ejs
│   │
│   ├── public/
│   │   ├── css/
│   │   │   ├── base.css
│   │   │   ├── layout.css
│   │   │   ├── components.css
│   │   │   ├── pages/
│   │   │   │   ├── home.css
│   │   │   │   ├── products.css
│   │   │   │   ├── product-details.css
│   │   │   │   ├── auth.css
│   │   │   │   └── admin.css
│   │   │   └── responsive.css
│   │   │
│   │   ├── js/
│   │   │   ├── main.js
│   │   │   ├── search.js
│   │   │   ├── auth.js
│   │   │   └── mobile-menu.js
│   │   │
│   │   ├── images/
│   │   │   ├── products/
│   │   │   ├── banners/
│   │   │   └── icons/
│   │   │
│   │   └── uploads/
│   │
│   ├── app.js
│   └── server.js
│
├── .env
├── .gitignore
├── package.json
├── README.md
└── sample-data/
    └── products.json
```

---

## 4) Why this structure is the right one

### `config/`

Keeps environment and database bootstrapping clean.

* `db.js` → MongoDB connection
* `env.js` → central access to env variables

### `controllers/`

This is where request handling logic lives.

* `pageController.js` → homepage and static-like rendered pages
* `productController.js` → product listing, search, details, pagination
* `authController.js` → login/signup/logout
* `adminController.js` → add product form + submit handler

### `middleware/`

This is where discipline starts.

* `authMiddleware.js` → protect routes
* `errorMiddleware.js` → global error handling
* `uploadMiddleware.js` → image uploads
* `localsMiddleware.js` → inject user data into all EJS views

### `models/`

You only really need:

* `Product.js`
* `User.js`

Do not invent 10 models unless the Figma actually requires cart, orders, reviews, etc. The task document does not require those. 

### `routes/`

Separate by purpose:

* `web/` for EJS pages
* `api/` only if you want future AJAX or JSON endpoints

Even if APIs are minimal, this separation makes the code more professional.

### `services/`

Optional but useful.
Put reusable business logic here:

* filtering products
* generating pagination
* auth token creation

### `utils/`

Small helpers so controllers don’t become bloated.

### `views/`

This is crucial.
If you dump all HTML into giant EJS files, maintenance becomes trash.

Use:

* `partials/` for reusable UI
* `pages/` for actual page templates

### `public/`

Everything static:

* CSS
* JS
* images
* uploads

---

## 5) Page-level implementation plan

Based on the task document, these pages are mandatory:

### 1. Home page

Purpose:

* show hero/banner
* featured products from DB
* category highlights
* maybe CTA to browse products

Files involved:

* `views/pages/home.ejs`
* `controllers/pageController.js`
* `routes/web/pageRoutes.js`
* `public/css/pages/home.css`

Controller responsibility:

* fetch featured products from DB
* render home page with product cards

---

### 2. Product listing page

Purpose:

* show all products
* search by name/category
* pagination
* responsive grid

Files involved:

* `views/pages/products.ejs`
* `controllers/productController.js`
* `routes/web/productRoutes.js`
* `utils/pagination.js`
* `public/css/pages/products.css`
* `views/partials/search-bar.ejs`
* `views/partials/pagination.ejs`

Controller responsibility:

* parse query params:

  * `search`
  * `category`
  * `page`
* query DB
* send paginated result to view

Example route:

```js
GET /products?search=shoe&category=men&page=2
```

---

### 3. Product details page

Purpose:

* show one product’s image, name, price, category, description, stock
* maybe related products

Files involved:

* `views/pages/product-details.ejs`
* `controllers/productController.js`
* `routes/web/productRoutes.js`
* `public/css/pages/product-details.css`

Example route:

```js
GET /products/:id
```

---

### 4. Login page

Purpose:

* user authentication

Files involved:

* `views/pages/login.ejs`
* `controllers/authController.js`
* `routes/web/authRoutes.js`
* `public/css/pages/auth.css`

---

### 5. Signup page

Purpose:

* create user account

Files involved:

* same auth structure as above

---

### 6. Add product page

Purpose:

* protected page
* only admin or authenticated user depending on your role system
* add new product to DB

Files involved:

* `views/pages/add-product.ejs`
* `controllers/adminController.js`
* `routes/web/adminRoutes.js`
* `middleware/authMiddleware.js`
* `public/css/pages/admin.css`

---

## 6) Required route plan

This is the proper route map.

### Web routes

```js
GET    /                   -> home page
GET    /products           -> all products with search + pagination
GET    /products/:id       -> single product details

GET    /auth/login         -> login form
POST   /auth/login         -> login user
GET    /auth/signup        -> signup form
POST   /auth/signup        -> register user
POST   /auth/logout        -> logout user

GET    /admin/products/new -> add product form
POST   /admin/products     -> save new product
```

### Optional API routes

```js
GET    /api/products
GET    /api/products/:id
POST   /api/auth/login
POST   /api/auth/signup
POST   /api/products
```

You do **not** need APIs for everything if you are using EJS. Server rendering is enough.

---

## 7) Model design

### `Product.js`

```js
{
  name: String,
  price: Number,
  category: String,
  image: String,
  description: String,
  stock: Number,
  featured: Boolean,
  createdAt: Date
}
```

The task explicitly mentions these kinds of product fields. 

### `User.js`

```js
{
  name: String,
  email: String,
  password: String,
  role: String // "user" or "admin"
}
```

Add password hashing with bcrypt.

---

## 8) Middleware plan

This is where many interns fail.

### `authMiddleware.js`

Need at least:

* `protect` → user must be logged in
* `isAdmin` → user must be admin

Example idea:

```js
protect(req, res, next)
isAdmin(req, res, next)
```

### `localsMiddleware.js`

Attach current user to EJS locals:

```js
res.locals.currentUser = user || null;
```

That lets navbar show:

* login/signup if logged out
* logout/admin link if logged in

### `errorMiddleware.js`

Catch:

* invalid product id
* DB failures
* unauthorized access
* page not found

---

## 9) Search and pagination logic

The task explicitly requires:

* server-side search
* pagination on listing page 

### Search logic

Search on:

* `name`
* `category`

Mongo example:

```js
{
  $or: [
    { name: { $regex: search, $options: "i" } },
    { category: { $regex: search, $options: "i" } }
  ]
}
```

### Pagination logic

Use query params:

```js
?page=1&limit=8
```

Backend calculates:

* total products
* total pages
* current page
* skip value

---

## 10) Auth strategy

The task mentions JWT or Firebase Auth. For this stack, use **JWT with HTTP-only cookies**. That is cleaner than storing token in localStorage.

Flow:

* signup → hash password → save user
* login → verify password → generate JWT
* store JWT in cookie
* middleware reads cookie and verifies token
* protected routes continue only if token valid 

Do not overbuild OAuth unless asked.

---

## 11) Responsive design structure

The task repeatedly emphasizes desktop + mobile responsiveness.  

Your CSS should be split like this:

### `base.css`

* reset
* typography
* colors
* container
* buttons

### `layout.css`

* navbar
* footer
* grid system
* wrappers

### `components.css`

* product card
* forms
* alerts
* pagination
* badges

### page-specific CSS

* page-only styling

### `responsive.css`

All media queries here:

* tablet
* mobile
* small mobile

That is far cleaner than scattering media queries everywhere.

---

## 12) Actual implementation order

This is the correct order. Anything else is inefficient.

### Phase 1 — Foundation

1. Initialize project
2. Install dependencies
3. Setup Express
4. Setup EJS
5. Setup public/static assets
6. Setup folder structure
7. Setup DB connection

### Phase 2 — Static UI integration

1. Build navbar/footer partials
2. Build home page
3. Build products page
4. Build product details page
5. Make responsive CSS work

### Phase 3 — Dynamic product data

1. Create Product model
2. Seed sample products
3. Fetch featured products on home
4. Fetch all products on listing page
5. Fetch single product on details page

### Phase 4 — Search + pagination

1. Add search query parsing
2. Add category filtering
3. Add pagination helper
4. Show pagination links in view

### Phase 5 — Auth

1. Create User model
2. Signup/login routes
3. Hash passwords
4. Generate JWT
5. Protect admin routes

### Phase 6 — Add product

1. Add protected form page
2. Validate product input
3. Save to DB
4. Redirect back to products or details page

### Phase 7 — Hardening

1. Global error handling
2. 404 page
3. Input validation
4. Clean UI states for empty search results

### Phase 8 — Deployment

1. Environment variables
2. Render/Vercel deployment
3. MongoDB Atlas connection
4. Final GitHub cleanup

---

## 13) Minimal packages you actually need

```bash
npm install express ejs mongoose dotenv bcryptjs jsonwebtoken cookie-parser multer
npm install --save-dev nodemon
```

Optional:

```bash
npm install express-validator
```

Do not add random packages just to look advanced.

---

## 14) Strong implementation rules

These are non-negotiable:

### Rule 1

Do not mix route definitions and business logic heavily.

### Rule 2

Do not hardcode product data after Week 1.

### Rule 3

Do not keep all CSS in one giant file if the project grows.

### Rule 4

Do not build auth without password hashing.

### Rule 5

Do not leave admin routes unprotected.

### Rule 6

Do not use inline styles in EJS unless absolutely necessary.

### Rule 7

Do not fake responsiveness. Test actual breakpoints.

---

## 15) Best possible simple version vs overbuilt version

### Best simple version

* EJS pages
* MongoDB
* JWT in cookies
* basic admin role
* add product form
* image URL input instead of file upload
* search + pagination
* responsive layout

This is the smartest version for an internship task.

### Overbuilt version

* React frontend
* REST API
* Redux
* complex dashboard
* carts/orders/payment
* image upload pipeline
* cloud storage

That is unnecessary unless the Figma and evaluation demand it. The document does not demand all that. 

---

## 16) Final recommended file structure, simplified version

If you want the most practical version, use this:

```bash
ecommerce-backend-design/
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── pageController.js
│   │   └── productController.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   │   └── errorMiddleware.js
│   ├── models/
│   │   ├── Product.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── pageRoutes.js
│   │   └── productRoutes.js
│   ├── utils/
│   │   ├── jwt.js
│   │   └── pagination.js
│   ├── views/
│   │   ├── partials/
│   │   │   ├── navbar.ejs
│   │   │   ├── footer.ejs
│   │   │   ├── product-card.ejs
│   │   │   └── pagination.ejs
│   │   └── pages/
│   │       ├── home.ejs
│   │       ├── products.ejs
│   │       ├── product-details.ejs
│   │       ├── login.ejs
│   │       ├── signup.ejs
│   │       └── add-product.ejs
│   ├── public/
│   │   ├── css/
│   │   ├── js/
│   │   └── images/
│   ├── app.js
│   └── server.js
├── sample-data/
│   └── products.json
├── .env
├── .gitignore
├── package.json
└── README.md
```

This is enough to complete the assignment properly.

---

## 17) What is missing from your input

You asked to “deeply analyse this website,” but you did **not** provide the actual website or Figma screens here. So I can only deeply analyze the **assignment requirements**, not the exact UI layout. The task document clearly requires static routes first, then DB-driven dynamic rendering, then auth/add-product/pagination/deployment. 
