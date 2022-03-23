import { router } from "./api/http/index";
import express from "express";

const app = express();

app.use(express.urlencoded({ extended: true }), express.json());

const port = process.env.PORT || 5000;

app.use(router);

app.listen(port, () => {
  console.log(`connected on port ${port}`);
});
