import { FC } from 'react';
import './style.css';

export const Loading: FC = () => {
    return (
        <div className='loading-container'>
            <div className='circle c1'></div>
            <div className='circle c2'></div>
            <div className='circle c3'></div>
        </div>
    );
};
