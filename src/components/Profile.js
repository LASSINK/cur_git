import React, { useState, useEffect } from 'react';
import UserService from '../services/UserService';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userService = new UserService();
    userService.getCurrentUser().then(setUser);
  }, []);

  if (!user) return <div>로딩 중...</div>;

  return (
    <div>
      <h2>프로필</h2>
      <p>이름: {user.name}</p>
      <p>이메일: {user.email}</p>
      {user.type === 'JobSeeker' && (
        <>
          <h3>스킬:</h3>
          <ul>
            {user.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
          <p>경력: {user.experience} 년</p>
        </>
      )}
      {user.type === 'Employer' && (
        <>
          <p>회사: {user.company}</p>
          <p>업종: {user.industry}</p>
        </>
      )}
    </div>
  );
}

export default Profile;
