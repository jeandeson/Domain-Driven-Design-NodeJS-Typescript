import Express from "express";
import { createChallengeController } from "../../../application/usecases/createChallenge";

const controllers = Express.Router();

controllers.post("/challenge", (req, res) =>
  createChallengeController.execute(req, res)
);

export { controllers };
