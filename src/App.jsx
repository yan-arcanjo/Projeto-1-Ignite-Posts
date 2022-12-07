import { Post } from "./Post"; 

export function App() {
  return (
    <div>
      <Post 
        author="Diego Fernandes" 
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, enim doloribus? Perspiciatis, non distinctio tenetur ad illum laborum sunt voluptatibus consectetur cum earum et, magnam, architecto libero dolore? Ad, iusto?" 
      />
      <Post 
        author="Gabriel Uzzi" 
        content="Um novo post bem legal"
      />
    </div>
  )
}




