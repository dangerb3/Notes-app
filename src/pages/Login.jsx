import React, { useContext } from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { AuthContext } from '../context/index';

function Login() {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Login page</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Username" />
        <MyInput type="text" placeholder="Password" />
        <MyButton type="submit">Login</MyButton>
      </form>
    </div>
  );
}

export default Login;
