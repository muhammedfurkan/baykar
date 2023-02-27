import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './App.css';
import Home from './components/Home';
import OPTIONS from "./particlesjs-config.json";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';

function App() {

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    <Router>
      <Particles id="tsparticles" init={particlesInit} options={OPTIONS}  />
      {/* <div className="flex flex-col min-h-screen overflow-hidden"> */}
          <Switch>
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
            <Route component={Home} path="/" />
          </Switch>
      {/* </div> */}
    </Router>
  )

}

export default App;
