import httpClient from '../utils/http-client';
import { authResult } from './type';

export const authProvider = (username: string, password: string): Promise<authResult> => {
    console.log(username)
    return httpClient
        .get('auth', { auth: { username, password } })
        .then((result) => {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            return authResult.SUCCESS;
        })
        .catch(() => {
            return authResult.FAILED;
        });
};
