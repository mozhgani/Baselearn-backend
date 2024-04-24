import { Injectable } from "@nestjs/common";
import { CourseRepository } from "./course.repository";
@Injectable()
export class CourseService {
  constructor(private readonly courseRepository: CourseRepository) {}

  async getAllCourse() {
    return await this.courseRepository.getAllCourse();
  }

  async getCourseDetail(id: string) {
    const courseDetail = await this.courseRepository.getCourseDetail(id);

    if (!courseDetail) {
      throw new Error("course not found");
    }

    return courseDetail;
  }

  async getTopCourse(){
    return this.courseRepository.getTopCourse()
  }

  async getTopShortCourse() {
    return this.courseRepository.getTopShortCourse()
  }
}
