import {
    Box,
    Button,
    CardContent,
    CircularProgress,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TablePagination
} from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React, { useEffect, useState } from 'react'
import axios from '../../service/axios'

const baseApiUrl = 'https://jsonplaceholder.typicode.com/users'

export const AppUsuariosLista = () => {

    const [atualizando, setAtualizando] = useState(false)
    const [falhou, setFalhou] = useState(false)
    const [usuarios, setUsuarios] = useState([])

    const [tamanhoPagina, setTamanhoPagina] = useState(10)
    const [pagina, setPagina] = useState(0)

    const aoMudarPagina = (e, novaPagina) => setPagina(novaPagina)
    const aoMudarTamanhoPagina = (e) => {
        setTamanhoPagina(parseInt(e.target.value, 10));
        setPagina(0);
    }

    function aoExcluirUsuario (usuario) {
        axios.delete(`${baseApiUrl}/${usuario.id}`)
            .then(() => {
                setUsuarios(usuarios.filter(u => u.id !== usuario.id))
            })
    }

    useEffect(() => {
        setAtualizando(true)
        axios.get(baseApiUrl)
            .then(({ data }) => setUsuarios(data))
            .catch(() => { setFalhou(true) })
            .finally(() => { setAtualizando(false) })
    }, [setUsuarios])

    return (
        <Box component='div' my={1}>
            <CardContent>
                {falhou && (
                    <Box component={Alert} mb={2} severity='error'>
                        Um erro impediu o carregamento da lista de usuários!
                    </Box>
                )}
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Usuário</TableCell>
                                <TableCell>Email</TableCell>
                                
                                <TableCell align='right'>Opções</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {atualizando && (
                                <TableRow key='atualizando'>
                                    <TableCell colSpan={5}>
                                        <CircularProgress disableShrink />
                                    </TableCell>
                                </TableRow>
                            )}
                            {usuarios.slice(pagina * tamanhoPagina, pagina * tamanhoPagina + tamanhoPagina).map(row => (
                                <TableRow key={row.id}>
                                    <TableCell component='th' scope='row'>
                                        {row.id}
                                    </TableCell>
                                    <TableCell>{row.username}</TableCell>
                                    <TableCell>{row.username}</TableCell>
                                    
                                    <TableCell align='right'>
                                        <Button color='secondary' onClick={() => aoExcluirUsuario(row)}>Excluir</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15, 25]}
                    component="div"
                    count={usuarios.length}
                    rowsPerPage={tamanhoPagina}
                    page={pagina}
                    onChangePage={aoMudarPagina}
                    onChangeRowsPerPage={aoMudarTamanhoPagina}
                />
            </CardContent>
        </Box>
    )
}
