import Yorushika from "../assets/yorushika.jpg";

function Main() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-8">
      <img src={Yorushika} alt="" className="w-72" />
      <h1 className="text-4xl">YORUSHIKA</h1>
    </div>
  );
}

export default Main;
