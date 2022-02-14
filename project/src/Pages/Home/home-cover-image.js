import "../css/home-cover-image.css";

function HomeCoverImage() {
  const current = new Date();
  const hours =
      current.getHours() < 10 ? "0" + current.getHours() : current.getHours();
  const minutes =
      current.getMinutes() < 10
          ? "0" + current.getMinutes()
          : current.getMinutes();
  const second =
      current.getSeconds() < 10
          ? "0" + current.getSeconds()
          : current.getSeconds();
  const set = current.getHours() < 12 ? "AM" : "PM";
  const month =
      current.getMonth() < 10
          ? "0" + (current.getMonth() + 1)
          : current.getMonth() + 1;
  const date = `${current.getDate()}/${month}/${current.getFullYear()}`;
  var time = `${hours}.${minutes}.${second}   ${set}`;
  return (
      <div className={"image-box"}>
        <div className="container-fluid px-1 px-md-6 py-5 mx-auto">
          <div className="row d-flex justify-content-center px-3">
            <div className="card-img card-box">
            <span className={"logo3 text-centre"}>
              <i className="fad fa-cloud-sun"/>
            </span>
              <p className="ml-auto mr-4 mt-3 mb-6 text-centre">{date}</p>
              <p className="time ml-auto mr-4 mb-0 med-font">
                &nbsp;&nbsp;{time}
              </p>
              <p className="time-font mb-0 ml-4 mt-auto">
                <span className="sm-font"/>
              </p>
              <p className="date ml-7 mb-7"/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default HomeCoverImage;
