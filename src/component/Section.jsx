import React, { Component } from "react";
import "./Section.scss";
export default class Section extends Component {
state = {
    item: [1, 2, 3],
};
render() {
const { arr1, arr2, nav } = this.props;
const { item } = this.state;
return (
    <div className="Section ">
        <div className="navbar">
        <h1 className="">{nav}</h1>
    </div>
    <div>
        {item.map((item) => {
            return (
            <div key={item} className="Section_menu">
            <div className="">
                {arr2.map((item, index) => {
                return (
                    <p key={index} className="Section_text ">
                        {item}
                    </p>
                    );
                })}
            </div>
            <div className="">
                {arr1.map((item, index) => {
                    return (
                    <p key={index} className="Section_text2 ">
                        {item}
                    </p>
                    );
                })}
            </div>
            </div>
            );
        })}
        </div>
    </div>
    );
}
}
