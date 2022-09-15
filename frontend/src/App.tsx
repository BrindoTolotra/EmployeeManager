import { FC, ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Snackbar } from './Components/Common/Snackbar/Snackbar';
import useSnackbar from './Components/Common/Snackbar/useSnackbar';
import { TMenu } from './Global/types';
import { useMenu } from './Global/useMenu';
import { Dashboard } from './Pages/Dashboard/Dashboard';
import { ErrorPage } from './Pages/Error/ErrorPage';
import { Login } from './Pages/Login/Login';
import { PrincipalContext } from './Provider/context/contextProvider';
import { TPrincipalContext } from './Provider/context/types';

export const App: FC = () => {
    const { open, snackState } = useSnackbar();
    const menu = useMenu<TMenu>(TMenu.LIST);
    const context: TPrincipalContext = {
        snackbar: open,
        menu,
        modal: function (content: ReactNode, cN?: string | undefined): void {
            throw new Error('Function not implemented.');
        },
        closeModal: function (): void {
            throw new Error('Function not implemented.');
        }
    };

    return (
        <div className='background fullscreen'>
            {context.menu !== undefined && (
                <PrincipalContext.Provider value={context}>
                    <Routes>
                        <Route path='/' element={<Login />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='*' element={<ErrorPage />} />
                    </Routes>
                </PrincipalContext.Provider>
            )}
            <Snackbar snackState={snackState} className='' />
        </div>
    );
};
