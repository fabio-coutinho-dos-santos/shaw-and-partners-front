/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useState } from 'react';
import { useHttp } from '../../hooks/useHttp';
import './Home.sass';
import { CONSTANTS } from '../../config/constants';
import CardUser from '../../components/CardUser/CardUser';

interface User {
  id: number;
  login: string
  avatar_url: string
}

function Home() {
  const [users, setUsers] = useState([]);
  const { getMethod } = useHttp();

  useEffect(() => {
    const getUsers = async () => {
      const githubUsers = await getGithubUsers();
      setUsers(githubUsers);
    };

    try {
      getUsers();
    } catch (error) {
      alert(`Error${error}`);
    }
  }, []);

  const getGithubUsers = async () => {
    const response = await getMethod(CONSTANTS.url.getGithubUsers);
    const githubUsers = await response.json();
    return Promise.resolve(githubUsers);
  };

  return (
    <div className="Home container">
      <div className="row">
        {users && users.map((user: User) => (
          <div className="col-lg-4">
            <CardUser avatar={user.avatar_url} login={user.login} id={user.id} />
          </div>
        ))}
      </div>
      <ul />
    </div>
  );
}

export default Home;
