import React from "react";
import { useHistory } from "react-router-dom";
import { Header } from "../components";
import Login from "./Login";
import "../styles/home.css";
import { NavLink } from "react-router-dom";
import bg from "../image/bg.jpg";

const Home = () => {
  document.title = "Home";

  const history = useHistory();

  React.useEffect(() => {
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (isLogin) {
      history.push("/dashboard");
    }
  }, []);

  return (
    <>
      <Header />
      <div className="homeContainer">
        <div className="left__home">
          {/* <h1>Login form</h1> */}
          <img src={bg} alt="Tangan" className="bg" />
        </div>
        <div className="right__home">
          <div className="right__login">
            <Login />
          </div>
          <div className="right__register">
            <NavLink className="navlink" to="/register">
              haven't account yet?
            </NavLink>
          </div>
        </div>

        <div className="hide-login">
          <div className="right__login">
            <Login />
          </div>
          <div className="right__register">
            <NavLink className="navlink" to="/register">
              haven't account yet?
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
