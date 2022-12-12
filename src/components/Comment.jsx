import styles from "./Comment.module.css";
import { Trash, ThumbsUp} from "phosphor-react"
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ content, deleteComment }) {

    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment () {
        deleteComment(content)
    }

    return(
        <div className={styles.comment}>
            <Avatar hasBorder = {false} src="https://github.com/yan-arcanjo.png" />

            <div className={styles.commentBox}>
               <div className={styles.commentContent}>
                <header>
                    <div className={styles.authorAndTime}>
                        <strong>Yan Arcanjo</strong>
                        <time title="11 de Maio ás 08:13" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
                    </div>

                    <button onClick = {handleDeleteComment} tittle="Deletar Comentário">
                        <Trash size={24} />
                    </button>
                    
                </header>

                <p>{content}</p>

               </div>
               <footer>
                <button onClick={() => setLikeCount((state) => {
                    return (state + 1);
                })}>
                    <ThumbsUp size={20} />
                    Aplaudir <span>{likeCount}</span>
                </button>
               </footer>
            </div>
        </div>
    )
}