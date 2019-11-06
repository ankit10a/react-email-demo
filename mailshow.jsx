import React, { Component } from "react";
class MailShow extends Component {
  handleReply = () => {
    this.props.handleview(8);
  };
  render() {
    const { mail } = this.props;
    let a = mail.text.split("\n");
    return (
      <div className="row bg-light border">
        <div className="col-2">
          <div>From</div>
          <div>To</div>
          <div>Subject</div>
          <div>Message</div>
        </div>
        <div className="col-10">
          <div>{mail.from}</div>
          <div>{mail.to}</div>
          <div>{mail.subject}</div>
          <div>
            {a.map(n => (
              <div key={n}>{n}</div>
            ))}
          </div>
        </div>
        <div className="row m-2">
          <button className="btn btn-secondary" onClick={this.handleReply}>
            Reply
          </button>
        </div>
      </div>
    );
  }
}

export default MailShow;
