import { Challenge } from "../../domain/entity/challenge";

export interface IChallengeRepository {
  findById(id: number): Promise<Challenge | null>;
}
