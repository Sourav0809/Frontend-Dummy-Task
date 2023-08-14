import "./Header.css";
const Header = () => {
  return (
    <header className="header">
      <div className="header-container-1">
        <h2>Untitled UI</h2>
        <h2>Home</h2>
        <h2>Products</h2>
        <h2>Resource</h2>
        <h2>Pricing</h2>
      </div>

      <div className="header-container-2">
        <h2 className="log-in-btn">Log in</h2>
        <h2 className="signup-btn">Sign Up</h2>
      </div>
    </header>
  );
};

export default Header;
