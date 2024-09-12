import { Usuario } from "../entity/Usuario";

export interface UsuarioRepository{
    getall(): Usuario[];
    getById(id: string): Usuario;
    create(item: Usuario): void;
    update(item: Usuario): void;
}