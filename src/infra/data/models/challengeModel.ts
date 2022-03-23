import { sequelize } from "../connection";
import { DataTypes } from "sequelize";
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "@sequelize/core";

class ChallegeModel extends Model<
  InferAttributes<ChallegeModel>,
  InferCreationAttributes<ChallegeModel>
> {
  declare id: CreationOptional<number>;
  declare title: string;
  declare instructionsUrl: string;
}

ChallegeModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    instructionsUrl: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
  },
  {
    tableName: "challenge",
    sequelize,
    timestamps: false,
  }
);

export { ChallegeModel };
