import { CreateChallengeController } from "./create-challenge-submission-controller";
import { CreateChallengeSubmission } from "../createChallenge/create-challenge-submission";

import { ChallengeRepository } from "../../../infra/data/implementations/challengeRepository";
import { StudentRepository } from "../../../infra/data/implementations/studentRepository";
import { SubmissionRepository } from "../../../infra/data/implementations/submissionRepository";

const challengeRepository = new ChallengeRepository();

const studentRepository = new StudentRepository();

const submissionRepository = new SubmissionRepository();

const createChallengeSubmission = new CreateChallengeSubmission(
  studentRepository,
  challengeRepository,
  submissionRepository
);

const createChallengeController = new CreateChallengeController(
  createChallengeSubmission
);

export { createChallengeController };
