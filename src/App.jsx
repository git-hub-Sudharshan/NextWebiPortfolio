import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import './App.css'

// Lazy load components
const MainLayout = lazy(() => import("./layouts/mainLayout"));
const Home = lazy(() => import("./pages/home"));
const BlogList = lazy(() => import("./pages/BlogList"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));
const NotFound = lazy(() => import("./errors/error"));

const App = () => {
  return (
    // Suspense fallback UI while loading
    <Suspense fallback={
<div class="unique-spinner-wrapper">

  <div class="unique-spinner-square">
    <div class="unique-square-1 unique-square"></div>
    <div class="unique-square-2 unique-square"></div>
    <div class="unique-square-3 unique-square"></div>
  </div>
</div>
}>
        {navigation.state === "loading" && <div className="loading-overlay">Loading...</div>}
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
