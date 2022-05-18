import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/CakeStore";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreameContainer from "./components/IceCreameContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import ItemContainer from "./components/ItemContainer";
// import UserContainer from "./components/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreameContainer />
        <NewCakeContainer />
        <ItemContainer />
        {/* <UserContainer /> */}
      </div>
    </Provider>
  );
}

export default App;
