import './AppStyle.css'
import Footer from "./footer/footer";
import {Route, Routes} from "react-router-dom";
import MainContainer from "./main/mainContaner";
import LoginContainer from "./login/loginContainer";
import OneModelFunc from "./oneModel/oneModelFunc";
import HeaderContainer from "./header/headerContainer";
import OneModelReductContainer from "./oneModelRrduct/oneModelReductContainer";
import AddModelContainer from "./addModel/addModelContainer";

function App() {
  return (
      <div className="markup">
          <HeaderContainer/>
              <Routes>
                  <Route path="/" element={<MainContainer/>}/>
                  <Route path="/login" element={<LoginContainer/>}/>
                  <Route path="/model/:modelId" element={<OneModelFunc/>}/>
                  <Route path="/:modelId/reduction" element={<OneModelReductContainer/>}/>
                  <Route path={"/addmodel"} element={<AddModelContainer/>}/>
              </Routes>
          <Footer/>
      </div>
  );
}

export default App;
