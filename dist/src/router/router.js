"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const motobike_router_1 = require("./motobike-router");
const category_router_1 = require("./category-router");
exports.router = (0, express_1.Router)();
exports.router.use('/auth', motobike_router_1.motobikeRouter);
exports.router.use('/category', category_router_1.categoryRouter);
//# sourceMappingURL=router.js.map