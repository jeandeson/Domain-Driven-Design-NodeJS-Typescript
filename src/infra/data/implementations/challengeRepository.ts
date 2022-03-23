import { IChallengeRepository } from "../../../application/repositories/challengeRepository";
import { Challenge } from "../../../domain/entity/challenge";
import { ChallegeModel } from "../models/challengeModel";

class ChallengeRepository implements IChallengeRepository {
  async findById(requestedChallengeId: number): Promise<Challenge> {
    try {
      const challengeRequestResult = await ChallegeModel.findByPk(
        requestedChallengeId
      );
      if (challengeRequestResult) {
        const { id, instructionsUrl, title } = challengeRequestResult;
        const challenge = Challenge.create({ id, instructionsUrl, title });
        return challenge;
      }
      return null;
    } catch (error) {
      console.log(error);
      throw new Error("failed to find this id");
    }
  }
}

export { ChallengeRepository };
