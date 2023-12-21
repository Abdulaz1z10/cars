import React, { Component } from "react";
import '../component/SingleCar.scss'
import img1 from '../assets/pngegg.png'
import img2 from '../assets/chevrolet_cobalt_34120.webp'
import img3 from '../assets/chevrolet_monza_1138642.jpg'


export default class SingleCar extends Component {
  state = {
    cars: [
      {
        img: img1,
        id: 1,
        name: "Gentra",
        price: "$10000",
        color: "black",
        year: "2022",
        position: "3",
        number: 777,
      },
      {
        img: img2,
        id: 2,
        name: "Cobalt",
        price: "$8000",
        color: "White",
        year: "2020",
        position: "2",
        number: 333,
      },
      {
        img: img3,
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
    const url = window.location.href.split('/')
    let index = Number(url[4]);
    const { cars } = this.state
    return (
      <div className="container">
        <img src={cars[index].img} alt="img" />
        <h1>Name: {cars[index].name}</h1>
        <h1>Price: {cars[index].price}</h1>
        <h1>Color: {cars[index].color}</h1>
        <h1>Year: {cars[index].year}</h1>
        <h1>Position: {cars[index].position}</h1>
        <h1>Number: {cars[index].number}</h1>
      </div>
    );
  }
}
