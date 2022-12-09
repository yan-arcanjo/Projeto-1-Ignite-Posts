import styles from './Sidebar.module.css';
import {PencilLine} from "phosphor-react"
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className = {styles.cover} src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" alt="imagem de fundo do perfil" />

            <div className={styles.profile}>
                <Avatar src="https://github.com/yan-arcanjo.png" margin-top = "calc(0px - 1.5rem - 12px)" />

                <strong>Yan Arcanjo</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}