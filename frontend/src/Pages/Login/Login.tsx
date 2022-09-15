import { FC } from 'react';
import LoginCard from './LoginCard/LoginCard';
import './style.css';

export const Login: FC = () => {
    return (
        <div className='z--1 fullscreen bg-light'>
            <LoginCard className='simple-card' />
        </div>
    );
};
