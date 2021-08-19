const GeneralOverview = (props) => {
  const { fullName, email, phone } = props.data;
  return (
    <div>
      <h3>Name:</h3>
      <p>{fullName}</p>
      <h3>E-mail:</h3>
      <p>{email}</p>
      <h3>Phone:</h3>
      <p>{phone}</p>
    </div>
  );
};

export default GeneralOverview;
