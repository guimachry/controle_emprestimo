import { ItemRepository } from "../../../domain/repository/item-repository";
import { DeleteItemInput } from "./delete-item-input";
import { DeleteItemOutput } from "./delete-item-output";

export class DeleteItemUseCase{

constructor(readonly itemRepository: ItemRepository){}
execute(input: DeleteItemInput): DeleteItemOutput{
    return{
        name:''
    }

}

}