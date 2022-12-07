import { Header } from "./components/Header";
import { Post } from "./Post";
import styles from './App.module.css'
import './global.css'

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author = "Diego Fernandes"
            content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi id nemo amet. Cum nihil a alias expedita amet eaque provident distinctio voluptatum fuga! Repellendus veritatis, cum dicta aut placeat similique!"
          />
          <Post 
            author = "Gabriel Buzzi"
            content = "Um novo post"
          />
        </main>
      </div>
    </div>
  )
}






