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
        console.log('sorted posts')
        if (filter.sort){
            return [...posts].sort((a,b)=>a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts]); 
    const sortedAndSearchedPosts = useMemo(()=>{
        return sortedPosts.filter(post=>post.title.toLowerCase().includes(filter.query.toLowerCase()))
    }, [filter.query, sortedPosts])

  function createPost(newPost) {
    setPosts([...posts, newPost])
      setModal(false)
  }

  function removePost(post) {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
        <MyButton style = {{marginTop: '30px'}} onClick={()=>setModal(true)}>
            Создать пользователя
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create = {createPost}/>
        </MyModal>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter
        filter={filter}
        setFilter={setFilter}
        />
          <PostList remove = {removePost} posts={sortedAndSearchedPosts} title='Посты про JS'/>
    </div>
  );
}

export default App;
