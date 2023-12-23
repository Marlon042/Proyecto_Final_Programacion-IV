"use client";
import MyTypingComponent from "../components/register/autoWritter";
import Register from "../components/register/registerUnits";

import StatsSection from "../components/register/stats";


export default function RegistroP(params: any) {
  return (
    <>
      <StatsSection />
      <MyTypingComponent />
      <Register/>
    </>
  );
}
