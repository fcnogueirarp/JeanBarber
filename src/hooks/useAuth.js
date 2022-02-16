import api from '../utils/api';

import { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [name, setName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }
  }, []);

  async function register(user) {
    try {
      const data = await api.post('/users/register', user).then(response => {
        console.log(response.data.message);
        return response.data;
      });
      authUser(data);
    } catch (error) {
      console.log(error);
      Swal.fire({
        text: error,
        confirmButtonText: 'Ok',
      });
    }
  }

  function logout() {
    const msgTxt = 'Logout realizado com sucesso!';
    const msgType = 'success';

    setAuthenticated(false);
    localStorage.clear();
    api.defaults.headers.Authorization = undefined;
    navigate('/');

    Swal.fire({
      title: msgType,
      text: msgTxt,
      icon: msgType,
      confirmButtonText: 'Ok',
    });
  }

  async function login(user) {
    let msgTxt = 'Login realizado com sucesso';
    let msgType = 'success';

    try {
      const data = await api.post('/users/login', user).then(response => {
        setName(name);
        console.log(user);
        Swal.fire({
          text: response.data.message,

          confirmButtonText: 'Ok',
        });
        return response.data;
      });

      await authUser(data);
    } catch (error) {
      msgTxt = error.response.data.message;
      msgType = 'error';
      Swal.fire({
        title: msgType,
        text: msgTxt,
        icon: msgType,
        confirmButtonText: 'Ok',
      });
    }
  }

  async function authUser(data) {
    if (data.message === 'Você está autenticado!') {
      setAuthenticated(true);

      localStorage.setItem('token', JSON.stringify(data.token));

      navigate('/order');
    } else {
      setAuthenticated(false);

      localStorage.removeItem('token', JSON.stringify(data.token));

      navigate('/login');
    }
  }

  return { authenticated, register, logout, login };
}
