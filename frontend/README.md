## Módulo MERN Bootcamp

Este projeto compõe a avaliação final do módulo MERN, do MBA em Desenvolvimento Web do Uniesp.

**Professor:** Anderson Leal ([@andersonleal](https://github.com/andersonleal))

### Equipe

- Jonathan Souza ([@jralison](https://github.com/jralison))

## Requisitos da avaliação [*](https://github.com/andersonleal/iesp_react_class)

O projeto deve conter os seguintes conceitos / Libs:

- [ ] Hooks (utilizar pelo menos um hook não visto em sala)
- [x] React router (ver [1](./src/routes/AppRoutes.js#L14))
- [x] styled-components (ver [2](src/components/AppUsuarios.js#L6-L12), [3](src/components/AppUsuarios.js#L17), [4](src/components/AppUsuarios.js#L23))
- [x] axios (ver [5](./src/components/usuarios/AppUsuariosLista.js#L45-L48), [6](./src/components/usuarios/AppUsuariosLista.js#L37-L40))

Criar um crud de usuários (Listar, Remover, Adicionar, Atualizar).

- [x] Listar (ver [7](./src/components/usuarios/AppUsuariosLista.js))
- [x] Remover (ver [8](./src/components/usuarios/AppUsuariosLista.js#L36-L41), [9](./src/components/usuarios/AppUsuariosLista.js#L87))
- [ ] Adicionar
- [ ] Atualizar

#### Schema 
```
{
    username,
    password,
    phoneNumber,
    address
}
```

**URL Base da API**

```
https://5e43521f3dfe6c001421e84e.mockapi.io/usuarios
```
