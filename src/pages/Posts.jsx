/* eslint-disable no-shadow */
import React, {
  useMemo, useRef, useState, useEffect,
} from 'react';
import PostService from '../API/PostService';
import { getPageCount } from '../utils/pages';
import { useFetching } from '../components/hooks/useFetching';
import { useSortedAndSearchedPosts } from '../components/hooks/usePosts';
import MyModal from '../components/UI/MyModal/MyModal';
import MyButton from '../components/UI/button/MyButton';
import PostForm from '../components/PostForm';
import Loader from '../components/UI/Loader/Loader';
import PostList from '../components/PostList';
import PostFilter from '../components/PostFilter';
import Pagination from '../components/UI/pagination/Pagination';
import { useObserver } from '../components/hooks/useObserver';
import MySelect from '../components/UI/select/MySelect';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = useSortedAndSearchedPosts(
    posts,
    filter.sort,
    filter.query,
  );
  const lastElement = useRef();

  const [fetchPosts, isPostLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers['x-total-count'];
      setTotalPages(getPageCount(totalCount, limit));
    },
  );

  useObserver(lastElement, page < totalPages, isPostLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  function createPost(newPost) {
    setPosts([...posts, newPost]);
    setModal(false);
  }

  function removePost(post) {
    setPosts(posts.filter((p) => p.id !== post.id));
  }

  const changePage = (page) => {
    setPage(page);
    // fetchPosts(); из-за асинхронности так делать не стоит, состояния внутри обновляются медленно
  };

  return (
    <div className="App">
      <button type="button" onClick={fetchPosts}>GET POSTS</button>
      <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Количество элементов на странице"
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25' },
          { value: -1, name: 'Показать все' }
        ]}
      />
      {postError && (
      <h1>
        Произошла ошибка
        {postError}
      </h1>
      )}
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
      <div ref={lastElement} style={{ height: 20, background: 'red' }} />
      {isPostLoading
        && <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>}
      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
}

export default Posts;
