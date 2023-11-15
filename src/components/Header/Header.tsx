/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './Header.sass';
import { FaGithub } from 'react-icons/fa6';

function Header() {
  return (
    <div className="Header position-absolut d-flex top-0 justify-content-center align-items-center">
      <div className="text text-center">
        <div className="mt-1">
          <h3>
            {' '}
            <FaGithub role="github-icon" id="github-icon" />
            {' '}
            Shaw and Partners
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
