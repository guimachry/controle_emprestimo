import { ItemRepository } from "../../domain/repository/item-repository";
import { PessoaRepository } from "../../domain/repository/pessoa-repository";
import { CreatePersonUseCase } from "../use-cases/create-person/create-person-usecase";
//import { DeletePersonUseCase, DeletePersonUseCAse } from "../use-cases/delete-person/delete-person-usecase";
import { UpdatePersonUseCase } from "../use-cases/update-person/update-person-usecase";

export class PersonController{

constructor(private readonly personRepository: PessoaRepository){}

create(input: any){

    const createPersonUseCase = new CreatePersonUseCase(this.personRepository);
    createPersonUseCase.execute(input);
    

}

update(input: any){

    const updatePersonUseCase = new UpdatePersonUseCase(this.personRepository);
    updatePersonUseCase.execute(input);
}

/*delete(input: any){}

const deletePersonUseCase  = new DeletePersonUseCase(this.personRepository);
        deleteItemUseCase.execute(input);
*/
}