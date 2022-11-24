import { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import LoadingSuspense from "./LoadingSuspense";
import Header from "../components/Header";
import Main from "../components/Main";
import Home from "../pages/Home";

function Layout() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex flex-row flex-1 h-screen overflow-hidden">
        <Suspense fallback={<LoadingSuspense />}>
          <Main>
            <Routes>
              <Route index element={<Home />} />
            </Routes>
          </Main>
        </Suspense>
      </div>
    </div>
  );
}

export default Layout;
