import fotos from '../fotos.json'
import Card from './Card'
import favorito from './favorito.png'
import open from './open.png'

export default function Cards({styles}) {
    return (
        <ul className={styles.galeria__cards}>
            {fotos.map((data) => <Card styles={styles} favorito={favorito} open={open} data={data} />)}
        </ul>
    )
}