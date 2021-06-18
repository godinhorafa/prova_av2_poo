import { getCustomRepository } from 'typeorm'
//import { Despesas } from '../entities/Despesas'
import { EntregaRepository } from '../repositories/EntregaRepository'


interface IEntregaCreate {
    id_funcionario: string;
    nome_epi: number;
    data_entrega: Date;
    quantidade_entregue: number;
}

interface IEntregaShow {
    id: string;
}

interface IEntregaUpdate {
    id: string;
    id_funcionario: string;
    nome_epi: number;
    data_entrega: Date;
    quantidade_entregue: number;
}

class EntregaServices {

    async create({ id_funcionario,nome_epi, data_entrega, quantidade_entregue}: IEntregaCreate){
        const entregaRepository = getCustomRepository(EntregaRepository)
        
        /*
        const idAlreadyExists = await despesasRepository.findOne({
            id
        })

        if(idAlreadyExists) {
            throw new Error('Id alredy exists!')
        }*/

        const entrega = entregaRepository.create({
            id_funcionario,
            nome_epi,
            data_entrega,
            quantidade_entregue
        })

        await entregaRepository.save(entrega)

        return entrega
    }

    async index() {
        const entregaRepository = getCustomRepository(EntregaRepository)

        const entrega = await entregaRepository.find({
            relations: ['funcionario']
        })
        return entrega
    }

    async show({ id }: IEntregaShow) {
        const entregaRepository = getCustomRepository(EntregaRepository)

        const entrega = await entregaRepository.findOne(id, {
            relations: ['funcionario']
        })

        if(!entrega) {
            throw new Error('Id not found!')
        }

        return entrega 
    }

    async delete({ id }: IEntregaShow) {
        const entregaRepository = getCustomRepository(EntregaRepository)

        const entrega = await entregaRepository.findOne({ id })

        if(!entrega) {
            throw new Error('Entrega Id not found!')
        }

        return await entregaRepository.delete({ id })
    }

    async update({ id, id_funcionario, nome_epi, data_entrega, quantidade_entregue}: IEntregaUpdate) {
        const entregaRepository = getCustomRepository(EntregaRepository)

        let entrega = await entregaRepository.findOne({ id })

        if(!entrega) {
            throw new Error('Entrega Id not found!')
        }

        const entregaUpdated = entregaRepository.update(id, {
            id_funcionario,
            nome_epi,
            data_entrega,
            quantidade_entregue
        })

        entrega = await entregaRepository.findOne(id)

        return entrega 
    }
}

export { EntregaServices }
