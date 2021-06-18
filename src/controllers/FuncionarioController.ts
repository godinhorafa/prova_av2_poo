import { Request, response, Response } from 'express'
import { FuncionarioServices } from '../services/FuncionarioServices'

class FuncionarioController {

    async create(request: Request, response: Response) {
        const { id, nome, cpf, funcao } = request.body
        
        const funcionarioServices = new FuncionarioServices()

        try {
            const funcionario = await funcionarioServices.create({ id, nome, cpf, funcao })
            return response.json(funcionario)
        } catch(err) {
            return response
                .status(400)
                .json({ message: err.message})
        }
    }

    async index(request: Request, response: Response) {
        const funcionarioServices = new FuncionarioServices()

        try{
            const funcionario = await funcionarioServices.index()
            return response.json(funcionario)
        } catch(err) {
            return response
                .status(400)
                .json({ message: err.message })
        }
    }
}

export { FuncionarioController }