import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Cars extends Component {
  state = {
    cars: [
      {
        id: 1,
        name: "Gentra",
        price: "$10000",
        color: "black",
        year: "2022",
        position: "3",
        number: 777,
      },
      {
        id: 2,
        name: "Cobalt",
        price: "$8000",
        color: "White",
        year: "2020",
        position: "2",
        number: 333,
      },
      {
        id: 3,
        name: "Monza",
        price: "$19000",
        color: "Grey",
        year: "2023",
        position: "3",
        number: "070",
      },
    ],
  };
  render() {
    const { cars } = this.state
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-10 offset-1">
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <td>T/R</td>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Color</td>
                  <td>Year</td>
                  <td>Position</td>
                  <td>Number</td>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cars.map((item, index)=>{
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.color}</td>
                        <td>{item.year}</td>
                        <td>{item.position}</td>
                        <td>{item.number}</td>
                        <td>
                          <Link to={`/home/${index}`} className="btn btn-info">Open</Link>
                        </td>
                      </tr>
                    );
                  })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
