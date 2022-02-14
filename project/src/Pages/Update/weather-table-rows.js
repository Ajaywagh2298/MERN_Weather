import "../css/error.css";
import {useEffect} from "react";

function WeatherTableRows() {
    // render() {
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("Invalid url!");
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={"error"}>
            <div
                className="d-flex justify-content-center align-items-center"
                id="main"
            >
                <div className="inline-block align-middle">
                    <p className="err-msg font-weight-normal lead" id="desc">
                        Pleses wait some time....{" "}
                    </p>
                    <div className={"pro-box"}>
                        <div className={"progress"}>
                            <div className={"progress-value"}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    //}
}

export default WeatherTableRows;
