import { ItemRepository } from "../../../domain/repository/item-repository";
import { GetEmprestimoInput } from "../get-emprestimo/get-emprestimo-input";
import { GetEmprestimoOutput } from "../get-emprestimo/get-emprestimo-output";

export class CreateEmprestimoUseCAse{
constructor(readonly itemRepository: ItemRepository){}

execute(input: GetEmprestimoInput): GetEmprestimoOutput{
    return{
        name:''
    }

}

}