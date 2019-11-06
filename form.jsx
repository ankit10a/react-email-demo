import React, { Component } from "react";
class ComposeForm extends Component {
  state = {
    data: {
      to: "",
      subject: "",
      text: "",
      folder: "Sent",
      sent: true,
      from: "jack@test.com"
    },
    txt: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.submit(this.state.data);
  };
  handlechange = ({ currentTarget: input }) => {
    const { data } = this.state;
    data[input.id] = input.value;
    this.setState({ data });
  };
  render() {
    let { data, txt } = this.state;
    const { mode, mail } = this.props;
    if (mode && txt === "") {
      data.to = mail.from;
      data.from = mail.to;
      data.subject = "Re :" + data.subject + mail.subject;
      data.text = data.text + "\n" + mail.text;
      this.setState({ txt: "mot" });
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="to">To</label>
            <input
              type="text"
              id="to"
              value={data.to}
              onChange={this.handlechange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              value={data.subject}
              onChange={this.handlechange}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="text">Message</label>
            {txt ? (
              <textarea
                type="textarea"
                rows="5"
                id="text"
                value={data.text}
                onChange={this.handlechange}
                className="form-control"
              />
            ) : (
              <input
                type="textarea"
                rows="5"
                id="text"
                value={data.text}
                onChange={this.handlechange}
                className="form-control"
              />
            )}
          </div>
          <button className="btn btn-primary">Send</button>
        </form>
      </div>
    );
  }
}

export default ComposeForm;
