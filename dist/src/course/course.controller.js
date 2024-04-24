"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const course_service_1 = require("./course.service");
let CourseController = class CourseController {
    constructor(courseService) {
        this.courseService = courseService;
    }
    async getAllCourse() {
        return await this.courseService.getAllCourse();
    }
    async getTopCourse() {
        return await this.courseService.getTopCourse();
    }
    async getTopShortCourse() {
        return await this.courseService.getTopShortCourse();
    }
    async getCourseDetail(id) {
        return await this.courseService.getCourseDetail(id);
    }
};
__decorate([
    (0, common_1.Get)("courses"),
    (0, swagger_1.ApiOperation)({ summary: "Get all course" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Successfully retrieved all course",
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "getAllCourse", null);
__decorate([
    (0, common_1.Get)("topCourse"),
    (0, swagger_1.ApiOperation)({ summary: "Get top course" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Successfully retrieved course",
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "getTopCourse", null);
__decorate([
    (0, common_1.Get)("topShortCourse"),
    (0, swagger_1.ApiOperation)({ summary: "Get top short course" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Successfully retrieved course",
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "getTopShortCourse", null);
__decorate([
    (0, common_1.Get)("course/:id"),
    (0, swagger_1.ApiOperation)({ summary: "Get course by id" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Successfully retrieved course",
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CourseController.prototype, "getCourseDetail", null);
CourseController = __decorate([
    (0, common_1.Controller)(""),
    (0, swagger_1.ApiTags)("Courses"),
    __metadata("design:paramtypes", [course_service_1.CourseService])
], CourseController);
exports.CourseController = CourseController;
//# sourceMappingURL=course.controller.js.map