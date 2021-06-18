import { getCustomRepository } from 'typeorm'
import { FuncionarioRepository } from '../repositories/FuncionarioRepository'

interface IFuncionarioCreate {
    id: string;
    nome: string;
    cpf: string;
    funcao: string;
}


class FuncionarioServices {

    /* a) a) Crie uma rota (/funcionarios) para cadastrar os funcionarios. Deverá ser
enviado um json contendo o nome, cpf e funcao. */
    async create({ id, nome, cpf, funcao }: IFuncionarioCreate) {
        const funcionarioRepository = getCustomRepository(FuncionarioRepository)

        const idAlreadyExists = await funcionarioRepository.findOne({
            id
        })

        if(idAlreadyExists) {
            throw new Error('Id alredy exists!')
        }

        const funcionario = funcionarioRepository.create({
            id,
            nome, 
            cpf,
            funcao
        })

        await funcionarioRepository.save(funcionario)

        return funcionario
    }

    /*b) Crie uma rota (/responsavel) para listar todos os responsáveis pelos gastos. 
    Deverá ser retornado um json contendo o id, nome do responsável e o telefone. */
    async index() {
        const funcionarioRepository = getCustomRepository(FuncionarioRepository)

        const funcionario = await funcionarioRepository.find()

        return funcionario
    }
}

export { FuncionarioServices }