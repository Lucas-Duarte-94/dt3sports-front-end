import Link from 'next/link';
import styles from './styles.module.scss';

import {Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import { FaAngleDown } from 'react-icons/fa';

interface LinkMenuProps {
    text: string;
    href: string;
}

export function NavBar() {
    return (
        <nav className={styles.menus}>
            <ProdutosDropDownMenu />
            <LinkMenu href='https://www.dt3sports.com.br/em-estoque/' text='Em Estoque'/>
            <LinkMenu href='https://dt3.zendesk.com/hc/pt-br' text='Suporte'/>
            <LinkMenu href='https://www.dt3sports.com.br/sobre/' text='Empresa'/>
        </nav>
    )
}

function LinkMenu({ text, href }: LinkMenuProps) {
    return (
        <Link href={href}>
            <div className={styles.navItem}>{text}</div>
        </Link>
    )
}

function ProdutosDropDownMenu() {
    return (
      <>
        <Menu menuButton={<MenuButton className={styles.menuButton}>Produtos <FaAngleDown className={styles.menu_arrow} /></MenuButton>} className={styles.spacing}>
            <SubMenu label="Elite Series" className={styles.menuHead} >
                <MenuItem className={styles.menuItem} href='https://www.dt3sports.com.br/loja/elite-series/cadeira-gamer-dt3sports-royce-tecido/'>Royce</MenuItem>
                <MenuItem className={styles.menuItem} href='https://www.dt3sports.com.br/loja/elite-series/cadeira-gamer-dt3sports-rhino/'>Rhino</MenuItem>
                <MenuItem className={styles.menuItem} href='https://www.dt3sports.com.br/loja/elite-series/cadeira-gamer-dt3sports-prime-evo/'>Prime Evo</MenuItem>
                <MenuItem className={styles.menuItem} href='https://www.dt3sports.com.br/loja/elite-series/cadeira-gamer-dt3sports-orion/'>Orion</MenuItem>
                <MenuItem className={styles.menuItem} href='https://www.dt3sports.com.br/loja/elite-series/cadeira-gamer-dt3sports-onix-diamond/'>Ônix Diamond</MenuItem>
                <MenuItem className={styles.menuItem} href='https://www.dt3sports.com.br/loja/elite-series/cadeira-gamer-dt3sports-orion-flamengo/'>Orion Flamengo</MenuItem>
                <MenuItem className={styles.menuItem} href='https://www.dt3sports.com.br/loja/office-series/cadeira-de-escritorio-dt3-spider/'>Spider</MenuItem>
            
            </SubMenu>
  
            <SubMenu label="Racing Series" className={styles.menuHead}>
                <MenuItem className={styles.menuItem}>Elise</MenuItem>
                <MenuItem className={styles.menuItem}>Elise Fabric</MenuItem>
                <MenuItem className={styles.menuItem}>Elise Flamengo</MenuItem>
                <MenuItem className={styles.menuItem}>Jaguar</MenuItem>
                <MenuItem className={styles.menuItem}>Mizano Fabric</MenuItem>
                <MenuItem className={styles.menuItem}>Modena</MenuItem>
                <MenuItem className={styles.menuItem}>Ravena</MenuItem>
                <MenuItem className={styles.menuItem}>Romeo</MenuItem>
                <MenuItem className={styles.menuItem}>Estelar</MenuItem>
                <MenuItem className={styles.menuItem}>Pixel</MenuItem>
                <MenuItem className={styles.menuItem}>Gamma</MenuItem>
            
            </SubMenu>
  
            <SubMenu label="Gaming Series" className={styles.menuHead}>
                <MenuItem className={styles.menuItem}>GT WR</MenuItem>
                <MenuItem className={styles.menuItem}>GTS WR</MenuItem>
                <MenuItem className={styles.menuItem}>GTI WR</MenuItem>
                <MenuItem className={styles.menuItem}>GT</MenuItem>
                <MenuItem className={styles.menuItem}>GTI</MenuItem>
                <MenuItem className={styles.menuItem}>GTK</MenuItem>
                <MenuItem className={styles.menuItem}>GTS</MenuItem>
                <MenuItem className={styles.menuItem}>GTX</MenuItem>
                <MenuItem className={styles.menuItem}>GTZ</MenuItem>
                <MenuItem className={styles.menuItem}>GTO Office</MenuItem>
                <MenuItem className={styles.menuItem}>GTS Black</MenuItem>
                <MenuItem className={styles.menuItem}>GTX Special Edition</MenuItem>
            
            </SubMenu>
  
            <SubMenu label="Desks" className={styles.menuHead}>
                <MenuItem className={styles.menuItem}>Mesa F40 Pro</MenuItem>
                <MenuItem className={styles.menuItem}>Mesa F20</MenuItem>
                <MenuItem className={styles.menuItem}>Mesa F40</MenuItem>
                <MenuItem className={styles.menuItem}>Mesa Infinity</MenuItem>
            </SubMenu>
  
            <SubMenu label="Gabinetes" className={styles.menuHead}>
                <MenuItem className={styles.menuItem}>Hyperspace Six Siege Yellow</MenuItem>
                <MenuItem className={styles.menuItem}>Hyperspace Six Siege White</MenuItem>
                <MenuItem className={styles.menuItem}>Hyperspace</MenuItem>
                <MenuItem className={styles.menuItem}>Apollo</MenuItem>
                <MenuItem className={styles.menuItem}>Orbiter</MenuItem>
                <MenuItem className={styles.menuItem}>Andromeda</MenuItem>
                <MenuItem className={styles.menuItem}>Kronos</MenuItem>
                <MenuItem className={styles.menuItem}>Lynx</MenuItem>
                <MenuItem className={styles.menuItem}>Atomo</MenuItem>
                <MenuItem className={styles.menuItem}>Edge Hyve</MenuItem>
            
            </SubMenu>
  
            <SubMenu label="Hardwares" className={styles.menuHead}>
                <MenuItem className={styles.menuItem}>Aircooler Wolf 120</MenuItem>
                <MenuItem className={styles.menuItem}>Fan ZX120</MenuItem>
                <MenuItem className={styles.menuItem}>2 Kit Fan ZX120</MenuItem>
                <MenuItem className={styles.menuItem}>3 Kit Fan ZX120</MenuItem>
                <MenuItem className={styles.menuItem}>Suporte VGA Hyperstone</MenuItem>
                <MenuItem className={styles.menuItem}>Fonte BX500</MenuItem>
                <MenuItem className={styles.menuItem}>Fonte BX700</MenuItem>
            
            </SubMenu>
  
            <SubMenu label="Acessórios" className={styles.menuHead}>
                <SubMenu label="Suporte de Monitor" className={styles.menuHead}>
                    <MenuItem className={styles.menuItem}>Suporte de Monitor Atlas Duo</MenuItem>
                    <MenuItem className={styles.menuItem}>Suporte de Monitor Atlas</MenuItem>
                    <MenuItem className={styles.menuItem}>Suporte de Monitor Hércules</MenuItem>
                </SubMenu>
                <SubMenu label="Apoio de Pé" className={styles.menuHead}>
                    <MenuItem className={styles.menuItem}>Apoio de Pé EFR02C</MenuItem>
                    <MenuItem className={styles.menuItem}>Apoio de Pé EFR01</MenuItem>
                </SubMenu>
                <SubMenu label="Almofadas" className={styles.menuHead}>
                    <MenuItem className={styles.menuItem}>Almofada Elite XL Suede</MenuItem>
                    <MenuItem className={styles.menuItem}>Almofadas Elite</MenuItem>
                    <MenuItem className={styles.menuItem}>Almofadas Gaming</MenuItem>
                </SubMenu>
                <SubMenu label="Rodinhas" className={styles.menuHead}>
                    <MenuItem className={styles.menuItem}>Rodas 65mm</MenuItem>
                    <MenuItem className={styles.menuItem}>Rodas Rollerblade</MenuItem>
                    <MenuItem className={styles.menuItem}>Roda 75mm c/ travas</MenuItem>
                    <MenuItem className={styles.menuItem}>Kit Rodas 75mm c/ travas</MenuItem>
                </SubMenu>
                <MenuItem className={styles.menuItem}>Mousepad Nox XL</MenuItem>
                <MenuItem className={styles.menuItem}>Cilindrio 80mm</MenuItem>
            
            </SubMenu>
  
            <SubMenu label="Personalizados" className={styles.menuHead}>
                <MenuItem>Rainbow Six Elise Black</MenuItem>
                <MenuItem>Rainbow Six Elise Grey</MenuItem>
                <MenuItem>Hyperspace Six Siege Yellow</MenuItem>
                <MenuItem>Hyperspace Six Siege White</MenuItem>
                <MenuItem>Orion Flamengo</MenuItem>
                <MenuItem>Elise Flamengo</MenuItem>
                <MenuItem>NVIDIA</MenuItem>
                <MenuItem>GGRF</MenuItem>
                <MenuItem>Terabyte Arena</MenuItem>
                <MenuItem>TattoWeek</MenuItem>
                <MenuItem>Pichau</MenuItem>
                <MenuItem>CoolDown</MenuItem>
            
            </SubMenu>
        </Menu>
      </>
    );
  }
