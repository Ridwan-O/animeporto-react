import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-row justify-between bg-[#acd0d1] sticky top-0">
      <h2 className="p-3">
        <a onClick={() => navigate("/")}>Yorushika</a>
      </h2>
      <ul className="flex flex-row gap-5 p-3">
        <a onClick={() => navigate("/top")}>
          <li>Top</li>
        </a>
        <a onClick={() => navigate("/news")}>
          <li>News</li>
        </a>
        <a onClick={() => navigate("/live")}>
          <li>Live</li>
        </a>
        <a onClick={() => navigate("/movie")}>
          <li>Movie</li>
        </a>
        <a onClick={() => navigate("/contact")}>
          <li>Contact</li>
        </a>
      </ul>
    </div>
  );
};

export default Header;
