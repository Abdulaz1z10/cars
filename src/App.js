import React, { Component } from "react";
import { Route, Routes,  } from "react-router-dom";
import Auth from "./component/Auth";
import Cars from "./component/Cars";
import SingleCar from "./component/SingleCar";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Section from "./component/Section";
// import Option1 from "./component/Option1";
// import SecondComponent from "./component/SecondComponent";
// import ThirdComponent from "./component/ThirdComponent";
// import FourthComponent from "./component/FourthComponent";
// import FifthComponent from "./component/FifthComponent";
// import Home from "./component/Home";

export default class App extends Component {
  render(){
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="cars" element={<Cars />} />
        <Route path="/home/:id" element={<SingleCar />} />
      </Routes>


    {/* task 3 */}
      <div className="w-100 h-100 d-flex flex-column justify-content-center align-items-center">
        <Header header={"header"} />
        <Section
          nav={"nav"}
          arr1={["Footer", "Nav", "Article"]}
          arr2={["Figure", "Figcaption"]}/>
        <Footer footer={"Footer"} />
      </div>
    </div>
  );
    // return (
    //   <div>
    //     <div className="col mt-4 mx-6">
    //       <div className="col-md-6 mx-3 d-flex gap-5">
    //         {/* <Link to="/" className="btn btn-info">
    //           Home
    //         </Link>
    //         <Link to="/first" className="btn btn-info">
    //           First
    //         </Link>
    //         <Link to="/second" className="btn btn-info">
    //           Second
    //         </Link>
    //         <Link to="/third" className="btn btn-info">
    //           Third
    //         </Link>
    //         <Link to="/fourth" className="btn btn-info">
    //           Four
    //         </Link>
    //         <Link to="/fifth" className="btn btn-info">
    //           Five
    //         </Link> */}

    //         <select className="px-5">
    //           <option className="px-5" to="/">
    //             Home
    //           </option>
    //           <option className="px-5" to="/first">
    //             Option 1
    //           </option>
    //           <option className="px-5" to="/second">
    //             Option 2
    //           </option>
    //           <option className="px-5" to="/third">
    //             Option 3
    //           </option>
    //           <option className="px-5" to="/fourth">
    //             Option 4
    //           </option>
    //           <option className="px-5" to="/fifth">
    //             OPtion 5
    //           </option>
    //         </select>
    //       </div>
    //     </div>
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="Option 1" element={<Option1 />} />
    //       <Route path="Option 2" element={<SecondComponent />} />
    //       <Route path="Option 3" element={<ThirdComponent />} />
    //       <Route path="Option 4" element={<FourthComponent />} />
    //       <Route path="Option 5" element={<FifthComponent />} />
    //     </Routes>
    //   </div>
    // );
  }
}
