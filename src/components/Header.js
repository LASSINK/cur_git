import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">홈</Link></li>
          <li><Link to="/jobs">구직 목록</Link></li>
          <li><Link to="/profile">프로필</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
