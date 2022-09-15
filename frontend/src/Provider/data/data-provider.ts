import httpClient from '../utils/http-client';
import { EOrder, TGetAll } from './type';

class Dataprovider<T> {
    private endpoint: string;

    constructor(endpoint: string) {
        this.endpoint = endpoint;
    }

    private getAuth = () => {
        return {
            username: localStorage.getItem('username') || '',
            password: localStorage.getItem('password') || '',
        };
    };

    getAll = async (page: number, size: number, order: EOrder): Promise<TGetAll<T[]>> => {
        const params = {
            page,
            size,
            order,
        };
        return await httpClient.get(this.endpoint, { params, auth: this.getAuth() });
    };

    getOne = async (id: number): Promise<T> => {
        return await httpClient.get(`${this.endpoint}/${id}`, {auth: this.getAuth() });
    };

    addOne = async (data: T): Promise<T> => {
        return await httpClient.post(this.endpoint, data, {auth: {username: "admin", password: "12345678"} });
    };

    modifyOne = async (id: number, data: T) => {
        return await httpClient.put(`${this.endpoint}/${id}`, data, {auth: this.getAuth() });
    };
}

export default Dataprovider;
