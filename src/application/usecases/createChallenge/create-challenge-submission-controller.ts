import { CreateChallengeSubmission } from "./create-challenge-submission";
import { Request, Response } from "express";

class CreateChallengeController {
  private useCase: CreateChallengeSubmission;

  constructor(useCase: CreateChallengeSubmission) {
    this.useCase = useCase;
  }

  async execute(req: Request, res: Response) {
    const challengeDTO = req["body"] as createChallengeDTO;
    try {
      const result = await this.useCase.execute(challengeDTO);
      if (result) {
        return res.status(200).json(result);
      }
      return res.status(400).json({ error: "error" });
    } catch (error) {
      return res.status(500).json({ error: `${error.message}` });
    }
  }
}

export { CreateChallengeController };
