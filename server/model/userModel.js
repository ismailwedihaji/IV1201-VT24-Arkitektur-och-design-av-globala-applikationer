const users = [
    { username: 'admin', password: 'password123' }, // This should be hashed in a real application
  ];
  
  const findUserByUsername = (username) => {
    return users.find((user) => user.username === username);
  };
  
  module.exports = { findUserByUsername };
  