import "../css/user-register.css";
import Header from "../Home/header";
import axios from "axios";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

const UserRegister = () => {
    const navigate = useNavigate();

    const {register, handleSubmit} = useForm();

    const onSubmit = (data) => {
        const obj = {
            username: data.username,
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            type: data.type,
            password: data.password,
        };

        axios
            .post(`http://localhost:8181/api/register`, obj)
            .then((res) => {
                console.log(res.data);
                navigate("/login");
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
                <div className="register-box">
                    <h1>Sign Up</h1>
                    <div className={"divider2"}/>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            name="username"
                            ref={register}
                            id="name"
                            placeholder="User Name"
                            required
                        />
                        <input
                            type="text"
                            name="firstname"
                            ref={register}
                            id="first"
                            placeholder="First Name"
                        />
                        <input
                            type="text"
                            name="lastname"
                            ref={register}
                            id="last"
                            placeholder="Last Name"
                        />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email Address"
                            ref={register}
                        />
                        <select className={"slt-r"} name="type" ref={register}>
                            <option className={"slt-op-r"}>Select User Type</option>
                            <option className={"slt-op-r"} value={"user"}>
                                User
                            </option>
                            <option className={"slt-op-r"} value={"admin"}>
                                Admin
                            </option>
                        </select>
                        <input
                            type="password"
                            ref={register}
                            name="password"
                            placeholder="Password.."
                            maxLength="10"
                        />
                        <input type="submit" value="Register"/>
                        <input type="reset" value="Cancel"/>
                    </form>
                    <div className={"divider2"}/>
                </div>
            </div>
        </div>
    );
};

export default UserRegister;
