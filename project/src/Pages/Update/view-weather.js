import "../css/view-weather.css";
import React, {useEffect, useState} from "react";
import WeatherTableRows from "./weather-table-rows";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {useForm} from "react-hook-form";

const ViewWeather = () => {
  const [weather, setWeather] = useState([]);
  const [date, setDate] = useState('');
  const {register, handleSubmit} = useForm();
  const navigate = useNavigate();
  const instance = axios.create({
    withCredentials: true
  })
  useEffect(() => {
    instance
        .get(`http://localhost:8181/api/weather`)
        .then(({data}) => {
          setWeather(data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, []);

  const onSubmit = (data) => {
    console.log(data)
    var current = new Date(data.search);
    const month =
        current.getMonth() < 10
            ? "0" + (current.getMonth() + 1)
            : current.getMonth() + 1;
    const today = `${current.getFullYear()}-${month}-${current.getDate()}`;
    setDate(current);
  };

  if (!weather) {
    return <WeatherTableRows/>;
  } else {
    return (
        <div className={"weather-container"}>
          <nav className={"navbar-box2 navbar navbar-expand-lg navbar-light"}>
            <div className={"container-fluid"}>
              <a className={"navbar-brand"} href="#">
                <i className="icon far fa-snowflake fa-spin"></i>
              </a>
              <a className={"logo"}>Weather_Drills...</a>
              <div
                  className={"admin collapse navbar-collapse ms-auto mb-2"}
                  id="navbarTogglerDemo02">
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
                    <Link to={'/'}>
                      <button className={"btn btn-outline-light"}>
                        <i className="fas fa-sign-out-alt"></i>&nbsp;Logout
                      </button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className={"table-box"}>
            <div>
              <form className="input-box d-flex" onSubmit={handleSubmit(onSubmit)}>
                <p className={'filter'}>Filter : </p>
                <div className="d-flex">
                  <input type="date" name={'search'} ref={register} className="form-container form-control"/>
                </div>
                <div className={'search-btn'}>
                  <button type="button" className="search-btn2 btn btn-primary">
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </form>
            </div>
            <table className="t-box table">
              <thead className={"t-body"}>
              <tr className={"table-header"}>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">City Name</th>
                <th scope="col">Date</th>
                <th scope="col">Time</th>
                <th scope="col">Temperature [ °C ]</th>
                <th scope="col">Temperature [ °F ]</th>
                <th scope="col">Winds [Km/h]</th>
                <th scope="col">Humidity [ % ]</th>
              </tr>
              </thead>
              <tbody className={"t-tr t-body table-hover"}>
              {weather.map((item, i) =>
                  item.date === date ? (
                      <tr obj={item} key={i}>
                        <td>{console.log("true")}</td>
                        <td></td>
                        <td>
                          {item.tempCelcius <= 50 ? (
                              item.tempCelcius <= 20 && item.tempCelcius >= 0 ? (
                                  <i className="fas fa-snowflakes snow"></i>
                              ) : (
                                  <i className="fas fa-clouds cloud"></i>
                              )
                          ) : (
                              <i className="fas fa-sun sun"></i>
                          )}
                        </td>
                        <td>{item.city}</td>
                        <td>{item.date}</td>
                        <td>{item.time}</td>
                        <td>{item.tempCelcius}</td>
                        <td>{item.tempFahreinheit}</td>
                        <td>{item.windspeed}</td>
                        <td>{item.humidity}</td>
                      </tr>
                  ) : (
                       <tr obj={item} key={i}>
                         <td></td>
                         <td>
                           {item.tempCelcius <= 50 ? (
                               item.tempCelcius <= 20 && item.tempCelcius >= 0 ? (
                                   <i className="fas fa-snowflakes snow"></i>
                               ) : (
                                   <i className="fas fa-clouds cloud"></i>
                               )
                           ) : (
                               <i className="fas fa-sun sun"></i>
                           )}
                         </td>
                         <td>{item.city}</td>
                         <td>{item.date}</td>
                         <td>{item.time}</td>
                         <td>{item.tempCelcius}</td>
                         <td>{item.tempFahreinheit}</td>
                         <td>{item.windspeed}</td>
                         <td>{item.humidity}</td>
                       </tr>
                  )
              )}
              </tbody>
            </table>
          </div>
        </div>
    );
  }
};

export default ViewWeather;
