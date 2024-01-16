export interface ListMenu {
    label: string,
    items: ListItems[]
}
export interface ListItems {
    label: string,
    icon: string,
}
export interface Docente {
    codDocente: Number,
    codEspecialidad: string,
    cedula: string,
    nombre: string,
    fechaIngreso: string,
    titulo: string,
    version: Number,
    especialidad: Especialidad,
}
export interface Especialidad {
    codEspecialidad: string,
    nombre: string,
    version: 0
}