import './AppStyle.css'
import Header from "./header/header";
import Footer from "./footer/footer";
import {Route, Routes} from "react-router-dom";
import MainContainer from "./main/mainContaner";
import LoginContainer from "./login/loginContainer";
import OneModel from "./oneModel/oneModel";

function App() {
  return (
      <div className="markup">
          <Header/>
              <Routes>
                  <Route path="/" element={<MainContainer/>}/>
                  <Route path="/login" element={<LoginContainer/>}/>
                  <Route path="/id" element={<OneModel/>}/>
                  <Route path="/reduction" element={<OneModel/>}/>
              </Routes>
          <Footer/>
      </div>
  );
}

export default App;
