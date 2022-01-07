import qs from "qs";
import { FormEvent, useState } from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { MdClose } from 'react-icons/md';
import Modal from "react-modal";
import { api } from "../../services/api";
import styles from './styles.module.scss';

interface LoginModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function RegisterModal({ isOpen, onRequestClose }: LoginModalProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event: FormEvent) {
        event.preventDefault()

        let data = {
            email,
            password
        }

        console.log(data)

        // let res = await api.post('/login', qs.stringify(data))
    }

    return (
        <Modal 
            ariaHideApp={false}
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <div className={styles.modalContent}>
                <div className={styles.registerArea}>
                    <h2>Entre na sua conta</h2>

                    <form onSubmit={event => handleSubmit(event)}>
                        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                        <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />

                        <div>
                            <button type="submit">ENTRAR</button>
                            <a href="">Esqueceu seu login ou senha?</a>
                        </div>
                    </form>

                    <div className={styles.socialMediaLogin}>
                        <div><FaGoogle /></div>
                        <div><FaFacebookF /></div>
                        <div><FaTwitter /></div>
                        
                    </div>
                </div>
                <div className={styles.register}>
                    <div>
                        <h2>Primeira vez aqui?</h2>
                        <span>Com uma conta DT3sports você pode:</span>
                        <p>
                            Fazer compras e acompanhar seus pedido
                            Estar atualizado com os eventos da DT3sports
                            Acesso ao suporte, FAQ, manuais dos produtos, entre outros
                            Participar de promoções e sorteios da DT3sports
                        </p>

                        <div className={styles.buttonArea}>
                            <button>Registre-se</button>
                        </div>

                    </div>
                </div>
                <MdClose className={styles.closeButton} size={24} onClick={onRequestClose} />
            </div>
            

        </Modal>
    )
}