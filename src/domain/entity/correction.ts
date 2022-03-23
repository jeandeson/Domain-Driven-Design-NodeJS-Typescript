import { Entity } from "../../core/domain/entity";

type CorrectionProps = {
  id?: number;
  grade: number;
  submissionId: string;
  createdAt: Date;
};

export class Correction extends Entity<CorrectionProps> {
  private constructor(props: CorrectionProps) {
    super(props);
  }

  static create(props: CorrectionProps) {
    const correction = new Correction(props);

    return correction;
  }
}
