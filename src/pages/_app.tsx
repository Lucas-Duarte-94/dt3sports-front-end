import '../../styles/globals.scss'
import type { AppProps } from 'next/app'

// import styles bundle
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../../styles/swipperStyles.scss'
import '@szhsin/react-menu/dist/index.css';

import { ModalProvider } from '../contexts/modalContext';
import { CartProvider } from '../contexts/cartContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ModalProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </ModalProvider>
  ) 
}

export default MyApp
