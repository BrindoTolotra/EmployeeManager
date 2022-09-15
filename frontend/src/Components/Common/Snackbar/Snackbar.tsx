import React, { FC } from 'react';
import { ISnackbarProps } from './types';
import './styles.css';

export const Snackbar: FC<{ snackState: ISnackbarProps; className?: string }> = (props) => {
    const {
        snackState: { label, type, close, open },
        className,
    } = props;

    return (
        <div
            style={{ display: !open ? 'none' : 'inherit' }}
            className={
                'snackbar text-light g-ai-center sb__' +
                type +
                ' ' +
                className +
                (open && ' sb-open')
            }
        >
            <div className='pr d-flex justify-content-between'>
                <div className='col-10 sb-text p-1'>
                    <p>{label}</p>
                </div>
                <div
                    onClick={close}
                    className='d-flex justify-content-center align-items-center sb--icon-container col-2'
                >
                    <p className='sb--icon fs-2 bi bi-x'></p>
                </div>
            </div>
        </div>
    );
};
