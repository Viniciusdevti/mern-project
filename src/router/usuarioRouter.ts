import {Request,Response, Router} from "express";
import { Usuario } from "model/usuario";
import { UsuarioService } from "../service/service";


export const usuarioRouter = Router();



    usuarioRouter.get("/id", async (req: Request, res: Response) => {


        const usuario: Usuario | null =
            await UsuarioService.consultar(req.params.id)
            res.json(usuario)
    
           
        });
    


    usuarioRouter.get("/", async (req: Request, res: Response) => {
       const usuario: Usuario [] =
        await UsuarioService.listar(req.query)
        res.json(usuario)

       
    });



    usuarioRouter.post("/criar", async (req: Request, res: Response) => {
        const usuario =
         await UsuarioService.criar(req.body)
         res.json(usuario)
 
        
        
     });



     