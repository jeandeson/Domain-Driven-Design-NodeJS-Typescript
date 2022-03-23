import { Entity } from "../../core/domain/entity";

type ChallengeProps = {
  id?: number;
  title: string;
  instructionsUrl: string;
};

export class Challenge extends Entity<ChallengeProps> {
  private constructor(props: ChallengeProps) {
    super(props);
  }

  get id() {
    return this.props.id;
  }

  static create(props: ChallengeProps) {
    const challenge = new Challenge(props);

    return challenge;
  }
}
