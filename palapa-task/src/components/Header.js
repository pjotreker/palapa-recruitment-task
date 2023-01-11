import '../App.css';

function Header() {
  return (
        <div
          className="App-sign-in-window-header"
        >
            <div className="App-header-logo-picture-holder">
              <img className="App-header-logo-picture" alt="palapa-logo" src="../logo.png" />
            </div>
            <div className="App-header-headline">
                <a className="App-header-headline-text">Sign in to your account</a>
            </div>
        </div>
  );
}

export default Header;
