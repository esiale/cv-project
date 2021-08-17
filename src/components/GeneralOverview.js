const GeneralOverview = (props) => {
  const { fullname, email, phone } = props.data;
  console.log(props);
  return (
    <div>
      <h2>General Information</h2>
      <h3>Name:</h3>
      <p>{fullname}</p>
      <h3>E-mail:</h3>
      <p>{email}</p>
      <h3>Phone</h3>
      <p>{phone}</p>
    </div>
  );
};

export default GeneralOverview;
