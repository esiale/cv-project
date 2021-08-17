import React, { Component } from 'react';
import EducationForm from './EducationForm';
import uniqid from 'uniqid';

class Education extends Component {
  constructor() {
    super();

    this.state = {
      list: ['default'],
    };
  }

  handleDelete = (itemId) => {
    const updatedList = this.state.list.filter((item) => item !== itemId);
    this.setState({
      list: updatedList,
    });
    console.log(itemId, updatedList, this.state.list);
  };

  handleAddMore = () => {
    this.setState({
      list: [...this.state.list, uniqid()],
    });
  };

  render() {
    const { list } = this.state;
    return (
      <div>
        {list.map((id) => (
          <EducationForm key={id} id={id} onDelete={this.handleDelete} />
        ))}
        <button onClick={this.handleAddMore}>Add More</button>
      </div>
    );
  }
}

export default Education;
