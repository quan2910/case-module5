"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogRouter = void 0;
const blog_controller_1 = __importDefault(require("../controller/blog-controller"));
const express_1 = require("express");
const auth_1 = require("../middleware/auth");
exports.blogRouter = (0, express_1.Router)();
exports.blogRouter.use(auth_1.auth);
exports.blogRouter.get('', blog_controller_1.default.getAll);
exports.blogRouter.post('', blog_controller_1.default.add);
exports.blogRouter.delete('/:id', blog_controller_1.default.delete);
exports.blogRouter.put('/:id', blog_controller_1.default.edit);
//# sourceMappingURL=blog-router.js.map