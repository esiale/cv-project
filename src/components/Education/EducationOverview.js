const EducationOverview = (props) => {
  const { school, degree, startYear, endYear } = props.data;
  return (
    <div>
      <h2>Education</h2>
      <h3>{school}</h3>
      <p>{degree}</p>
      <p>
        {startYear} - {endYear}
      </p>
    </div>
  );
};

export default EducationOverview;
