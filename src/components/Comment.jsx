import styles from "./Comment.module.css";
import { Trash, ThumbsUp} from "phosphor-react"

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://github.com/yan-arcanjo.png" />

            <div className={styles.commentBox}>
               <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Yan Arcanjo</strong>
                        <time title="11 de Maio ás 08:13" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                    </div>

                    <button tittle="Deletar Comentário">
                        <Trash size={24} />
                    </button>
                    
                </header>

                <p>Muito bom Devon, parabéns!! 👏👏</p>

               </div>
               <footer>
                <button>
                    <ThumbsUp size={20} />
                    Aplaudir <span>20</span>
                </button>
               </footer>
            </div>
        </div>
    )
}