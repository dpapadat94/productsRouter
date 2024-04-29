import express from "express";
import userRouter from "./users.route";
import productRouter from "./products.route";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("working");
});

router.use("/users", userRouter);

router.use("/products", productRouter);

export default router;
