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
exports.ArticleController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const article_service_1 = require("./article.service");
let ArticleController = class ArticleController {
    constructor(articleService) {
        this.articleService = articleService;
    }
    async getAllArticle() {
        console.log("await this.articleService.getAllArticle()", await this.articleService.getAllArticle());
        return await this.articleService.getAllArticle();
    }
    async getArticleDetail(id) {
        return await this.articleService.getArticleDetail(id);
    }
    async getTopArticle() {
        return await this.articleService.getTopArticle();
    }
};
__decorate([
    (0, common_1.Get)("articles"),
    (0, swagger_1.ApiOperation)({ summary: "Get all article" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Successfully retrieved all article",
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getAllArticle", null);
__decorate([
    (0, common_1.Get)("article/:id"),
    (0, swagger_1.ApiOperation)({ summary: "Get article by id" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Successfully retrieved article",
    }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getArticleDetail", null);
__decorate([
    (0, common_1.Get)("topArticle"),
    (0, swagger_1.ApiOperation)({ summary: "Get top article" }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: "Successfully retrieved top article",
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ArticleController.prototype, "getTopArticle", null);
ArticleController = __decorate([
    (0, common_1.Controller)(""),
    (0, swagger_1.ApiTags)("Article"),
    __metadata("design:paramtypes", [article_service_1.ArticleService])
], ArticleController);
exports.ArticleController = ArticleController;
//# sourceMappingURL=article.controller.js.map