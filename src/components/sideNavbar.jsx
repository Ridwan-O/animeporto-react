import { useNavigate } from "react-router-dom";

function SideNavbar() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-6 p-4 text-center">
      <div>
        <h1>Menu</h1>
      </div>
      <div className="flex flex-col gap-2 text-center">
        <ul className="flex flex-col gap-2">
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
    </div>
  );
}

export default SideNavbar;
