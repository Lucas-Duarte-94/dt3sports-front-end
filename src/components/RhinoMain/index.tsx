import styles from './styles.module.scss';
import { Slider } from '../slider';
import { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai'
import { useCart } from '../../contexts/cartContext';
import { api } from '../../services/api';

interface InfosProps {
    color: string
    available: boolean;
    urls: string[];
}

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
                            <div className={styles.colorBorder} onClick={() => handleChangeColor(chair.color)} key={chair.urls[0]}>
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