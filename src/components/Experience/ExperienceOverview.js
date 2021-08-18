const EducationOverview = (props) => {
  const { company, position, maintasks, startDate, endDate } = props.data;
  return (
    <div>
      <h3>{company}</h3>
      <p>{position}</p>
      <p>
        {startDate} - {endDate}
      </p>
      <p>{maintasks}</p>
    </div>
  );
};

export default EducationOverview;
