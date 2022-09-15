import { CSSProperties, FC, useState } from 'react';
import { textFormat } from '../../../Global/utils';
import { TLoginInput } from './types';
import { FocusEvent } from 'react';

export const LoginInput: FC<TLoginInput> = ({ tools, name, type }) => {
    const [style, setStyle] = useState<CSSProperties>({ border: '1px solid black' });

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
        if (!tools.validator(e)) {
            setStyle({ border: '1px solid red' });
        } else {
            setStyle({ border: '1px solid green' });
        }
    };

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        setStyle({ border: 'none' });
    };

    return (
        <input
            onFocus={handleFocus}
            style={style}
            onBlur={handleBlur}
            onChange={tools.inputHC}
            type={type}
            placeholder={textFormat(name)}
            name={name}
            value={tools.inputs[name]}
            className='mt-3 form-control text-black'
        />
    );
};
