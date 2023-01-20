import styles from './Populares.module.scss'
import fotos from './fotos-populares.json'

export default function Populares(){
    return(
        <aside className={styles.populares}>
            <h2>Populares</h2>
            <ul className={styles.populares__imagens}>
                {fotos.map((data) => {
                    return (
                        <li key={data.id}>
                            <img src={data.path} alt={data.alt} />
                        </li>
                    )
                })}
            </ul>
            <button>Ver mais</button>
        </aside>
    )
}