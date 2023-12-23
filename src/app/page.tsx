"use client"


import { Chat } from "./components/bot"
import Footer from "./components/footer"
import Photo from "./components/home/photos"
import Step from "./components/home/steps"



export default function Home() {
  return (
    <>
       <Step></Step>
      <Photo></Photo>
      <Footer></Footer>
      <Chat/>

    </>

  )
}
