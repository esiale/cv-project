import React, { Component } from 'react';
import EducationOverview from './EducationOverview';

class EducationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      school: '',
      degree: '',
      startYear: '',
      endYear: '',
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
      <div>
        {editCheck ? (
          <form onSubmit={this.onSubmitTask}>
            <label htmlFor="school">School name</label>
            <input
              type="text"
              name="school"
              onChange={this.handleChange}
              value={this.state.school}
              placeholder="School name"
              required
            />
            <label htmlFor="text">Degree</label>
            <input
              type="text"
              name="degree"
              onChange={this.handleChange}
              value={this.state.degree}
              placeholder="Degree"
              required
            />
            <label htmlFor="startYear">Start year</label>
            <input
              type="number"
              name="startYear"
              onChange={this.handleChange}
              value={this.state.startYear}
              placeholder="YYYY"
              minLength="4"
              maxLength="4"
            />
            <label htmlFor="endYear">End year</label>
            <input
              type="text"
              name="endYear"
              onChange={this.handleChange}
              value={this.state.endYear}
              placeholder="YYYY or Present"
              minLength="4"
            />
            <button type="submit">Done</button>
            <button onClick={() => onDelete(id)}>Delete</button>
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
