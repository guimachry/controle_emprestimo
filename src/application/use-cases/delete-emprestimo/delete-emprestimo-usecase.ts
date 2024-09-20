import { EmprestimoRepository } from "../../../domain/repository/emprestimo-repository";
import { ItemRepository } from "../../../domain/repository/item-repository";

export class DeleteEmprestimoUseCase{
constructor(readonly emprestimoRepository: EmprestimoRepository){}

execute(){}

}