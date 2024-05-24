const { useContext } = require("react");
const { TokenContext } = require("../context/userContext");

const Profile = () => {
  const { token, userName } = useContext(TokenContext);

  return (
    <div>
      <h2>Profile Page</h2>
      <p className="text-success">Welcome, {userName}!</p>
      <p className="text-success">Your token: {token}</p>
      <p><a href="/">Go to Home </a></p>
    </div>
  );
};
export default Profile