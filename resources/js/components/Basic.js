import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button } from "reactstrap";

export default class Basic extends Component {
    constructor() {
        super();
        this.state = {
            // Zone1: This to define variables
        };
    }
    // Zone2: This to define the methods

    render() {
        // Zone3: This to define visual element
        return (
            <div>
                <Button color="primary" outline> Add Post </Button>
            </div>
        );
    }
}

if (document.getElementById('basic')) {
    ReactDOM.render(<Basic />, document.getElementById('basic'));
}
