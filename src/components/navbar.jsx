import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row justify-between">
      <h2 className="p-3">Yorushika</h2>
      <ul className="flex flex-row gap-5 p-3">
        <a onClick={() => navigate("./top")}>
          <li>Top</li>
        </a>
        <a>
          <li>News</li>
        </a>
        <a>
          <li>Live</li>
        </a>
        <a>
          <li>Movie</li>
        </a>
        <a>
          <li>Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default Header;
