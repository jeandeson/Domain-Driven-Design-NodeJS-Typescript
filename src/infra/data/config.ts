import { Dialect } from "sequelize/types";

const config = {
  database: "projectddd",
  username: "root",
  password: "",
  host: "localhost",
  dialect: "mariadb" as Dialect,
};

export { config };
