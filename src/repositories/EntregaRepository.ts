import { EntityRepository, Repository } from 'typeorm'
import { Entrega } from '../entities/Entrega'

@EntityRepository(Entrega)
class EntregaRepository extends Repository<Entrega> {

}

export { EntregaRepository }