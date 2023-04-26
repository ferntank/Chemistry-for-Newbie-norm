import React from "react";

export default class ConfirmButton extends React.Component {
    props: any;
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
        <React.Fragment>
            <a href={this.props.href} style={{
                backgroundColor: "#212121",
                height: "auto",
                width: "auto",
                borderRadius: String(0.5 * this.props.size * .75) + "vh",
                fontSize: String(2 * this.props.size) + "vh",
                paddingLeft: String(2.5 * this.props.size * .75) + "vh",
                paddingRight: String(2.5 * this.props.size * .75) + "vh",
                paddingTop: String(1 * this.props.size * .75) + "vh",
                paddingBottom: String(1 * this.props.size * .75) + "vh",
                textDecoration: "none",
                color: "#eeeeee"
            }}>
                {this.props.text}
            </a>
        </React.Fragment>
        )
    }
}