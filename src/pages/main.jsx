import Yorushika from "../assets/yorushika.jpg";

function Main() {
  return (
    <div className="h-screen flex flex-col gap-8 justify-center items-center">
      <img src={Yorushika} alt="" className="w-72" />
      <h1 className="text-4xl">YORUSHIKA</h1>
    </div>
  );
}

export default Main;
