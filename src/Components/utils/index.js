import jwtDecode from "jwt-decode";
const isUser = () => {
  const token = localStorage.getItem("token");
  if (!token) return false;
  const user = jwtDecode(token);
  return user?.role;
};
console.log(isUser());
export { isUser };
