import { Controller, Get, Param, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CourseService } from "./course.service";

@Controller("")
@ApiTags("Courses")
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Get("courses")
  @ApiOperation({ summary: "Get all course" })
  @ApiResponse({
    status: 200,
    description: "Successfully retrieved all course",
  })
  async getAllCourse() {
    return await this.courseService.getAllCourse();
  }

  @Get("topCourse")
  @ApiOperation({ summary: "Get top course" })
  @ApiResponse({
    status: 200,
    description: "Successfully retrieved course",
  })
  async getTopCourse() {
    return await this.courseService.getTopCourse();
  }

  @Get("topShortCourse")
  @ApiOperation({ summary: "Get top short course" })
  @ApiResponse({
    status: 200,
    description: "Successfully retrieved course",
  })
  async getTopShortCourse() {
    return await this.courseService.getTopShortCourse();
  }

  @Get("course/:id")
  @ApiOperation({ summary: "Get course by id" })
  @ApiResponse({
    status: 200,
    description: "Successfully retrieved course",
  })
  async getCourseDetail(@Param("id") id: string) {
    return await this.courseService.getCourseDetail(id);
  }
}
