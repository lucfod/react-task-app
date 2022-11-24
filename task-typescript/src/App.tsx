import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoadingSuspense from "./containers/LoadingSuspense";

const Layout = lazy(() => import("./containers/Layout"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<LoadingSuspense p_allPage={true} />}>
          <Routes>
            <Route path="/*" element={<Layout />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
