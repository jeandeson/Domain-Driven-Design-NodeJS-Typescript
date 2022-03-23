import { IStudentRepository } from "../../application/repositories/studentRepository";
import { Student } from "../../domain/entity/student";

export class InMemoryStudentRepository implements IStudentRepository {
  Students: Student[] = [];

  async findById(id: number): Promise<Student> {
    return;
  }
}
