import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column, JoinColumn, ManyToOne  } from 'typeorm'

import { v4 as uuid} from 'uuid'
import { Funcionario } from './Funcionario'

/* entregaEPI (id, funcionario_id, nome_epi, data_entrega, quantidade_entregue,
created_at e updated_at) */
@Entity('entregaepi')
class Entrega {

    @PrimaryColumn()
    id: string;

    @JoinColumn({ name: 'id_funcionario'})
    @ManyToOne(() => Funcionario)
    funcionario: Funcionario;

    @Column()
    id_funcionario: string;

    @Column()
    nome_epi: number;

    @Column()
    data_entrega: Date;

    @Column()
    quantidade_entregue: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    constructor() {
        if(!this.id) {
            this.id = uuid()
        }
    }
}

export { Entrega }