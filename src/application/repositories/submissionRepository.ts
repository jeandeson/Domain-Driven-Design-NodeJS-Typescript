import { Submission } from "../../domain/entity/submission";

export interface ISubmissionRepository {
  findById(id: number): Promise<Submission | null>;

  insertSubmission(submissionToInsert: Submission): Promise<Submission> | null;
}
