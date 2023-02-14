import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

function NavButton() {
  return (
    <NavLink to="/coctail">
      <Button variant="primary">Search</Button>
    </NavLink>
  );
}

export default NavButton;
