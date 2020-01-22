import { Usuario, UsuarioModel } from '../model/usuario';



export class UsuarioService{

    static listar (query?:any): Promise<Usuario[]>{
        return UsuarioModel.find(query).exec()
    }

    static async consultar (id: string): Promise<Usuario |null> {
       const user = await UsuarioModel.findById(id).exec();
        if(user == null ){
            throw "Usuario não encontrado!"
            }
            return user
    } 
    
    


    static criar(usuario: Usuario): Promise<Usuario |null> {
        const model = new UsuarioModel(usuario)
        return model.save()
    }

    static atualizar (id: string, usuario: Usuario): Promise<Usuario | null> {
        return UsuarioModel
        .update({id: id}, usuario).exec()
            }

    static async remover (id: string) : Promise<void>{
                await UsuarioModel.remove({id: id }).exec()
            }


 
            
}