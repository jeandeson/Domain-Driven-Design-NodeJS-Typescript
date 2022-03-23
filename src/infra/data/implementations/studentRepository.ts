import { IStudentRepository } from "../../../application/repositories/studentRepository";
import { Student } from "../../../domain/entity/student";
import { StudentModel } from "../models/studentModel";

class StudentRepository implements IStudentRepository {
  async findById(requestedStudentId: number): Promise<Student> {
    try {
      const studentRequestResult = await StudentModel.findByPk(
        requestedStudentId
      );
      if (studentRequestResult !== null) {
        const { id, name, email } = studentRequestResult;
        const student = Student.create({ id, name, email });
        return student;
      }
      return null;
    } catch (error) {
      console.log(error);
      throw new Error("failed to find this id");
    }
  }
}

export { StudentRepository };
