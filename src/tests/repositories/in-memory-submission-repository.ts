import { ISubmissionRepository } from "../../application/repositories/submissionRepository";
import { Submission } from "../../domain/entity/submission";

export class InMemorySubmissionRepository implements ISubmissionRepository {
  submissions: Submission[] = [];

  async findById(id: number): Promise<Submission> {
    const submission = this.submissions.find(
      (submission) => submission.props.id === id
    );

    if (!submission) {
      return null;
    }
    return submission;
  }

  async insertSubmission(submissionToInsert: Submission): Promise<Submission> {
    const submission = this.submissions.push(submissionToInsert);

    if (!submission) {
      return null;
    }
    return submissionToInsert;
  }
}
