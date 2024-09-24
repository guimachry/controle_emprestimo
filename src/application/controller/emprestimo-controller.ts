import { EmprestimoRepository } from "../../domain/repository/emprestimo-repository";
import { CreateEmprestimoUseCase } from "../use-cases/create-emprestimo/create-emprestimo-usecase";
import { DeleteEmprestimoUseCase } from "../use-cases/delete-emprestimo/delete-emprestimo-usecase";
import { UpdateEmprestimoUseCase } from "../use-cases/update-emprestimo/update-emprestimo-usecase";


export class EmprestimoController{
    constructor(private readonly emprestimoRepository: EmprestimoRepository){}

    create(input: any){

        const createEmprestimoUseCase = new CreateEmprestimoUseCase (this.emprestimoRepository);
        createEmprestimoUseCase.execute(input);


    }

    update(input: any){
        const updateEmprestimoUseCase = new UpdateEmprestimoUseCase(this.emprestimoRepository);
        updateEmprestimoUseCase.execute(input);
    }

    delete(input: any){

        const deleteItemUseCase  = new DeleteEmprestimoUseCase(this.emprestimoRepository);
        deleteItemUseCase.execute(input);

    }

    

}