import React from "react";
export default class CreateButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }
    
    render() {
        let inscription = !!this.props.inscription?this.props.inscription:'';
        console.log("props", this.props);
        console.log("state", this.state);
        return (            
            <button onClick={this.props.onClick} className={this.props.className}>
               {inscription}
            </button>
        )
    }
}