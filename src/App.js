import "./App.css";
import NavComponent from "./components/navComponent";
import FooterComponent from "./components/footerComponent";
import LatestComponent from "./components/latestComponent";
// import jumbotronComponent from "./components/jumbotronComponent";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App bg-dark">
      <NavComponent />
      <LatestComponent />
      <footer className="fixed-bottom">
        <FooterComponent />
      </footer>
    </div>
  );
}

export default App;
