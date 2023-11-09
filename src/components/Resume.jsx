import React from "react";
import NameTitle from "./NameTitle";
import Sumary from "./Sumary";
import Education from "./Education";
import Experience from "./Experience";

export default function Resume() {

  return (
    <>
      <section id="resume" className="resume">
        <div className="container" data-aos="fade-up">
        <NameTitle />
        <div className="row">
          <div className="col-lg-6">
            <Sumary />
            <Education />
            </div>
            <div class="col-lg-6">
            <Experience />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}