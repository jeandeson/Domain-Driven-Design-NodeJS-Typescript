import { Sequelize } from "@sequelize/core";

import { config } from "./config";

const sequelize = new Sequelize(config);

export { sequelize };
