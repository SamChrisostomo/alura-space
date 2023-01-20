import styles from './Menu.module.scss'
import icones from './icones.json'

export default function Menu(){
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__lista}>
                <li className={styles.menu__item}>
                    <img src={icones.home} alt="Home" />
                    <a href="/">Home</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={icones.maisCurtidas} alt="Mais Curtidas" />
                    <a href="/">Mais Curtidas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={icones.maisVistas} alt="Mais Vistas" />
                    <a href="/">Mais Vistas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={icones.novas} alt="Novas" />
                    <a href="/">Novas</a>
                </li>
                <li className={styles.menu__item}>
                    <img src={icones.surpreendaMe} alt="Surpreenda-me" />
                    <a href="/">Surpreenda-me</a>
                </li>
            </ul>
        </nav>
    )
}