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

  const [posts2, setPosts2] = useState([
    { id: 1, title: "Python", body: "Description" },
    { id: 2, title: "Python", body: "Description" },
    { id: 3, title: "Python", body: "Description" },
  ]);

  const [title,setTitle] = useState('');
  const bodyInputRef = useRef();

  const addNewPost=(e)=>{
      e.preventDefault();
      console.log(title);
      console.log(bodyInputRef.current.value)
  }

  return (
    <div className="App">
      <form>
          {/*Управляемый компонент*/}
        <MyInput
            value={title}
            onChange={e=>setTitle(e.target.value)}
            type="text"
            placeholder="Название поста"
        />
        {/*Неуправляемый\Неконтролируемый компонент*/}
          <MyInput
              type="text"
              placeholder='Описание поста'
              ref={bodyInputRef}
          />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts = {posts} title = {'Список постов JS'}/>
      <PostList posts = {posts2} title = {'Список постов Python '}/>
    </div>
  );
}

export default App;
