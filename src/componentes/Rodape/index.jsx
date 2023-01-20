import style from './Rodape.module.scss'
import icones from './icones.json'

export default function Rodape(){
    return(
        <div className={style.rodape}>
            <div className={style.rodape__icones}>
                <p>
                    <img src={icones.facebook} alt="Icone da rede social Facebook" />
                </p>
                <p>
                    <img src={icones.twitter} alt="Icone da rede social Twitter" />
                </p>
                <p>
                    <img src={icones.instagram} alt="Icone da rede social Instagram" />
                </p>
            </div>
        </div>
    )
}