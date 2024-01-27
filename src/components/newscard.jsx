const Newscard = ({ title, desc }) => {
  return (
    <div className="flex p-2 mx-3 rounded-lg flex-rows bg-secondary">
      <div className="p-5">
        <h1>{title}</h1>
      </div>
      <div className="my-auto text-center bg-red-400 p-auto">
        <p className="">{desc}</p>
      </div>
    </div>
  );
};
export default Newscard;
