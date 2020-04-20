import express from "express";
const router = express.Router();

router.get("/Shop", (req, res) => {
  res.send("TEST");
});

export default router;
