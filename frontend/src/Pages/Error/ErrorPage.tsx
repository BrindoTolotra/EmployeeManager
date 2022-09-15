import { FC } from "react";
import { getErrorParams } from "../../Global/utils";
import "./style.css"

export const ErrorPage: FC = () => {
    const {code, message} = getErrorParams();
    return (
        <div className='flex-center fullscreen'>
            <div className='row'>
                <div className='border-right p-3 col-6 d-flex align-items-end justify-content-end'>
                    <h1 className='display-1'>{code}</h1>
                </div>
                <div className='col-6 p-3'>
                    <h1 className='display-6'>{message}</h1>
                </div>
            </div>
        </div>
    );
}