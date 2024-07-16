import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" className="logo" />
      <h1> Appointment System</h1>
    </nav>
  );
};

export default Navbar;
