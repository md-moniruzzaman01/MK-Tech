import { Route, Routes } from "react-router-dom";
import MainHome from "./page/Home/MainHome";
import Navbar from "./page/sharedfile/Navbar";

function App() {
  return (
    <div className=" max-w-[1600px] mx-auto">
      <Navbar/>
      <Routes>
      <Route path="/" element={<MainHome/>}/>
      
    </Routes>
    </div>
  );
}

export default App;
