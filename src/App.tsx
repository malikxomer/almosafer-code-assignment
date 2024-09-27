import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Loader from "./components/loader";

const Home = lazy(() => import("./pages/home"));
const Blog = lazy(() => import("./pages/blog"));

function App(): JSX.Element {
  return (
    <section className="app-main-container">
      <Suspense fallback={<Loader />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog/:blogId" element={<Blog />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </section>
  );
}

export default App;
