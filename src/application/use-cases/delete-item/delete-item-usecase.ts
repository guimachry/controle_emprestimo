import { ItemRepository } from "../../../domain/repository/item-repository";

export class DeleteItemUseCase{
constructor(readonly itemRepository: ItemRepository){}

execute(){}

}