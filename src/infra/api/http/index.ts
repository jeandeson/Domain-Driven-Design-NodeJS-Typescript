import { Router } from "express";
import { controllers } from "./controllers";

const router = Router();

router.use(controllers);

router.get("/", (req, res) => {
  return res.json({ message: "Hellow! we're up" });
});

export { router };
