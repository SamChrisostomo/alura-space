export default function Card({styles, favorito, open, data}) {
    return (
        <li className={styles.galeria__card}>
            <img className={styles.galeria__imagem} src={data.imagem} alt="Imagem do espaço" />
            <p className={styles.galeria__descricao}>{data.titulo}</p>
            <div>
                <p>{data.creditos}</p>
                <span>
                    <img src={favorito} alt="Icone de favoritar" />
                    <img src={open} alt="Icone de expandir card" />
                </span>
            </div>
        </li>
    )
}