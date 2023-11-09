import React from "react";
import NameTitle from "./NameTitle";
import Sumary from "./Sumary";

export default function Resume() {

    return (
        <>
        <section id="resume" className="resume">
      <div className="container" data-aos="fade-up">
</div>
        <NameTitle />
        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>

<Sumary />

</div>
</div>
        </section>
        </>
    )
}