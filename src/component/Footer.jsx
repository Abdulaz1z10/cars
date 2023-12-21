import React, { Component } from "react";

export default class Footer extends Component {
render() {
    const { footer } = this.props;
    return (
    <div className="Footer">
        <h4>{footer}</h4>
    </div>
    );
}
}
