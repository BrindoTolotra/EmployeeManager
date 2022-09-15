export enum ESbType {
    SUCCESS = 'Success',
    ERROR = 'Error',
    MESSAGE = 'Message',
}
export interface ISnackbarProps {
    label: string;
    type: ESbType;
    open: boolean;
    close: () => void;
}

export type useSnackbarReturn = {
    open: TSnackbarOpen;
    snackState: ISnackbarProps;
};

export type TSnackbarOpen = (label: string, type: ESbType) => void;
