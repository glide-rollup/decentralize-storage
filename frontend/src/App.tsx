import {Suspense, useEffect} from 'react';
import {BrowserRouter, Navigate, Outlet, Route, Routes, useNavigate} from 'react-router-dom';
import {useAccount} from "wagmi";
import Home from "./pages/Home";
import MyFilesLayout from "./pages/myFiles/MyFilesLayout";
import Error404 from "./pages/Error404";
import Favorite from "./pages/myFiles/Favorite";
import FilesList from "./pages/myFiles/FilesList";
import Settings from "./pages/myFiles/Settings";

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
            <Route path="/" element={<Home/>}/>

            <Route element={<ProtectedRoute/>}>
              <Route path="/my" element={<MyFilesLayout/>}>
                <Route path="" element={<FilesList/>}/>
                <Route path="favorite" element={<Favorite/>}/>
                <Route path="settings" element={<Settings/>}/>
              </Route>
            </Route>

            <Route path='*' element={<Error404/>}/>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
