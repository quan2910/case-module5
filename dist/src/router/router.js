"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const user_router_1 = require("./user-router");
const blog_router_1 = require("./blog-router");
const comment_router_1 = require("./comment-router");
exports.router = (0, express_1.Router)();
exports.router.use('/users', user_router_1.userRouter);
exports.router.use('/blogs', blog_router_1.blogRouter);
exports.router.use('/comments', comment_router_1.commentRouter);
//# sourceMappingURL=router.js.map