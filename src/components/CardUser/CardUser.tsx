/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext } from 'react';
import './CardUser.sass';
import { useNavigate } from 'react-router';
import { UserContext } from '../../contexts/UserContext';

interface Props {
  avatar: string
  login: string
  id: number
}

function CardUser({ avatar, login, id }: Props) {
  const { setUserId } = useContext(UserContext);
  const navigate = useNavigate();

  const goToDetailsPage = () => {
    setUserId(id);
    navigate('/details');
  };

  return (
    <div className="CardUser">
      <div className="row">
        <div className="col-6">
          <img className="avatar" src={avatar.replace(/['"]+/g, '')} />
          <div className="row d-block d-sm-none text-end" id="login">
            <h5>{login}</h5>
          </div>
          <div className="row d-block d-sm-none text-end mt-2" id="details">
            <p onClick={goToDetailsPage}>see more</p>
          </div>
        </div>
        <div className="col-6">
          <div className="row text-end m-2">
            <h2>{id}</h2>
          </div>
          <div className="row d-none d-sm-block text-end" id="login">
            <h5>{login}</h5>
          </div>
          <div className="row text-end d-none d-sm-block" id="details">
            <p onClick={goToDetailsPage}>see more</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardUser;
