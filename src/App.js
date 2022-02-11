import React, {useMemo, useRef, useState} from "react";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import PostItem from "./components/PostItem";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import MySelect from "./components/UI/select/MySelect";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
    { id: 2, title: "Javascript", body: "Description" },
    { id: 3, title: "Javascript", body: "Description" },
  ]);
  const [filter, setFilter]=useState({sort:'', query:''});
    const [modal,setModal] = useState(false)

    const sortedPosts = useMemo(()=>{
        console.log('sorted posts')// Теперь вызывается один раз, а не при каждом изменении input
        if (filter.sort){
            // Сравнение русских символов localCompare
            // Передаем [...posts] т.к. менять переменную стейта напрямую нельзя
            return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts]); // То есть если какая то из deps поменяет значение, будет вызван callback

    const sortedAndSearchedPosts = useMemo(()=>{
        return sortedPosts.filter(post=>post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

  function createPost(newPost) {
    setPosts([...posts, newPost])
      setModal(false)
  }

  // Получаем post из дочернего компонента
  function removePost(post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
        <MyButton style = {{marginTop: '30px'}} onClick={()=>setModal(true)}>
            Создать пользователя
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create = {createPost}/> {/*Передали колбэк функцию в качестве пропса*/}
        </MyModal>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter
        filter={filter}
        setFilter={setFilter}
        />
          <PostList remove = {removePost} posts={sortedAndSearchedPosts} title='Посты про JS'/>


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
