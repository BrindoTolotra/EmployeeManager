export enum EOrder {
    ASC = "ASC", DESC = "DESC"
} 

export type TGetAll<T> = {
    currentPage: number;
    lastPage: number;
    data: T;
}





export type Employee = {
    id?: number,
    name?:string,
    ref?: number,
    birthDate?: string,
    sex?: string,
    function?: string,
    domain?: string,
    email?: string
}
