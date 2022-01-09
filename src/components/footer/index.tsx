import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { AiFillFacebook, AiOutlineInstagram, AiOutlineMail } from 'react-icons/ai'
import { FaPhoneAlt, FaTwitter } from 'react-icons/fa'
import { ImYoutube2 } from 'react-icons/im'
import styles from './styles.module.scss'

export function Footer() {
    const [checkbox, setCheckbox] = useState(false);
    const router = useRouter()

    function handleLanguage(lang: string) {
        if(lang === 'en-us') {
            // router.push('/en')
            alert('Redireciona para página em inglês. (código comentado)')
        }else if(router.asPath === '/') {
            return;
        }else {
            router.push('/')
        }
            
        
    }

    return (
        <div className={styles.container}>
            <div className={styles.social_medias}>
                <div>
                    <h2>Siga-nos nas redes sociais</h2>
                    <p>Publicamos constantemente nas nossas redes sociais promoções,
                        atualizações de produto, lançamentos, eventos e outras coisas incríveis!
                    </p>
                </div>

                <div>
                    <Link href='https://www.facebook.com/DT3sports/'>
                        <AiFillFacebook color='white' size={50}/>
                    </Link>
                    <Link href='https://www.instagram.com/dt3sports/'>
                        <AiOutlineInstagram color='white' size={50} />
                    </Link>
                    <Link href='https://twitter.com/dt3sports'>
                        <FaTwitter color='white' size={50} />
                    </Link>
                    <Link href='https://www.youtube.com/dt3sports'>
                        <ImYoutube2 color='white' size={100} />
                    </Link>
                </div>
            </div>

            <div className={styles.other_links}>
                <div>
                    <section>
                        <h4>INSTITUCIONAL</h4>
                        <a href="https://www.dt3sports.com.br/sobre/">Sobre nós</a>
                        <a href="https://www.dt3sports.com.br/compra-corporativa/">Compra corporativa</a>
                        <a href="https://www.dt3sports.com.br/seja-revendedor/">Seja um revendedor</a>
                        <a href="https://www.dt3sports.com.br/contato/">Contato</a>
                        <a href="https://www.dt3sports.com.br/faq/">FAQ</a>
                        <a href="https://www.dt3sports.com.br/revendas/">Revendas</a>

                        <h4>ACESSE TAMBÉM</h4>
                        <a href="https://openbox.dt3.com.br/">Open Box DT3</a>

                        <h4>LOGIN COM AZURE</h4>
                        <a href="https://www.dt3sports.com.br/loja/elite-series/cadeira-gamer-dt3sports-rhino/#">Login with AzureAD</a>
                    </section>

                    <section>
                        <h4>DÚVIDAS</h4>
                        <a href="https://www.dt3sports.com.br/prazos/">Prazos e entregas</a>
                        <a href="https://www.dt3sports.com.br/garantia/">Garantia</a>
                        <a href="https://www.dt3sports.com.br/politica-de-privacidade/">Política de privacidade</a>
                        <a href="https://www.dt3sports.com.br/trocas-e-devolucoes/">Trocas e devoluções</a>
                        <a href="https://www.dt3sports.com.br/comparativo-home/">Guia comparativo</a>
                        <a href="https://www.dt3sports.com.br/guia-de-compra/">Guia de compra</a>
                    </section>

                    <section>
                        <h4>CONTATO</h4>

                        <span>Atendimento</span>
                        <a href="https://api.whatsapp.com/send?phone=+552120180792&text="><FaPhoneAlt size={14} />(21) 2018-0792</a>
                        <a href="mailto:atendimento@dt3.com.br"><AiOutlineMail style={{verticalAlign: 'middle'}} />atendimento@dt3.com.br</a>
                        <p>De 9:00 às 18:00 - segunda-feira a sexta-feira (exceto feriados)</p>

                        <h4>Garantia</h4>
                        <button>SOLICITAR GARANTIA</button>
                        <button>DEVOLUÇÃO (7 DIAS)</button>

                    </section>

                    <section>
                        <span>Se inscreva em nossa newsletter</span>
                        <p>Seja o primeiro a saber saber sobre nossas atualizações, eventos e produtos.</p>

                        <input type="email" placeholder='Email *' />
                        <span style={{marginBottom: '0.5rem'}}>
                            <input type="checkbox" id='checkbox' checked={checkbox} onChange={() => setCheckbox(!checkbox)} />
                            <label htmlFor="checkbox">Eu concordo em receber comunicações</label>
                        </span>
                        <button>ENVIAR</button>

                        <h4>Selecione um idioma</h4>
                        <select onChange={(e) => handleLanguage(e.target.value)}>
                            <option value="pt-br">Português</option>
                            <option value="en-us">English</option>
                        </select>
                    </section>
                </div>
            </div>
        </div>
    )
}