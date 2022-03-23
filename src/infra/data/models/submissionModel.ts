import { sequelize } from "../connection";
import { DataTypes } from "sequelize";
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "@sequelize/core";

class SubmissionModel extends Model<
  InferAttributes<SubmissionModel>,
  InferCreationAttributes<SubmissionModel>
> {
  declare id: CreationOptional<number>;
  declare studentId: number;
  declare challengeId: number;
  declare createdAt: CreationOptional<Date>;
}

SubmissionModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    studentId: {
      type: new DataTypes.INTEGER(),
      allowNull: false,
    },
    challengeId: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
  },
  {
    tableName: "submission",
    sequelize,
    timestamps: false,
  }
);

export { SubmissionModel };
