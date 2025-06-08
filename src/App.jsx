import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import ScrollToTop from "./commonComponents/scrollToTop";
import RefreshLoader from "./commonComponents/refreshLoader";
import "./App.css";
import SplashCursor from "./commonComponents/cursor";


// Lazy load components
const MainLayout = lazy(() => import("./layouts/mainLayout"));
const Home = lazy(() => import("./pages/home"));
const BlogList = lazy(() => import("./pages/BlogList"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const NotFound = lazy(() => import("./errors/error"));

const App = () => {
  return (
    // Suspense fallback UI while loading
    <Suspense fallback={<RefreshLoader />}>
      <ScrollToTop />
      <SplashCursor/>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="bloglist" element={<BlogList />} />
          <Route path="blog/:slug" element={<BlogDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
