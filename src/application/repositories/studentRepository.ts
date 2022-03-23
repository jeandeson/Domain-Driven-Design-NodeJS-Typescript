import { Student } from "../../domain/entity/student";

export interface IStudentRepository {
  findById(id: number): Promise<Student | null>;
}
