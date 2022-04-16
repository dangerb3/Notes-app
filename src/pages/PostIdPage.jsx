import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../components/hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';

function PostIdPage() {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });
  const [fetchCommentsById, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getCommentsById(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById(params.id);
    fetchCommentsById(params.id);
  }, []);

  return (
    <div className="post-id-page">
      <h1 className="post-id-page__title">
        Post
        {' '}
        {params.id}
      </h1>
      <h3>Description</h3>

      {
            isLoading
              ? <Loader />
              : (
                <div>
                  {/* {post.id}
                  .
                  {' '} */}
                  {post.title}
                </div>
              )
        }
      <h3>Comments</h3>
      {
            isComLoading
              ? <Loader />
              : (
                <div>
                  {comments.map((comm) => (
                    <div className="post-id-page__comment-item" style={{ marginTop: 15 }} key={comm.id}>
                      <h5>{comm.email}</h5>
                      <div>{comm.body}</div>
                    </div>
                  ))}
                </div>
              )
        }
    </div>
  );
}

export default PostIdPage;
