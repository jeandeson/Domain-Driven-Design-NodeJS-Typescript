import { ISubmissionRepository } from "../../../application/repositories/submissionRepository";
import { Submission } from "../../../domain/entity/submission";
import { SubmissionModel } from "../models/submissionModel";

class SubmissionRepository implements ISubmissionRepository {
  async findById(id: number): Promise<Submission> {
    try {
      const submissionRequestResult = await SubmissionModel.findByPk(id);
      const submission = Submission.create({
        id: submissionRequestResult.id,
        challengeId: submissionRequestResult.challengeId,
        studentId: submissionRequestResult.challengeId,
        createdAt: submissionRequestResult.createdAt,
      });
      return submission;
    } catch (error) {
      throw new Error("failed to find this id");
    }
  }

  async insertSubmission(toInsertSubmission: Submission): Promise<Submission> {
    try {
      const { createdAt, challengeId, studentId } = toInsertSubmission.props;
      const submissionRequestResult = await SubmissionModel.create({
        createdAt,
        challengeId,
        studentId,
      });
      const submission = Submission.create({
        id: submissionRequestResult.id,
        challengeId: submissionRequestResult.challengeId,
        studentId: submissionRequestResult.challengeId,
        createdAt: submissionRequestResult.createdAt,
      });
      return submission;
    } catch (error) {
      throw new Error("failed to find this id");
    }
  }
}

export { SubmissionRepository };
