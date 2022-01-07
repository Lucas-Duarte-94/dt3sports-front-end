import { FormEvent, useEffect, useState } from "react";
import Modal from "react-modal";
import { useCart } from "../../contexts/cartContext";
import styles from './styles.module.scss';
import { FaTrashAlt } from 'react-icons/fa';
import { BsCheck2Circle } from 'react-icons/bs';

interface CartModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function CartModal({ isOpen, onRequestClose }: CartModalProps) {
    const [subTotal, setSubTotal] = useState(0);
    const [estimatedTime, setEstimatedTime] = useState(0);
    const [cupom, setCupom] = useState('');
    const [frete, setFrete] = useState(100);
    const [cupomUsed, setCupomUsed] = useState(false);
    const { cart, addAmount, subAmount, delProduct, removeAllProducts } = useCart();

    function handleCupom(event: FormEvent) {
        event.preventDefault()

        if(cupom === 'teste' && !cupomUsed) {
            setSubTotal(subTotal * 0.9);
            setCupomUsed(true);

        }else if (cupomUsed) {
            console.log('Cupom ja utilizado');
        }
    }

    function handleCart(type: string, id: number, color: string) {
        switch(type) {
            case 'add':
                addAmount({id, color})
                break;
            case 'sub':
                subAmount({id, color})
                break;
            case 'del':
                delProduct({id, color})
                break;
        }
    }

    function removeAll() {
        setCupomUsed(false)
        setCupom('')
        removeAllProducts();
    }

    useEffect(() => {
        let subtotal = cart.reduce((total, element) => {
            total += element.amount * element.price

            return total
        }, 0)

        setSubTotal(subtotal)
    }, [cart])

    return (
        <Modal 
            ariaHideApp={false}
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-cart-content"
        >
            <div className={styles.content}>
                <div className={styles.cartProducts}>
                    <h2>Produtos:</h2>

                    <table>
                        {cart.map(item => {
                            return (
                                <tr key={item.id+item.color} className={styles.itens}>
                                    <td>
                                        <button onClick={() => handleCart('sub', item.id, item.color)} disabled={item.amount <= 1 ? true : false}>-</button>
                                        <span className={styles.amount}>{item.amount}</span>
                                        <button onClick={() => handleCart('add', item.id, item.color)}>+</button>
                                    </td>
                                    <td>
                                        <p>{item.name}</p>
                                        <span className={styles.price}>{new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(item.price * item.amount)}</span>
                                    </td>
                                    <td><img src={item.imageUrl}/></td>
                                    <td><FaTrashAlt onClick={() => handleCart('del', item.id, item.color)} size={18} /></td>
                                </tr>
                            )
                        })}
                    </table>
                </div>

                <div className={styles.shipping}>
                    <div className={styles.subTotal}>
                        <h2>SubTotal:</h2>
                        <span>
                            {new Intl.NumberFormat('pt-br', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(subTotal)}
                        </span>

                        <p>previsão de entrega: { estimatedTime === 0 ? '-' : estimatedTime } dias úteis.</p>
                        <p className={styles.disclaimer}>
                            Descontos aplicados apenas no checkout.<br />
                            O prazo de entrega deve ser considerado após a emissão da NF-e
                        </p>
                    </div>

                    <p>Frete: {frete === 0 ? '---' : new Intl.NumberFormat('pt-br', {style: 'currency', currency: 'BRL'}).format(frete)}</p>
                    <span>Insira seu CEP para calcular o frete</span>
                    <div>
                        <input type="number" placeholder="CEP" />
                        <a href="http://www.buscacep.correios.com.br/sistemas/buscacep/" target="_blank">Não sei o cep</a>
                    </div>
                    <form onSubmit={handleCupom}>
                        <input type="text" value={cupom} onChange={e => setCupom(e.target.value)}  placeholder="Cupom de desconto"/>
                        <button type="submit" disabled={cupom.length === 0 ? true : false} className={cupom.length === 0 ? styles.disabledButton : styles.activeButton}>Aplicar Cupom</button>
                        { cupomUsed && <BsCheck2Circle size={30}/>}
                    </form>

                </div>
                <div className={styles.total}>
                    <h2>Total:</h2>
                    <div>
                        <span>
                            {new Intl.NumberFormat('pt-br', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(subTotal + frete)}
                            <small>10x <strong>sem juros no cartão</strong></small>
                        </span>
                        <p>ou</p>
                        <span>
                            {new Intl.NumberFormat('pt-br', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(subTotal * 0.9 + frete)}
                            <small>à vista no boleto</small>
                        </span>
                    </div>
                    <div>
                        <button className={styles.buy} onClick={() => alert('Compra Realizada')}>Finalizar Compra</button>
                        <button className={styles.cancel} onClick={removeAll}>Limpar Carrinho</button>
                    </div>
                </div>


                
            </div>
        </Modal>
    )
}