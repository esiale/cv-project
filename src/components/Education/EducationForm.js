import React, { useState } from 'react';
import EducationOverview from './EducationOverview';

const EducationForm = (props) => {
  const [values, setValues] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
  });

  const [mode, setMode] = useState('edit');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const onSubmitTask = (e) => {
    e.preventDefault();
    setMode('view');
  };

  const edit = (e) => {
    setMode('edit');
  };

  const editCheck = mode !== 'view';
  const { onDelete, id } = props;

  return (
    <div className="education">
      {editCheck ? (
        <form onSubmit={onSubmitTask}>
          <div className="group1">
            <label htmlFor="school">School name</label>
            <input
              type="text"
              name="school"
              onChange={handleChange}
              value={values.school}
              placeholder="Harvard University"
              required
            />
          </div>
          <div className="group2">
            <label htmlFor="text">Degree</label>
            <input
              type="text"
              name="degree"
              onChange={handleChange}
              value={values.degree}
              placeholder="Computer Science"
              required
            />
          </div>
          <div className="group3">
            <label htmlFor="startDate">Start date</label>
            <input
              type="text"
              name="startDate"
              onChange={handleChange}
              value={values.startDate}
              placeholder="mm/YYYY"
            />
          </div>
          <div className="group4">
            <label htmlFor="endDate">End date</label>
            <input
              type="text"
              name="endDate"
              onChange={handleChange}
              value={values.endDate}
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
          <EducationOverview data={values} />
          <button onClick={edit}>Edit</button>
          <button onClick={() => onDelete(id)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default EducationForm;
