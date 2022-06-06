import { Route, Routes } from "react-router-dom";
import MainHome from "./page/Home/MainHome";
import BannerAd from "./page/Home/Sections/Nested/BannerAd";
import Native from "./page/Home/Sections/Nested/Native";
import PopUnder from "./page/Home/Sections/Nested/PopUnder";
import Navbar from "./page/sharedfile/Navbar";
import Skim from "./page/Home/Sections/Nested/Skim";
import Footer from "./page/sharedfile/Footer";
import NotFound from "./page/404 page/NotFound";

function App() {
  return (
    <div className=" max-w-[1600px] mx-auto">
      <Navbar/>
      <Routes>
      <Route path="/" element={<MainHome/>}>
      <Route index element={<PopUnder/>} />
      <Route path="banner" element={<BannerAd />} />
        <Route path="native" element={<Native />} />
        <Route path="skim" element={<Skim/>} />
        </Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer></Footer>
    </div>
  );
}

export default App;
