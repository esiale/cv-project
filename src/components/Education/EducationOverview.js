const EducationOverview = (props) => {
  const { school, degree, startDate, endDate } = props.data;
  return (
    <div>
      <h3>{school}</h3>
      <p>{degree}</p>
      <p>
        {startDate} - {endDate}
      </p>
    </div>
  );
};

export default EducationOverview;
