import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="h-100 w-100">
      <div className="container h-100 border d-flex border justify-content-center align-items-center">
        <div className="row rowWidth justify-content-center align-items-center  h-100  border">
          <div className="col-lg-6 col-12  p-0 d-flex align-items-between colHeight">
            {" "}
            <Link
              className="circle img1 d-flex justify-content-center align-items-center "
              to="/projects">
              <h1 className="text-danger textScale"> Portfolio </h1>
            </Link>
          </div>
          <h1 className="text-right col-lg-6 col-12 mobile">Portfolio</h1>

          <h1 className=" col-lg-6 col-12 m-auto mobile">About Eric</h1>
          <div className="col-lg-6 col-12 p-0 d-flex flex-row-reverse colHeight">
            <Link
              className="circle img2 d-flex justify-content-center align-items-center "
              to="/about">
              <h1 className="text-danger"> About Eric </h1>
            </Link>
          </div>

          <div className="col-lg-6 col-12 p-0 d-flex  colHeight">
            <Link
              className="circle img3 d-flex justify-content-center align-items-center "
              to="/contact">
              <h1 className="text-danger"> Contact </h1>
            </Link>
          </div>
          <h1 className="text-center col-lg-6 col-12 m-auto mobile">Contact</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
