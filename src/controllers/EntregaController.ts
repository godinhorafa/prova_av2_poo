import { Request, Response } from 'express'

import { EntregaServices } from '../services/EntregaServices'

class EntregaController {

    async create(request: Request, response: Response) {
        let { id_funcionario, nome_epi, data_entrega, quantidade_entregue }  = request.body
        data_entrega = new Date(data_entrega)

        const entregaServices = new EntregaServices()

        const entrega = await entregaServices.create({ id_funcionario, nome_epi, data_entrega, quantidade_entregue })

        return response.json(entrega)
    }

    async index(request: Request, response: Response) {
        const entregaServices = new EntregaServices()

        try {
            const entrega = await entregaServices.index()
            return response.json(entrega)
        } catch(err) {
            return response
                .status(400)
                .json({ message: err.message })
        }
    }

    async show(request:Request, response:Response) {
        const entregaServices = new EntregaServices()
        const { id } = request.params

        try {
            const entrega = await entregaServices.show({ id })
            return response.json(entrega)
        } catch(err) {
            return response
                .status(400)
                .json({ message: err.message })
        }
    }

    async delete(request: Request, response: Response) {
        const entregaServices = new EntregaServices()
        const { id } = request.params

        try {
            await entregaServices.delete({ id })
            return response.json({ message: 'Entrega Id deleted successfully'})
        } catch(err) {
            return response
                .status(400)
                .json({ message: err.message })
        }
    }
    async update(request: Request, response: Response) {
        let { id_funcionario, nome_epi, data_entrega, quantidade_entregue } = request.body
        data_entrega = new Date(data_entrega)
        const { id } = request.params
    
        const entregaServices = new EntregaServices()
    
        try {
          const entrega = await entregaServices.update({ id, id_funcionario, nome_epi, data_entrega, quantidade_entregue })
          return response.json(entrega)
        } catch(err) {
          return response
            .status(400)
            .json({ message: err.message })
        }
      } 
}

export { EntregaController }