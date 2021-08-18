import React, { Component } from 'react';
import './styles/style.css';
import FormHandler from './components/FormHandler';
import General from './components/General/GeneralForm';
import EducationForm from './components/Education/EducationForm';
import ExperienceForm from './components/Experience/ExperienceForm';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Resume generator</h1>
        <h2>General information</h2>
        <General />
        <h2>Education</h2>
        <FormHandler Form={EducationForm} />
        <h2>Work experience</h2>
        <FormHandler Form={ExperienceForm} />
      </div>
    );
  }
}

export default App;
