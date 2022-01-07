import styles from './styles.module.scss'
import { GoPlus } from 'react-icons/go'
import { useState } from 'react'

export function RhinoInfos() {
    const [showTable, setShowTable] = useState(false);

    return (
        <div className={styles.container}>
            <img src="/RHINO-CAPA-1920x1000.jpg" alt="rhino-capa" />

            <div className={styles.details}>
                <div className={styles.item}>
                    <img src="Almofada-XL.svg" alt="item-1" />
                    <span>Almofadas XL</span>
                </div>

                <div className={styles.item}>
                    <img src="Espuma-injetada.svg" alt="item-1" />
                    <span>Espuma Injetada</span>
                </div>

                <div className={styles.item}>
                    <img src="mecanismo.svg" alt="item-1" />
                    <span>Mecanismo Frog</span>
                </div>

                <div className={styles.item}>
                    <img src="base.svg" alt="item-1" />
                    <span>Base Alumínio Reforçada</span>
                </div>

                <div className={styles.item}>
                    <img src="rodinha.svg" alt="item-1" />
                    <span>Roda 75mm</span>
                </div>

                <div className={styles.item}>
                    <img src="Brao-4D.svg" alt="item-1" />
                    <span>Braço 4D</span>
                </div>
            </div>

            <div className={styles.banner1}>
                <div>
                    <h2>Design</h2>
                    <p>A costura com padrão hexagonal da Rhino complementa o estilo racing com um toque refinado e diferente.</p>
                </div>
            </div>

            <div className={styles.title_name}>
                <h1>A VERDADEIRA HEAVY DUTY</h1>
            </div>

            <div className={styles.information}>
                <div>
                    <h2>Estrutura 100% aço durabilidade garantida</h2>

                    <p>
                    A Rhino tem estrutura mais larga e reforçada para aguentar até 200kg. Produzida com solda automatizada e aço sólido de 25mm de diâmetro, 
                    tem sua durabilidade assegurada mesmo após 6 anos de uso pela garantia na estrutura.
                    </p>

                    <h2>Espuma que não perde o formato</h2>

                    <p>
                    – Espuma injetada de densidade 65g/m³ para durabilidade, ergonomia e conforto.<br />
                    – A alta tecnologia torna a espuma dimensionalmente estável, não perdendo o formato mesmo após longos períodos de uso.
                    </p>
                </div>
                
                <img src="/RHINO-banners-estrutura-rev2Prancheta-6.jpg" alt="estrutura" />
                

            </div>

            <img src="/RHINO-banners_05-1920x601.jpg" alt="banner" />

            <div className={styles.frog_system}>
                <div>
                    <h2>SISTEMA<br />FROG</h2>
                    <p>
                    A exclusividade de poder travar em qualquer ângulo. O mecanismo frog, 
                    proporciona a mesma sensação que as clássicas poltronas de avô dão, 
                    onde você sente o seu corpo totalmente em repouso sem forçar a musculatura para atingir a posição ideal e mais confortável.
                    </p>
                </div>

                <video autoPlay loop>
                    <source src="/camera_1Frog-onix-animation.0000.mp4" type='video/mp4' />
                </video>
            </div>

            <div className={styles.wheels}>
                <div>
                    <h2>Rodas 75mm com revestimento de poliuretano</h2>
                    <p>Feita para qualquer superfície lisa e elaborada para o dia a dia, 
                        possui alta durabilidade no padrão de qualidade DT3sports. É uma rodinha com robustez que dura bastante, 
                        não arranha até mesmo os pisos mais delicados e nem emite ruídos por conta do revestimento de poliuretano.
                    </p>
                </div>

                <img src="/Roda-75mm-1920x1200.jpg" alt="rodinha" />
            </div>

            <div className={styles.base}>
                <img src="/base-descri.jpg" alt="base" />

                <div>
                    <h2>Base com reforço premium</h2>
                    <p>
                    Com design inovador e robusto, a base da Elite Series foi aprovada em diversos testes de resistência para garantir segurança e durabilidade. 
                    A base sozinha suporta 2500kg mesmo após 1 ano de uso. Isso só é possível pelo seu material de alumínio, 
                    com reforço em forma diamantada de 5mm ao longo dos 5 pés, que possuem 350mm de raio.
                    </p>
                </div>
            </div>

            <div className={styles.pillow}>
                <div>
                    <h2>Almofada extra grande</h2>
                    <p>
                    Acompanhada das clássicas almofadas de pescoço e lombar que fazem as Elite Series ainda mais confortáveis, 
                    a Rhino ainda conta com a exclusiva almofada de lombar extra grande.
                    Oferecendo maior extensão para os pontos de pressão da sua coluna.
                    </p>
                </div>
                
            </div>

            <div className={styles.gif}>
                <img src="/braco-4d-1.gif" alt="braco-4d-1" />
                <img src="/braco-4d-2.gif" alt="braco-4d-2" />
            </div>

            <div className={styles.reclinium}>
                <div>
                    <h2>RECLÍNIO DE ATÉ 180º</h2>
                    <p>
                    Com o encosto reclinável mais o ajuste do sistema frog, 
                    os modelos da Elite Series chegam até 180º da forma mais ergonômica possível. 
                    Para melhor posicionamento durante o gameplay ou descanso durante os intervalos.
                    </p>
                </div>

                <video autoPlay loop>
                    <source src="/180-graus-Elite.mp4" type='video/mp4' />
                </video>
            </div>

            <div className={styles.warranty}>
                <div>
                    <h2>Todas as cadeiras da Elite Series contam com:</h2>
                    <p>
                    6 anos na estrutura de aço
                    <br />
                    3 anos na base e rodinhas
                    <br />
                    2 anos no cilíndro de gás
                    <br />
                    1 ano nas demais partes
                    </p>
                </div>
            </div>

            <div className={styles.specifications}>
                <h2>ESPECIFICAÇÕES</h2>

                <div className={styles.img_area}>
                    <img src="/Rhino-Frontal.svg" alt="Frontal" />
                    <img src="/Rhino-Lateral.svg" alt="Lateral" />
                </div>

                <div className={styles.accordeon}>
                    <h3>TABELA DETALHADA</h3>
                    <GoPlus size="32px" onClick={() => setShowTable(!showTable)} />

                </div>
                <div className={showTable ? styles.accordeon_infos : styles.hidden }>
                    <table>
                        <tr>
                            <td>
                                <strong>Modelo</strong>
                            </td>
                            <td>
                                <strong>Rhino</strong>
                            </td>
                        </tr>
                        <tr>
                            <td><strong>Série</strong></td>
                            <td><span>Elite Series</span></td>
                        </tr>
                        <tr>
                            <td><strong>Cores</strong></td>
                            <td><span>Black, Blue, Green, Red, White, Orange</span></td>
                        </tr>
                        <tr>
                            <td><strong>Revestimento</strong></td>
                            <td><span>Couro PU Premium</span></td>
                        </tr>
                        <tr>
                            <td><strong>Estrutura</strong></td>
                            <td><span>100% Aço 2.0mm</span></td>
                        </tr>
                        <tr>
                            <td><strong>Densidade do estofamento</strong></td>
                            <td><span>65D</span></td>
                        </tr>
                        <tr>
                            <td><strong>Espessura do assento</strong></td>
                            <td><span> 12cm</span></td>
                        </tr>
                        <tr>
                            <td><strong>Braço</strong></td>
                            <td><span>4D</span></td>
                        </tr>
                        <tr>
                            <td><strong>Almofadas</strong></td>
                            <td><span>Pescoço e lombar</span></td>
                        </tr>
                        <tr>
                            <td><strong>Cilindro</strong></td>
                            <td><span>Classe 4, 100mm</span></td>
                        </tr>
                        <tr>
                            <td><strong>Rodas</strong></td>
                            <td><span>Nylon com acabamento em PU, 75mm</span></td>
                        </tr>
                        <tr>
                            <td><strong>Base</strong></td>
                            <td><span>Alumínio</span></td>
                        </tr>
                        <tr>
                            <td><strong>Mecanismo</strong></td>
                            <td><span>Frog</span></td>
                        </tr>
                        <tr>
                            <td><strong>Função rocking</strong></td>
                            <td><span>20º</span></td>
                        </tr>
                        <tr>
                            <td><strong>Trava rocking</strong></td>
                            <td><span>Sim</span></td>
                        </tr>
                        <tr>
                            <td><strong>Reclinação de encosto</strong></td>
                            <td><span>160º</span></td>
                        </tr>
                        <tr>
                            <td><strong>Peso máximo recomendado</strong></td>
                            <td><span>200kg</span></td>
                        </tr>
                        <tr>
                            <td><strong>Altura máxima recomendada</strong></td>
                            <td><span>2.10m</span></td>
                        </tr>
                        <tr>
                            <td><strong>Garantia geral</strong></td>
                            <td><span>1 ano</span></td>
                        </tr>
                        <tr>
                            <td><strong>Garantia da estrutura</strong></td>
                            <td><span>6 anos</span></td>
                        </tr>
                        <tr>
                            <td><strong>Garantia base e rodas</strong></td>
                            <td><span>3 anos</span></td>
                        </tr>
                        <tr>
                            <td><strong>Garantia cilindro de gás</strong></td>
                            <td><span>2 anos</span></td>
                        </tr>
                        <tr>
                            <td><strong>Certificações</strong></td>
                            <td><span>BIFMA, EN 1335, TUV</span></td>
                        </tr>
                        <tr>
                            <td><strong>Peso líquido</strong></td>
                            <td><span>30.00kg</span></td>
                        </tr>
                        <tr>
                            <td><strong>Peso bruto</strong></td>
                            <td><span>35.00kg</span></td>
                        </tr>
                        <tr>
                            <td><strong>Dimensões da caixa</strong></td>
                            <td><span>940 x 810 x 410 mm</span></td>
                        </tr>
                    </table>
                </div>
                <div className={styles.disclaimer}>
                    <strong>Atenção:</strong>
                    <span>Este produto não vem montado e não inclui serviço de montagem. Acompanha manual de instrução prático.</span>

                    <button>
                        <a href="https://dt3combr.sharepoint.com/:b:/s/marketing/ER1mtEdp6JtAlqYyDdjt4QEB8bQHNG5aLTwQWI60tf-JoA?e=aCWNpS" target="_blank">Download do Manual</a>
                    </button>
                </div>
            </div>
            <div className={styles.rating}>
                <h2>Avaliações</h2>

                <div className={styles.rating_infos}>
                    <div>
                        <h4>Média de avaliações</h4>
                        <h1>5.0</h1>

                        <section>
                            {/* estrelas */}
                            <p>( 35 avaliações )</p>
                        </section>

                        <div>
                            {/* imagem */}
                            <p>
                                <strong>35 clientes</strong> recomendariam este produto para um amigo
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3>CONFORTO</h3>
                        <h3>QUALIDADE</h3>
                        <h3>CARACTERÍSTICAS</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}