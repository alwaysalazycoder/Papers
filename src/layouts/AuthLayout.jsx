import React from "react";
import { Route, Routes } from "react-router-dom";
import { route } from "../routes";

const AuthLayout = () => {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "auth") {
        return <Route path={prop.path} element={prop.component} key={key} />;
      } else {
        return null;
      }
    });
  };


  return (

    <div className=" w-full h-full m-0 p-1 bg-[url('https://static.vecteezy.com/system/resources/previews/005/309/784/non_2x/online-exam-in-mobile-smartphone-app-online-test-opinion-checklist-online-education-questionnaire-form-survey-metaphor-answering-internet-quiz-homework-assignment-computer-test-and-examination-free-vector.jpg')] bg-cover bg-center bg-no-repeat   ">
      <div className="mx-4 my-[10vh]  border-4  border-light-blue rounded-[15px] shadow-[1px_1px_5px_black] ">

        <Routes>{getRoutes(route)}
        </Routes>
      </div>
    </div>

  );
};

export default AuthLayout;