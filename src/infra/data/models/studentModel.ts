import { sequelize } from "../connection";
import { DataTypes } from "sequelize";
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from "@sequelize/core";

class StudentModel extends Model<
  InferAttributes<StudentModel>,
  InferCreationAttributes<StudentModel>
> {
  declare id?: CreationOptional<number>;
  declare name: string;
  declare email: string;
}

StudentModel.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
    email: {
      type: new DataTypes.STRING(),
      allowNull: false,
    },
  },
  {
    tableName: "student",
    sequelize,
    timestamps: false,
  }
);

export { StudentModel };
