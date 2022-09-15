import { DS, urlErrorParams } from "./types";

export const handleChange = <T, D>(name: string, value: D, setState: DS<T>) => {
    setState((e)=> ({...e, [name]: value}))
};

export const textFormat = (e: string): string => {
    return e[0].toUpperCase().concat(e.slice(1, e.length));
}

export const getErrorParams = (): urlErrorParams => {
    const {search} = document.location;
    const params = new URLSearchParams(search);
    return {message: params.get("message") || "Ressource non trouvé", code: params.get("code") || "404"}
}