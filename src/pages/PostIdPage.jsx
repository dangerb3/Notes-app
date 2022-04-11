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
    <div>
      <h1>
        Post page with id =
        {params.id}
      </h1>
      {
            isLoading
              ? <Loader />
              : (
                <div>
                  {post.id}
                  .
                  {' '}
                  {post.title}
                </div>
              )
        }
      <h1>Comments</h1>
      {
            isComLoading
              ? <Loader />
              : (
                <div>
                  {comments.map((comm) => (
                    <div style={{ marginTop: 15 }} key={comm.id}>
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
