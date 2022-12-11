import {Suspense, useEffect} from 'react';
import {BrowserRouter, Navigate, Outlet, Route, Routes, useNavigate} from 'react-router-dom';
import {useAccount} from "wagmi";
import Home from "./pages/Home";
import MyFiles from "./pages/MyFiles";
import Error404 from "./pages/Error404";

export default function App() {
  const {isConnected} = useAccount();

  // useAccount({
  //   onDisconnect() {
  //     console.log(`-`);
  //   },
  //   onConnect() {
  //     console.log(`+`);
  //   }
  // });

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
            <Route path="/" element={<Home/>}/>

            <Route element={<ProtectedRoute/>}>
              <Route path="/my" element={<MyFiles/>}/>
            </Route>

            <Route path='*' element={<Error404/>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
