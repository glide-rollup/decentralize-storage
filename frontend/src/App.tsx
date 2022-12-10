import {Suspense} from 'react';
import {BrowserRouter, Navigate, Outlet, Route, Routes} from 'react-router-dom';
import {useAccount} from "wagmi";
import Home from "./pages/Home";
import MyFiles from "./pages/MyFiles";
import Error404 from "./pages/Error404";

export default function App() {
  const {isConnected} = useAccount();

  const ProtectedRoute = () => {
    if (!isConnected) {
      return <Navigate to="/" replace/>;
    }
    return <Outlet/>;
  };

  const loadingFallback = () => (
    <small>...</small>
  )

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={loadingFallback()}>
          <Routes>
            <Route exact path="/" element={<Home/>}/>

            <Route element={<ProtectedRoute/>}>
              <Route exact path="/my" element={<MyFiles/>}/>
            </Route>

            <Route path='*' element={<Error404/>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
