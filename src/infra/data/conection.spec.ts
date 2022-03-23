import { Sequelize } from "sequelize";
import { config } from "./config";

const sequelize = new Sequelize(config);

export const conect = async () => {
  try {
    await sequelize.authenticate();
    sequelize.close();
    return true;
  } catch (error) {
    sequelize.close();
    return false;
  }
};

describe("create connection test", () => {
  it("should be able to connect", async () => {
    const response = await conect();
    expect(response).toBeTruthy();
  });
});
