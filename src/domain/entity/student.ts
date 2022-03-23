import { Entity } from "../../core/domain/entity";

type StudentProps = {
  id?: number;
  name: string;
  email: string;
};

export class Student extends Entity<StudentProps> {
  private constructor(props: StudentProps) {
    super(props);
  }

  static create(props: StudentProps) {
    const student = new Student(props);

    return student;
  }
}
