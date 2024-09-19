import { TipoItem } from "../entity/TipoItem";

export interface TipoItemItemRepository{
    getall(): TipoItem[];
    getById(id: string): TipoItem;
    create(tipoitem: TipoItem): void;
    update(tipoitem: TipoItem): void;
}

//beleza sobe