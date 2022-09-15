import { ChangeEvent, CSSProperties } from 'react';

export type TLoginCardProps = {
    className?: string;
};

export type TLoginProperties = {
    username: string;
    password: string;
};

export type TLoginPropertiesSetter = (e: TLoginProperties) => void;

export type useLoginReturn = {
    inputHC: (e: ChangeEvent<HTMLInputElement>) => void;
    inputs: TLoginProperties;
    validator: (e: React.FocusEvent<HTMLInputElement>) => boolean;
};

export type TLoginInput = {
    tools: useLoginReturn;
    type: 'username' | 'password';
    name: 'username' | 'password';
};
