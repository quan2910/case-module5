"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const user_controller_1 = __importDefault(require("../controller/user-controller"));
exports.userRouter = (0, express_1.Router)();
exports.userRouter.get('/lists', user_controller_1.default.getAll);
//# sourceMappingURL=user-router.js.map