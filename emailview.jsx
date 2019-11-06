import React, { Component } from "react";

class EmailView extends Component {
  state = {};
  handlechange = e => {
    const { currentTarget: input } = e;
    const { email } = this.props;
    email[input.name].select = input.checked;
    this.props.handleselectemails();
  };
  handlerow = index => {
    const { email } = this.props;
    this.props.handleFullView(email[index]);
  };
  render() {
    return (
      <div>
        {this.props.email.map((n, ind) => (
          <div className="row border bg-light" key={ind}>
            <div className="col-1">
              <input
                type="checkbox"
                value={n.select}
                checked={n.select}
                onChange={this.handlechange}
                name={ind}
              />
            </div>
            <div className="col-3 ">
              {n.from === "jack@test.com" ? "me" : n.from}
            </div>
            <div className="col-4 text-truncate">{n.subject}</div>
            <div
              className="col-4 text-truncate"
              onClick={() => this.handlerow(ind)}
            >
              {n.text}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default EmailView;
