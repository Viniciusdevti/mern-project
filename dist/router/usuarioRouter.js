"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const service_1 = require("../service/service");
exports.usuarioRouter = express_1.Router();
exports.usuarioRouter.get("/id", async (req, res) => {
    const usuario = await service_1.UsuarioService.consultar(req.params.id);
    res.json(usuario);
});
exports.usuarioRouter.get("/", async (req, res) => {
    const usuario = await service_1.UsuarioService.listar(req.query);
    res.json(usuario);
});
exports.usuarioRouter.post("/criar", async (req, res) => {
    const usuario = await service_1.UsuarioService.criar(req.body);
    res.json(usuario);
});
//# sourceMappingURL=usuarioRouter.js.map