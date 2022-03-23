import { Submission } from "../../../domain/entity/submission";
import { IChallengeRepository } from "../../repositories/challengeRepository";
import { IStudentRepository } from "../../repositories/studentRepository";
import { ISubmissionRepository } from "../../repositories/submissionRepository";

export class CreateChallengeSubmission {
  constructor(
    private studentRepository: IStudentRepository,
    private challengeRepository: IChallengeRepository,
    private submissionRepository: ISubmissionRepository
  ) {}

  async execute({ studentId, challengeId }: createChallengeDTO) {
    const student = await this.studentRepository.findById(studentId);
    const challenge = await this.challengeRepository.findById(challengeId);

    if (student) {
      throw new Error("Student already exists");
    }

    if (challenge) {
      throw new Error("Challenge already exists");
    }

    const submission = Submission.create({ studentId, challengeId });

    const submissionCreated = await this.submissionRepository.insertSubmission(
      submission
    );

    return submissionCreated;
  }
}
