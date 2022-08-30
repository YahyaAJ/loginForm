import React from "react";
import { useHistory } from "react-router-dom";
import { Button, Header } from "../components";
import "../styles/dashboard.css";
import menhera from "../image/menhera.png"

const Home = () => {
  document.title = "Dashboard";
  const [user, setUser] = React.useState({});

  const history = useHistory();

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setUser(user);
      localStorage.setItem("isLogin", JSON.stringify(true));
    } else {
      history.push("/");
    }
  }, []);

  const onLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  return (
    <div>
      <Header />
      <div className="dashboard">
        <div className="user" style={{ padding: 16 }}>
          <h1>Login successful !</h1>
          <h2>Halo {user?.name}</h2>
        </div>
        <div >
            <img src={menhera} className="db-image"/>
        </div>
          <Button title="Log Out" onClick={onLogout} />
      </div>
    </div>
  );
};

export default Home;
