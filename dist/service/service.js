"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = require("../model/usuario");
class UsuarioService {
    static listar(query) {
        return usuario_1.UsuarioModel.find(query).exec();
    }
    static async consultar(id) {
        const user = await usuario_1.UsuarioModel.findById(id).exec();
        if (user == null) {
            throw "Usuario não encontrado!";
        }
        return user;
    }
    static criar(usuario) {
        const model = new usuario_1.UsuarioModel(usuario);
        return model.save();
    }
    static atualizar(id, usuario) {
        return usuario_1.UsuarioModel
            .update({ id: id }, usuario).exec();
    }
    static async remover(id) {
        await usuario_1.UsuarioModel.remove({ id: id }).exec();
    }
}
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=service.js.map