import { Link, Outlet } from "react-router-dom";

export default function DashBoard() {
  return (
    <div>
      <h2>DashBoard</h2>
      <nav>
        <ul>
          <li><Link to="profile">Profile</Link></li>
          <li><Link to="setting">Setting</Link></li>
        </ul>
      </nav>
      <hr></hr>
      <Outlet/>
    </div>

  );
}