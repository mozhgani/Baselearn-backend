import { PrismaClient } from '@prisma/client';
declare const prisma: PrismaClient<{
    log: ({
        emit: "event";
        level: "query";
    } | {
        emit: "stdout";
        level: "error";
    } | {
        emit: "stdout";
        level: "info";
    } | {
        emit: "stdout";
        level: "warn";
    })[];
}, "query", import("@prisma/client/runtime/library").DefaultArgs>;
export default prisma;
