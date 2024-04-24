import { CourseRepository } from "./course.repository";
export declare class CourseService {
    private readonly courseRepository;
    constructor(courseRepository: CourseRepository);
    getAllCourse(): Promise<({
        topic: {
            id: string;
            title: string;
            courseId: string;
        }[];
    } & {
        id: string;
        name: string;
        price: number;
        image: string;
        teacher: string;
        courseLevel: string;
        NumberOfSessions: number;
        courseTime: number;
        courseStatus: import(".prisma/client").$Enums.COURSESTATUS;
        detailTitle: string;
        detailDescription: string;
        veiws: number;
    })[]>;
    getCourseDetail(id: string): Promise<{
        id: string;
        name: string;
        price: number;
        image: string;
        teacher: string;
        courseLevel: string;
        NumberOfSessions: number;
        courseTime: number;
        courseStatus: import(".prisma/client").$Enums.COURSESTATUS;
        detailTitle: string;
        detailDescription: string;
        veiws: number;
    }>;
    getTopCourse(): Promise<{
        id: string;
        name: string;
        price: number;
        image: string;
        teacher: string;
        courseLevel: string;
        NumberOfSessions: number;
        courseTime: number;
        courseStatus: import(".prisma/client").$Enums.COURSESTATUS;
        detailTitle: string;
        detailDescription: string;
        veiws: number;
    }[]>;
    getTopShortCourse(): Promise<({
        topic: {
            id: string;
            title: string;
            courseId: string;
        }[];
    } & {
        id: string;
        name: string;
        price: number;
        image: string;
        teacher: string;
        courseLevel: string;
        NumberOfSessions: number;
        courseTime: number;
        courseStatus: import(".prisma/client").$Enums.COURSESTATUS;
        detailTitle: string;
        detailDescription: string;
        veiws: number;
    })[]>;
}
