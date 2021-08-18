import React, { Component } from 'react';
import ExperienceOverview from './ExperienceOverview';

class ExperienceForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: '',
      position: '',
      maintasks: '',
      startDate: '',
      endDate: '',
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
    const { mode } = this.state;
    const { onDelete, id } = this.props;

    const editCheck = mode === 'edit';

    return (
      <div className="experience">
        {editCheck ? (
          <form onSubmit={this.onSubmitTask}>
            <div className="group1">
              <label htmlFor="school">Company name</label>
              <input
                type="text"
                name="company"
                onChange={this.handleChange}
                value={this.state.company}
                placeholder="Google"
                required
              />
            </div>
            <div className="group2">
              <label htmlFor="text">Position</label>
              <input
                type="text"
                name="position"
                onChange={this.handleChange}
                value={this.state.position}
                placeholder="Junior full-stack developer"
                required
              />
            </div>
            <div className="group3">
              <label htmlFor="text">Main tasks</label>
              <input
                type="text"
                name="maintasks"
                onChange={this.handleChange}
                value={this.state.maintasks}
                placeholder="Games and stuff"
                required
              />
            </div>
            <div className="group4">
              <label htmlFor="startDate">Start date</label>
              <input
                type="text"
                name="startDate"
                onChange={this.handleChange}
                value={this.state.startDate}
                placeholder="mm/YYYY"
              />
            </div>
            <div className="group5">
              <label htmlFor="endDate">End date</label>
              <input
                type="text"
                name="endDate"
                onChange={this.handleChange}
                value={this.state.endDate}
                placeholder="mm/YYYY or Present"
              />
            </div>
            <div className="buttons-group">
              <button type="submit">Done</button>
              <button onClick={() => onDelete(id)}>Delete</button>
            </div>
          </form>
        ) : (
          <div>
            <ExperienceOverview data={this.state} />
            <button onClick={this.edit}>Edit</button>
            <button onClick={() => onDelete(id)}>Delete</button>
          </div>
        )}
      </div>
    );
  }
}

export default ExperienceForm;
