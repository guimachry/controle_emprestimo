import { ItemRepository } from "../../../domain/repository/item-repository";
import { PessoaRepository } from "../../../domain/repository/pessoa-repository";

export class DeletePersonUseCase{
constructor(readonly personRepository: PessoaRepository){}

execute(){}

}