import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./Header";
import ManageHeader from "./ManageHeader";
import HomeLayout from "./layouts/HomeLayout";
import AuthLayout from "./layouts/AuthLayout";

function App() {


  return (
    <div className="w-screen h-screen ">
    <ManageHeader>
    <Header />
    </ManageHeader>
      <Routes>
        <Route path="/home/*" element={<HomeLayout />} />
        <Route path="/auth/*" element={<AuthLayout />} />

        <Route path="/" element={<Navigate to="/home/main" />} />

        <Route path="/home" element={<Navigate to="/home/main" />} />
        <Route path="/auth" element={<Navigate to="/auth/login" />} />

      </Routes>
    </div>
  );
}

export default App;
