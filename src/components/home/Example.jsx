import SectionTitle from "./SectionTitle";

const Example = () => {
  return (
    <>
      <div className="maxWidth mx-auto mt-10">
        <SectionTitle align={"text-center"} />
        <div className="mt-6 mb-7">
          <ul className="flex justify-center items-center gap-8 secondary">
            <li>All</li>
            <li>Branding</li>
            <li>Photography</li>
            <li>Fashion</li>
            <li>Product</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Example;
