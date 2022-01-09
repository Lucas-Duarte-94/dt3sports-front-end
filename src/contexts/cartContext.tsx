import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from "react";

interface CartProviderProps {
    children: ReactNode;
}

interface CartContextProps {
    cart: CartProps[];
    addToCart: (item: ItemProps) => void;
    addAmount: (cartItem: AmountProps) => void;
    subAmount: (cartItem: AmountProps) => void;
    delProduct: (cartItem: AmountProps) => void;
    removeAllProducts: () => void;
}

interface CartProps {
    id: number;
    name: string;
    color: string;
    price: number;
    imageUrl: string;
    amount: number;
}

interface ItemProps {
    id: number;
    name: string;
    color: string;
    price: number;
    imageUrl: string;
}

interface AmountProps {
    id: number;
    color: string;
}

const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: CartProviderProps) {
    const [cart, setCart] = useState<CartProps[]>([]);
    const [teste, setTeste] = useState(false)

    function handleChanges() {
        if(cart.length === 0) {
            let storagedCart = localStorage.getItem('dt3sports-cart')

            if(storagedCart && !teste) {
                setCart(JSON.parse(storagedCart));
            }
            setTeste(true)

        }else {
            localStorage.setItem('dt3sports-cart', JSON.stringify(cart))
        }
    }

    useEffect(() => {
        handleChanges()
    }, [cart])

    function addToCart(item: ItemProps) { 
        let cartClone = [...cart];
        let obj = cartClone.find(product => product.id === item.id && product.color === item.color)
        if(obj) {
            obj.amount += 1
            setCart([...cartClone])
            localStorage.setItem('dt3sports-cart', JSON.stringify(cartClone))
        }
        if (!obj) {
            let newItem = {...item, amount: 1}
            setCart([...cart, newItem])
            localStorage.setItem('dt3sports-cart', JSON.stringify([...cart, newItem]))
        }
    }

    function addAmount(cartItem: AmountProps) {
        let cartClone = [...cart];
        let obj = cartClone.find(product => product.id === cartItem.id && product.color === cartItem.color)
        let index = cartClone.findIndex(el => el === obj)
        if(obj) {
            obj.amount += 1
            cartClone[index] = obj;

            setCart([...cartClone])
        }
    }

    function subAmount(cartItem: AmountProps) {
        let cartClone = [...cart];
        let obj = cartClone.find(product => product.id === cartItem.id && product.color === cartItem.color)
        let index = cartClone.findIndex(el => el === obj)
        if(obj) {
            obj.amount -= 1
            cartClone[index] = obj;

            setCart([...cartClone])
        }
    }

    function delProduct(cartItem: AmountProps) {
        let cartClone = [...cart];
        let obj = cartClone.find(product => product.id === cartItem.id && product.color === cartItem.color)
        let index = cartClone.findIndex(el => el === obj)
        cartClone.splice(index, 1)

        setCart([...cartClone]);
        localStorage.setItem('dt3sports-cart', JSON.stringify([...cartClone]))
    }

    function removeAllProducts() {
        setCart([]);
        localStorage.removeItem('dt3sports-cart')
        alert('Produtos removidos do carrinho de compras!')
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, addAmount, subAmount, delProduct, removeAllProducts }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext);
}