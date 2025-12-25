import { Link } from "react-router";

function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-green-500 text-white p-4">
      <ul className="flex justify-center">
        <Link to="/add">
          <li>Add +</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
