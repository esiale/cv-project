import React, { Component } from 'react';
import GeneralOverview from './GeneralOverview';

class General extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: '',
      email: '',
      phone: '',
      mode: 'edit',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      mode: 'view',
    });
  };

  edit = (e) => {
    this.setState({
      mode: 'edit',
    });
  };

  render() {
    const edit = this.state.mode === 'edit';

    return (
      <div className="general">
        {edit ? (
          <form onSubmit={this.onSubmitTask}>
            <div className="group1">
              <label htmlFor="fullname">Full name</label>
              <input
                type="text"
                name="fullname"
                onChange={this.handleChange}
                value={this.state.fullname}
                placeholder="John Smith"
                required
              />
            </div>
            <div className="group2">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
                placeholder="john@gmail.com"
                required
              />
            </div>
            <div className="group3">
              <label htmlFor="phone">Phone number</label>
              <input
                type="number"
                name="phone"
                onChange={this.handleChange}
                value={this.state.phone}
                placeholder="5555551234"
                required
              />
            </div>
            <div className="buttons-group">
              <button type="submit">Done</button>
            </div>
          </form>
        ) : (
          <div>
            <GeneralOverview data={this.state} />
            <button onClick={this.edit}>Edit</button>
          </div>
        )}
      </div>
    );
  }
}

export default General;
