import { ESbType, ISnackbarProps, useSnackbarReturn } from './types';
import { useState } from 'react';

const sbInitialState: ISnackbarProps = {
    type: ESbType.MESSAGE,
    close: () => {},
    open: false,
    label: '',
};

const useSnackbar = (): useSnackbarReturn => {
    const [snackState, setState] = useState<ISnackbarProps>(sbInitialState);

    const close = () => setState((e) => ({ ...e, open: false }));

    const open = (label: string, type: ESbType) =>
        setState((e) => ({ ...e, label, type, open: true }));

    return { snackState: { ...snackState, close }, open };
};

export default useSnackbar;
