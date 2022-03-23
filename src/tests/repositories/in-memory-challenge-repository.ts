import { IChallengeRepository } from "../../application/repositories/challengeRepository";
import { Challenge } from "../../domain/entity/challenge";

export class InMemoryChallengeRepository implements IChallengeRepository {
  Challenges: Challenge[] = [];

  async findById(id: number): Promise<Challenge> {
    const challenge = this.Challenges.find((challenge) => challenge.id === id);

    if (!challenge) {
      return null;
    }
    return challenge;
  }
}
