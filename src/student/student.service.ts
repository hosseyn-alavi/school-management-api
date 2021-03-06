import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentInput, UpdateStudentInput } from './student.input';
import { Student } from './student.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  async getAllStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  async getStudentById(id: string): Promise<Student> {
    return this.studentRepository.findOne({ id });
  }

  async createStudent(
    createStudentInput: CreateStudentInput,
  ): Promise<Student> {
    const { name, lastName, age } = createStudentInput;
    const student = this.studentRepository.create({
      id: uuid(),
      name,
      lastName,
      age,
    });
    return this.studentRepository.save(student);
  }

  async getManyStudents(studentIds: string[]): Promise<Student[]> {
    return this.studentRepository.find({
      where: {
        id: {
          $in: studentIds,
        },
      },
    });
  }

  async updateStudent(
    updateStudentInput: UpdateStudentInput,
  ): Promise<Student> {
    const { id, ...restParams } = updateStudentInput;
    const student = await this.studentRepository.findOne({ id });
    return this.studentRepository.save({
      ...student,
      ...restParams,
    });
  }

  async deleteStudent(id: string): Promise<string> {
    await this.studentRepository.delete({ id });
    return 'Item successfully deleted';
  }
}
