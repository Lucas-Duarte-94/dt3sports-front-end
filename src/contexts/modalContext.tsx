import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface ModalContextProps {
    isOpen: boolean;
    handleCloseModal: () => void;
    handleOpenModal: () => void;
    hasLogin: boolean;
    setHasLogin: Dispatch<SetStateAction<boolean>>;
}

interface ModalProviderProps {
    children: ReactNode;
}

const ModalContext = createContext({} as ModalContextProps);

export function ModalProvider({ children }: ModalProviderProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [hasLogin, setHasLogin] = useState(true);

    function handleOpenModal() {
        setIsOpen(true);
    }

    function handleCloseModal() {
        setIsOpen(false);
        setHasLogin(true);
    }

    return (
        <ModalContext.Provider value={{isOpen, handleCloseModal, handleOpenModal, hasLogin, setHasLogin}}>
            {children}
        </ModalContext.Provider>
    )
}

export function useModal() {
    return useContext(ModalContext);
}