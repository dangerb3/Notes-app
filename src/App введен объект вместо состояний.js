import React, {useRef, useState} from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript", body: "Description" },
    { id: 3, title: "Javascript", body: "Description" },
  ]);

  const [post,setPost] = useState({title:'', body:''})

  const addNewPost=(e)=>{
      e.preventDefault();
      setPosts([...posts, {...post, id: Date.now()}])
      setPost({title:'', body:''})
  }

  return (
    <div className="App">

      <form>
        <MyInput
            value={post.title}
            onChange={e=>setPost({...post, title: e.target.value})}
            type="text"
            placeholder="Название поста"
        />
          <MyInput
              value={post.body}
              onChange={e=>setPost({...post, body: e.target.value})}
              type="text"
              placeholder='Описание поста'
          />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>

      <PostList posts = {posts} title = {'Список постов JS'}/>

      {/* Для классов css здесь используется className, т.к. имя class занято для классов в Js */}

      {/* Передача пропсов в компонент. Названия аргументов могут быть любые */}
      {/* <PostItem post={{ id: 1, title: "Javascript", body: "Description" }} /> */}

      {/* <ClassCounter /> */}
      {/* <h1>{likes}</h1>
      <h1>{value}</h1> */}
      {/* <input */}
      {/* type="text"
         value={value}
         onChange={(event) =>
         setValue(event.target.value) */}
      {/*  Связывание состояния со значением в input  */}
      {/* ></input> */}
      {/* <button onClick={increment}>Increment</button> */}
      {/* Просто так меняться значение не будет. Нужно использовать стейт, чтобы реакт знал что менять */}
      {/* <button onClick={decrement}>Decrement</button> */}
      {/* В функциях не указываем скобки. Передаем как ссылку. */}
    </div>
  );
}

export default App;
