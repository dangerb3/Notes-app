import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context';
import MyButton from '../button/MyButton';

function Navbar() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth');
  };
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <MyButton onClick={logout}>Выйти</MyButton>
      <div className="navbar__links">
        {/* <Link to="/about">О сайте</Link> */}
        <MyButton onClick={() => navigate('/about')}>О сайте</MyButton>
        <MyButton onClick={() => navigate('/posts')}>Посты</MyButton>
        {/* <Link to="/posts">Посты</Link> */}
      </div>
    </div>
  );
}

export default Navbar;
