export default function Navbar() {
  return (
    <nav id="navbar">
      <div id="navbar_content">
        <img id="navbar_logo_desktop" src="/reviewboat_logo_nav.svg" alt="ReviewBoat Logo" height="40" />
        <img id="navbar_logo_mobile" src="/reviewboat_logo.svg" alt="ReviewBoat Logo" height="40" />
        <div id="navbar-options">
          <a href="#how-it-works">How it works</a>
          <a href="#publishers">Publishers</a>
          <a href="#retailers">Retailers</a>
        </div>
      </div>
    </nav>
  );
}
