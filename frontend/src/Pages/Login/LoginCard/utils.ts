import { ChangeEvent, useState } from 'react';
import { handleChange } from '../../../Global/utils';
import { TLoginProperties, useLoginReturn } from './types';

/**
 * Return function for input change, input values,
 *
 * To handle login input values:
 * - username
 * - password
 */
function useLogin(): useLoginReturn {
    const [inputs, setInputs] = useState<TLoginProperties>({ password: '', username: '' });

    /**
     * inputHC : input handle change by the input name
     * @param event
     */
    const inputHC = (event: ChangeEvent<HTMLInputElement>) => {
        const name: string = event.target.name;
        const value: string = event.target.value;
        handleChange<TLoginProperties, string>(name, value, setInputs);
    };

    const usernameValidator = (username: string): boolean => {
        const conditionOne: boolean = /[^A-Za-z\d.-]/gi.test(username);
        const conditionTwo: boolean = !(username.length > 3);
        return !(conditionOne || conditionTwo);
    };

    const passwordValidator = (password: string): boolean => {
        return password.length > 7;
    };

    const validator = (e: React.FocusEvent<HTMLInputElement>) => {
        if (e.target.name === 'username') {
            return usernameValidator(inputs.username);
        }
        return passwordValidator(inputs.password);
    };

    return { inputHC, inputs, validator };
}

export default useLogin;
