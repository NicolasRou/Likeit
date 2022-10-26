import Logo from "./Logo";
import "./header.css";
import Social from "./Social";
import Nav from "./Nav";
import Login from "./Login";

function Header() {
  return (
    <>
      <Logo />
      <div className="flex justify-between">
        <Social />
        <Nav />
        <Login />
      </div>
    </>
  );
}

export default Header;
