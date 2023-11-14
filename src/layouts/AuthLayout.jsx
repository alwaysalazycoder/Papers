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
    <>

      <div className=" w-full h-[calc(100%-36px)] relative m-0 p-1 blur-[3px] bg-[url('https://static.vecteezy.com/system/resources/previews/005/309/784/non_2x/online-exam-in-mobile-smartphone-app-online-test-opinion-checklist-online-education-questionnaire-form-survey-metaphor-answering-internet-quiz-homework-assignment-computer-test-and-examination-free-vector.jpg')] bg-cover bg-center bg-no-repeat   ">
      </div>
        <div className=" mx-4  absolute top-[15vh]  border-4  border-light-blue rounded-[15px] shadow-[10px_10px_25px_black] sm:w-1/2 sm:left-1/2 sm:translate-x-[-50%] ">

          <Routes>{getRoutes(route)}
          </Routes>
        </div>
    </>

  );
};

export default AuthLayout;