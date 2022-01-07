import styles from './styles.module.scss'
import { FaUser, FaAngleDown, FaSearch, FaShoppingCart } from 'react-icons/fa'
import { GoChevronRight } from 'react-icons/go'
import { useEffect, useState } from 'react'
import Link from 'next/link';
import { useModal } from '../../contexts/modalContext';
import { CartModal } from '../cartModal';
import { useCart } from '../../contexts/cartContext';
import { NavBar } from '../NavBar';

export function Header() {
    const [isShown, setIsShown] = useState(false);
    const { handleOpenModal } = useModal()
    const { cart } = useCart()
    const [totalProducts, setTotalProducts] = useState(0);

    const [cartIsOpen, setCartIsOpen] = useState(false);

    useEffect(() => {
        let tot = cart.reduce((count, elem) => {
            count += elem.amount;
            
            return count
        }, 0)

        setTotalProducts(tot);
    }, [cart])

    function handleCartModal() {
        setCartIsOpen(false)
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <img src="/logodt3.png" alt="logo" />
                    </div>

                    <NavBar />
                    
                    <div className={styles.icon_area}>
                        <div className={styles.search}>
                            <input type="text" placeholder='Buscar' />
                            <FaSearch className={styles.icon} size="30px" />
                        </div>
                        <div onClick={handleOpenModal}>
                            <FaUser className={styles.icon} size="30px" />
                            <span>Login</span>
                        </div>
                        <div onClick={() => setCartIsOpen(true)}>
                            <FaShoppingCart className={styles.icon} size="30px" />
                            { totalProducts > 0 && <span className={styles.productsCount}>{totalProducts}</span> }
                        </div>
                    </div>
                </div>
            </div>
            <CartModal isOpen={cartIsOpen} onRequestClose={handleCartModal} />
            
        </>
    )
}