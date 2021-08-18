import React, { Component } from 'react';
import uniqid from 'uniqid';

class FormHandler extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [uniqid()],
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
    const { Form } = this.props;
    return (
      <section>
        {list.map((id) => (
          <Form key={id} id={id} onDelete={this.handleDelete} />
        ))}
        <button className="add-more-btn" onClick={this.handleAddMore}>
          Add More
        </button>
      </section>
    );
  }
}

export default FormHandler;
