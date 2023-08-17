import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px;
`;

const UserCard = styled.div`
  border: 1px solid pink;
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 50%;
    margin-bottom: 10px;
  }

  p {
    margin: 0;
    font-size: 16px;
    font-weight: 500;
    color: #333;
  }

  .user-email {
    color: #777;
  }
`;

const UserGrid = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let allUsers = [];
        for (let page = 1; page <= 4; page++) {
          const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
          allUsers = [...allUsers, ...response.data.data];
        }
        setUsers(allUsers);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <GridContainer>
          {users.map(user => (
            <UserCard key={user.id}>
              <img src={user.avatar} alt={user.first_name} />
              <p>{`${user.first_name} ${user.last_name}`}</p>
              <p className="user-email">{user.email}</p>
            </UserCard>
          ))}
        </GridContainer>
      )}
    </div>
  );
};

export default UserGrid;
