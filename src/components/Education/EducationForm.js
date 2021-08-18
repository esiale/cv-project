import React, { Component } from 'react';
import EducationOverview from './EducationOverview';

class EducationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: '',
      degree: '',
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
      <div className="education">
        {editCheck ? (
          <form onSubmit={this.onSubmitTask}>
            <div className="group1">
              <label htmlFor="school">School name</label>
              <input
                type="text"
                name="school"
                onChange={this.handleChange}
                value={this.state.school}
                placeholder="Harvard University"
                required
              />
            </div>
            <div className="group2">
              <label htmlFor="text">Degree</label>
              <input
                type="text"
                name="degree"
                onChange={this.handleChange}
                value={this.state.degree}
                placeholder="Computer Science"
                required
              />
            </div>
            <div className="group3">
              <label htmlFor="startDate">Start date</label>
              <input
                type="text"
                name="startDate"
                onChange={this.handleChange}
                value={this.state.startDate}
                placeholder="mm/YYYY"
              />
            </div>
            <div className="group4">
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
            <EducationOverview data={this.state} />
            <button onClick={this.edit}>Edit</button>
            <button onClick={() => onDelete(id)}>Delete</button>
          </div>
        )}
      </div>
    );
  }
}

export default EducationForm;
