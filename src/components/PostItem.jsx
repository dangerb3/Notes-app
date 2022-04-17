import React from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from './UI/button/MyButton';

function PostItem(props) {
  const navigate = useNavigate();
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.post.id.toString().length < 12
            ? `${props.post.id}. `
            : ' '}
          {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton style={{ display: props.post.id.toString().length < 12 ? 'flex' : 'none' }} onClick={() => navigate(`${props.post.id}`)}>
          Open
        </MyButton>
        <MyButton onClick={() => props.remove(props.post)}>
          Remove
        </MyButton>
      </div>
    </div>

  );
}

export default PostItem;
