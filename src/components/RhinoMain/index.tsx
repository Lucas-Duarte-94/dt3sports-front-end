import styles from './styles.module.scss';
import { Slider } from '../slider';
import { useEffect, useState } from 'react';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { useCart } from '../../contexts/cartContext';
import { api } from '../../services/api';

// type KeyProps = 'red' | 'blue' | 'green' | 'orange' | 'black' | 'white';

interface InfosProps {
    color: string
    available: boolean;
    urls: string[];
}

const chairImageByColor = {
    red: ['Rhino-red2.jpg', 'Rhino-red1.jpg', 'Rhino-red5.jpg', 'Rhino-red9.jpg', 'Rhino-3-11.jpg', 'Rhino-12-11.jpg', 'Rhino-13-11.jpg', 'Rhino-15-11.jpg', 'Cotas-DT3sports-Rhino.jpg'],
    blue: ['Rhino-blue2.jpg', 'Rhino-blue1.jpg', 'Rhino-blue5.jpg', 'Rhino-blue9.jpg', 'Rhino-3-13.jpg', 'Rhino-12-13.jpg', 'Rhino-13-13.jpg', 'Rhino-15-13.jpg', 'Cotas-DT3sports-Rhino.jpg'],
    green: ['Rhino-green2.jpg', 'Rhino-green1.jpg', 'Rhino-green5.jpg', 'Rhino-green9.jpg', 'Rhino-3-10.jpg', 'Rhino-12-10.jpg', 'Rhino-13-10.jpg', 'Rhino-15-10.jpg', 'Cotas-DT3sports-Rhino.jpg'],
    orange: ['Rhino-2-15.jpg', 'Rhino-1-14.jpg', 'Rhino-5-14.jpg', 'Rhino-9-14.jpg', 'Rhino-3-7.jpg', 'Rhino-12-7.jpg', 'Rhino-13-7.jpg', 'Rhino-15-7.jpg', 'Cotas-DT3sports-Rhino.jpg'],
    black: ['Rhino-black2.jpg', 'Rhino-black1.jpg', 'Rhino-black5.jpg', 'Rhino-black9.jpg', 'Rhino-3-12.jpg', 'Rhino-12-12.jpg', 'Rhino-13-12.jpg', 'Rhino-15-12.jpg', 'Cotas-DT3sports-Rhino.jpg'],
    white: ['Rhino-white2.jpg', 'Rhino-white1.jpg', 'Rhino-white5.jpg', 'Rhino-white9.jpg', 'Rhino-3-9.jpg', 'Rhino-12-9.jpg', 'Rhino-13-9.jpg', 'Rhino-15-9.jpg', 'Cotas-DT3sports-Rhino.jpg']
}

const inStock = {
    red: true,
    blue: true,
    green: true,
    orange: true,
    black: false,
    white: false
}

const price = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(3359.90)
const discountedPrice = new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(3359.90 * 0.90)



export function RhinoMain() {
    const [infos, setInfos] = useState<InfosProps[]>([]);
    const [urls, setUrls] = useState<string[]>([]);
    const [color, setColor] = useState('red')
    const [stock, setStock] = useState(false)
    const [price, setPrice] = useState(0);
    const { addToCart } = useCart()

    useEffect(() => {
        async function chairInfos() {
            try {
                let data = {chairName: 'Rhino'}
                let res = await api.get('/product', { params: data });
                setInfos(res.data)
                setUrls(res.data[0].urls)
                setColor(res.data[0].color)
                setStock(res.data[0].available)

                let priceResponse = await api.get('/price');
                setPrice(priceResponse.data)
                
            }catch (err) {
                console.log(err)
            }
        }

        chairInfos()
    }, [])

    function handleChangeColor(val: string) {
        let chair = infos.find(chair => chair.color === val)

        if(chair) {
            setUrls(chair.urls)
            setColor(chair.color)
            setStock(chair.available)
        }

    }

    function handleItemToCart() {
        let imageUrl = infos.find(chair => chair.color === color)?.urls[0]

        if (imageUrl) {
            let item = {
                id: 1,
                name: 'Cadeira Gamer Elite Series Rhino',
                color: color,
                price: 3359.90,
                imageUrl: imageUrl
            }
            console.log(item)
            addToCart(item)
        }

    }

    return (
        <div className={styles.container}>

            <div className={styles.slider}>
                <div className={styles.starSection}>
                    <h1>DT3sports Rhino</h1>
                    <AiFillStar color='#fc0808' />
                    <AiFillStar color='#fc0808' />
                    <AiFillStar color='#fc0808' />
                    <AiFillStar color='#fc0808' />
                    <AiFillStar color='#fc0808' />
                    <span>(35 Avaliações)</span>
                </div>
                <Slider urls={urls} />
            </div>
            <div className={styles.productInfo}>

                <h3>Escolha a cor da sua Rhino:</h3>

                <hr />

                <div className={styles.colorSelection}>
                    { infos.map(chair => {
                        return (
                            <div className={styles.colorBorder} onClick={() => handleChangeColor(chair.color)}>
                                <img src={chair.urls[0]} />
                            </div>
                        )
                    }) }
                </div>

                <h3>Características:</h3>

                <hr />

                <div className={styles.features}>
                    <ul>Apoio de braço 4D ajustável.</ul>
                    <ul>Estrutura 100% de aço reforçado para suportar maior peso.</ul>
                    <ul>Estofamento de couro sintético PU “Premium Label Edition” com maior espessura.</ul>
                    <ul>Rodas especiais de 75mm super resistentes para piso ou carpete.</ul>
                    <ul>Duas almofadas inclusas para apoio lombar e pescoço. Ambas com logos bordados.</ul>
                    <ul>Mecanismo Frog com trava do sistema rocking.</ul>
                </div>
                <a href="https://dt3combr.sharepoint.com/:b:/s/marketing/ER1mtEdp6JtAlqYyDdjt4QEB8bQHNG5aLTwQWI60tf-JoA?e=aCWNpS">Fazer Download do Manual de Instruções</a>
                
                <h1 style={{marginTop:'auto'}}>
                    {new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(price * 0.9)}
                </h1>
                <p>
                    com 10% de desconto no boleto ou <strong>
                        {new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(price)}
                        </strong> em 10x sem juros
                </p>

                {stock
                    ? 
                        <button onClick={handleItemToCart}>ADICIONAR AO CARRINHO</button> 
                    :
                        <button>Avise-me quando chegar</button>
                }
            </div>
        </div>
        

    )
}