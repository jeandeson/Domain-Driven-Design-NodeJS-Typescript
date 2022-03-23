import { SubmissionRepository } from "./submissionRepository";

describe("create a submssion request", () => {
  it("it should to return request submission", async () => {
    const submissionRepository = new SubmissionRepository();
    const result = await submissionRepository.findById(1);
    expect(result);
  });
});
