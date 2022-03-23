import { CreateChallengeSubmission } from "./create-challenge-submission";
import { InMemoryStudentRepository } from "../../../tests/repositories/in-memory-student-repository";
import { InMemoryChallengeRepository } from "../../../tests/repositories/in-memory-challenge-repository";

import { InMemorySubmissionRepository } from "../../../tests/repositories/in-memory-submission-repository";

describe("Create challenge subbmison use case", () => {
  it("should be able to a new challenge submission", async () => {
    const inMemoryStudentRepository = new InMemoryStudentRepository();
    const inMemoryChallengeRepository = new InMemoryChallengeRepository();
    const inMemorySubmissionRepository = new InMemorySubmissionRepository();

    const sut = new CreateChallengeSubmission(
      inMemoryStudentRepository,
      inMemoryChallengeRepository,

      inMemorySubmissionRepository
    );

    const response = await sut.execute({
      challengeId: 1,
      studentId: 1,
    });

    expect(response).toBeTruthy();
  });
});
