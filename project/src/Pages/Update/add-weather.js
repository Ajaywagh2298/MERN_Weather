import "../css/add-weather.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";

const AddWeather = () => {
  const navigate = useNavigate();
  const {register, handleSubmit} = useForm();

  const onSubmit = (data) => {
    const obj = {
      city: data.city,
      date: data.date,
      time: data.time,
      temparature: data.temparature,
      windspeed: data.windspeed,
      humidity: data.humidity,
    };
    console.log(obj);

    axios
        .post(`http://localhost:8181/api/weather`, obj, {withCredentials: true})
        .then((res) => {
          console.log(res.data);
          window.location.reload();
        })
        .catch((err) => {
          console.log(err.response.status);
        });
  };

  return (
      <div className={"weather-container"}>
        <nav className={"navbar-box2 navbar navbar-expand-lg navbar-light"}>
          <div className={"container-fluid"}>
            <a className={"navbar-brand"}>
              <i className="icon far fa-snowflake fa-spin"></i>
            </a>
            <a className={"logo"}>Weather_Drills...</a>
            <div
                href={"#s"}
                className={"admin collapse navbar-collapse ms-auto mb-2"}
                id="navbarTogglerDemo02"
            >
              <ul className={"navbar-nav me-auto mb-2 mb-lg-0 col-12"}>
                <li className={"nav-item"}>
                  <a className={"nav-link"}>
                    <span className={"logo"}></span>
                  </a>
                </li>
                <li className={"nav-item"}>
                  <a className={"nav-link"}>
                    <span className={"logo"}></span>
                  </a>
                </li>
                <li className={"nav-item"}></li>
                <li className={"colr nav-item dropdown"}>
                  <button className={"btn btn-outline-light"}>
                    <i className="fas fa-sign-out-alt"></i>&nbsp;Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className={"form-box"}>
          <div className={"form-box-b"}>
            <div className="card p-4 py-5">
              <h2>Weather Information Update</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="signup mt-3">
                  <input
                      type="text"
                      name="city"
                      className="form-control"
                      placeholder="City"
                      ref={register}
                  />
                  <input
                      type="date"
                      name="date"
                      className="form-control"
                      placeholder="Date"
                      ref={register}
                  />
                  <input
                      type="time"
                      name="time"
                      className="form-control"
                      placeholder="Time"
                      ref={register}
                  />
                  <div className="d-flex">
                    <input
                        type="tel"
                        name="temparature"
                        className="f-box form-control "
                        placeholder="Temparature"
                        ref={register}
                    />
                    <p className="icon-p">°C</p>
                  </div>
                  <div className="d-flex">
                    <input
                        type="tel"
                        name="windspeed"
                        className="f-box form-control"
                        placeholder="Windspeed"
                        ref={register}
                    />
                    <p className="icon-p">Km/h</p>
                  </div>
                  <div className="d-flex">
                    <input
                        type="tel"
                        name="humidity"
                        className="f-box form-control"
                        placeholder="Humidity"
                        ref={register}
                    />
                    <p className="icon-p">%</p>
                  </div>
                </div>
                <div className="mt-4">
                  <button
                      type="submit"
                      className="btn btn-danger button btn-block"
                  >
                    <i className="fad fa-plus"></i>&nbsp;ADD
                  </button>
                  &nbsp;&nbsp;
                  <button type="reset" className={"btn button2 button btn-block"}>
                    <i className="fas fa-power-off"></i>&nbsp;Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AddWeather;
