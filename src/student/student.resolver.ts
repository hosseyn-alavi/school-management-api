import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentInput, UpdateStudentInput } from './student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver((of) => StudentType)
export class StudentResolver {
  constructor(private studentService: StudentService) {}

  @Query((returns) => [StudentType])
  students() {
    return this.studentService.getAllStudents();
  }

  @Query((returns) => StudentType)
  student(@Args('id') id: string) {
    return this.studentService.getStudentById(id);
  }

  @Mutation((returns) => StudentType)
  createStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }

  @Mutation((returns) => StudentType)
  updateStudent(
    @Args('updateStudentInput') updateStudentInput: UpdateStudentInput,
  ) {
    return this.studentService.updateStudent(updateStudentInput);
  }
}
