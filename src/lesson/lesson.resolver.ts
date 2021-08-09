import { Resolver, Query } from '@nestjs/graphql';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  @Query((returns) => LessonType)
  lesson() {
    return {
      id: 'asdasd123123',
      name: 'art lesson',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }
}
