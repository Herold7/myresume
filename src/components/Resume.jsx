import React from "react";
import Sumary from "./Sumary";
import Education from "./Education";
import Experience from "./Experience";

export default function Resume() {

  return (
    <>
      <section id="resume" className="resume">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Resume</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <Sumary />
              <Education />
            </div>
            <div className="col-lg-6">
              <Experience />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}