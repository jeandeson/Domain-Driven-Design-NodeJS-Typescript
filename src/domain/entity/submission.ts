import { Entity } from "../../core/domain/entity";

type SubmissionProps = {
  id?: number;
  challengeId: number;
  studentId: number;
  createdAt?: Date;
};

export class Submission extends Entity<SubmissionProps> {
  private constructor(props: SubmissionProps) {
    super(props);
  }

  static create(props: SubmissionProps) {
    const submission = new Submission({
      ...props,
      createdAt: props.createdAt ?? new Date(),
    });

    return submission;
  }
}
