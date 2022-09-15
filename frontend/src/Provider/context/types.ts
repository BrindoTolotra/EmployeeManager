import { ReactNode } from "react";
import { ESbType } from "../../Components/Common/Snackbar/types";
import { TMenu, useMenuReturn } from "../../Global/types";

export type TPrincipalContext = {
    snackbar: (label: string, type: ESbType) => void,
    menu?: useMenuReturn<TMenu>;
    modal: (content: ReactNode, cN?: string) => void,
    closeModal: ()=> void;
}