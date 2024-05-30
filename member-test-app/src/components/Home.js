import React from 'react';
import { Link } from 'react-router-dom';
import './../css/home.css';
const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">로그인 JWT 방식 테스트</h1>
      <div className="home-links">
        <Link to="/login" className="home-link">로그인</Link>
        <Link to="/register" className="home-link">회원가입</Link>
        <Link to="/main" className="home-link">메인페이지</Link>
      </div>
    </div>
  );
};

export default Home;