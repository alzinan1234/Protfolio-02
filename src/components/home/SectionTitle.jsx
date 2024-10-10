const SectionTitle = (props) => {
  const { align } = props;
  return (
    <>
      <div className={align}>
        <div className="py-10">
          <h4 className="primary text-xl font-medium pb-2">MY SERVICES</h4>
          <h2 className="secondary text-3xl font-medium">
            Provide Wide Range of <br /> Digital Services
          </h2>
        </div>
      </div>
    </>
  );
};

export default SectionTitle;
