import jwtDecode from "jwt-decode";
const jwt_token = localStorage.getItem("token") || null;

const isUser = () => {
  if (!jwt_token) return false;
  const user = jwtDecode(jwt_token);
  return user?.role;
};

const isLoggedIn = () => !!jwt_token;

const jwtDecoded = () => {
  if (!jwt_token) return false;
  const user = jwtDecode(jwt_token);
  return user;
};

export { isUser, isLoggedIn, jwt_token, jwtDecoded };
