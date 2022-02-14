import "../css/user-login.css";
import Header from "../Home/header";
import {Link, useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";

const UserLogin = () => {
  const navigate = useNavigate();

  const {register, handleSubmit} = useForm();
  const onSubmit = (data) => {
    const obj = {
      username: data.username,
      password: data.password,
      type: data.type,
    };
    axios
        .post("http://localhost:8181/api/login", obj, {withCredentials: true})
        .then((res) => {
          const data = res.data;
          if (data.type === "user") {
            navigate("/view-weather", res.data);
          } else if (data.type === "admin") {
            navigate("/add-weather", res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
  };

  return (
      <div className={"b-vox"}>
        <Header/>
        <div className={"space"}/>
        <div className={"container-box"}>
          <div className="reg-box">
            <h1>Login</h1>
            <div className={"divider"}/>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                  type="text"
                  id="username"
                  name={"username"}
                  placeholder="User Name"
                  ref={register}
              />
              <input
                  type="password"
                  name={"password"}
                  id="password"
                  placeholder="Password.."
                  maxLength="10"
                  ref={register}
              />
              <select name={"type"} className={"slt"} ref={register}>
                <option className={"slt-op"} value={"#"}>
                  Select
                </option>
                <option className={"slt-op"} value={"user"}>
                  User
                </option>
                <option className={"slt-op"} value={"admin"}>
                  Admin
                </option>
              </select>
              <input type="submit" value="Login"/>
              <input type="reset" value="Cancel"/>
            </form>
            <div className={"divider"}/>
            <p className={"t"}>
              New User Click Here :&nbsp;&nbsp;&nbsp;
              <Link className={"link"} to={"/register"}>
                register
              </Link>
            </p>
          </div>
        </div>
      </div>
  );
};

export default UserLogin;
