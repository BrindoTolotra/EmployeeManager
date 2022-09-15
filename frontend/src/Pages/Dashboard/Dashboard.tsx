import { FC, useContext, useEffect, useState } from 'react';
import './style.css';
import { Loading } from '../../Components/Common/Loading/Loading';
import { PrincipalContext } from '../../Provider/context/contextProvider';
import { TMenu } from '../../Global/types';
import List from './ListEmploy/List';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export const Dashboard: FC = () => {
    const context = useContext(PrincipalContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem('password') === null) {
            navigate('/?to=login');
        }
    });
    return (
        <div className='fullscreen'>
            <div className='d-flex dashboard'>
                <div className='dashboard-content p-2 flex-center'>
                    {context.menu?.menuInfo.selected === TMenu.LIST ? (
                        <List />
                    ) : (
                        <Loading />
                    )}
                </div>
            </div>
        </div>
    );
};
