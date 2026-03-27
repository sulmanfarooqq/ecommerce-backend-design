import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import "dotenv/config";
import connectDB from "./configs/db.js";
import connectCloudinary from "./configs/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

// App Config
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 4000;

// Connect DB
connectDB();

// Connect Cloudinary
connectCloudinary();

// Middlewares
app.use(express.json());
app.use(cors());

// Api Endpoints
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// --- PRODUCTION SERVING ---
// Serve Admin Panel (Static files at /admin)
app.use("/admin", express.static(path.join(__dirname, "../admin/dist")));
app.get("/admin*", (req, res) => {
  res.sendFile(path.join(__dirname, "../admin/dist/index.html"));
});

// Serve Frontend (Storefront)
app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
