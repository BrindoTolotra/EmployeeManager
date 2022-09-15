import {FC, FormEvent, useContext, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { authProvider } from '../../../Provider/auth/authProvider';
import { authResult } from '../../../Provider/auth/type';
import { PrincipalContext } from '../../../Provider/context/contextProvider';
import { ESbType } from '../../../Components/Common/Snackbar/types';
import { LoginInput } from './LoginInput';
import { TLoginCardProps } from './types';
import useLogin from './utils';

const LoginCard: FC<TLoginCardProps> = (props) => {
    const tools = useLogin();
    const { className } = props;
    const context = useContext(PrincipalContext);
    const navigate = useNavigate();

    useEffect(()=> {
        if(localStorage.getItem("password")){
            navigate("/dashboard")
        }
    })

    // error verification
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (tools.inputs.username.length === 0 || tools.inputs.password.length === 0) {
            context.snackbar('Veuillez vérifier vos identifiants', ESbType.ERROR);
        } else {
            authProvider(tools.inputs.username, tools.inputs.password)
                .then((res) => {
                    if (res === authResult.FAILED) {
                        console.log(res)
                        context.snackbar('Veuillez vérifier vos identifiants', ESbType.ERROR);
                    } else {
                        navigate('/');
                    }
                })
                .catch(() => {
                    context.snackbar('Veuillez vérifier vos identifiants', ESbType.ERROR);
                });
        }
    };

    const landing = () => {
        navigate('/?to=landing');
    };

    return (
        <div className={'abs-center p-3 flex-center text-light ' + className}>
            <form onSubmit={handleSubmit} className='input-form m-2 text-light'>
                <h1 className='display-6 text-black mb-3'>Connexion</h1>
                <LoginInput tools={tools} name='username' type='username' />
                <LoginInput tools={tools} name='password' type='password' />
                <button type='submit' className='w-100 mb-4 btn btn-warning mt-4 text-light'>
                    Se connecter
                </button>
            </form>
        </div>
    );
};

export default LoginCard;
