/* eslint-disable no-unused-expressions */
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
import MyCheckBox from '../components/UI/checkBox/MyCheckBox';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [infinityScroll, setInfinityScroll] = useState(false);
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
    if (infinityScroll)setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit, infinityScroll]);

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

  const changeInfinityScrollToggle = (infinityScroll) => {
    if (infinityScroll) setInfinityScroll(false); else setInfinityScroll(true);
  };

  return (
    <div className="App">
      {/* <MyButton type="button" onClick={fetchPosts}>GET POSTS</MyButton> */}
      <div style={{ display: 'flex' }}>
        <MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
          Create post
        </MyButton>
        <MyCheckBox
          style={{ marginTop: '30px' }}
          state={infinityScroll}
          callback={changeInfinityScrollToggle}
        >
          Infinity scroll
        </MyCheckBox>
      </div>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <hr style={{ margin: '15px 0' }} />
      <div style={{ display: 'flex' }}>
        <PostFilter
          filter={filter}
          setFilter={setFilter}
          limit={limit}
          setLimit={setLimit}
          infinityScroll={infinityScroll}
        />
      </div>
      {postError && (
      <h1>
        Error
        {postError}
      </h1>
      )}
      <PostList remove={removePost} posts={sortedAndSearchedPosts} isPostLoading={isPostLoading} title="Post list" />
      <div ref={lastElement} />
      {isPostLoading
        && <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}><Loader /></div>}
      {!infinityScroll
        && <Pagination page={page} changePage={changePage} totalPages={totalPages} />}
    </div>
  );
}

export default Posts;
