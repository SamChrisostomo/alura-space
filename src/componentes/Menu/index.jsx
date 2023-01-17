import styles from './Menu.module.scss'
import home from '../../assets/icons/home.png'
import maisCurtidas from '../../assets/icons/mais-curtidas.png'
import maisVistas from '../../assets/icons/mais-vistas.png'
import novas from '../../assets/icons/novas.png'
import surpreendaMe from '../../assets/icons/surpreenda-me.png'

export default function Menu(){
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={home} alt="Home" />
                    <a href="/">Home</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisCurtidas} alt="Mais Curtidas" />
                    <a href="/">Mais Curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={maisVistas} alt="Mais Vistas" />
                    <a href="/">Mais Vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={novas} alt="Novas" />
                    <a href="/">Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={surpreendaMe} alt="Surpreenda-me" />
                    <a href="/">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}