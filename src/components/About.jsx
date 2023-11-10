import React from "react";
import Fact from "./Fact";
import profile from "../assets/img/profile-img.jpg";
import Skills from "./Skills";
import  HeroBg from "src/assets/img/hero-bg.jpg"

export default function About() {
    const aboutData1 = "UI/UX Designer &amp; Web Developer.";
    const aboutData2 = [
        {
            Birthday: "1 May 1995",
            Website: "www.example.com",
            Phone: "+123 456 7890",
            City: "New York, USA",
        },
    ];
    const aboutData3 = [
        {
            Age: "30",
            Degree: "Master",
            PhEmailone: "email@example.com",
            Freelance: "Available",
        },
    ];

    return (
        <>
            <section id="about" className="about">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>About</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={profile} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content">
                            <h3>{aboutData1}</h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <div className="row">
                                {aboutData2.map((data, index) => (
                                    <div className="col-lg-6" key={index}>
                                        <ul>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>{data.Birthday}</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>{data.Website}</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>{data.Phone}</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>{data.City}</span></li>
                                        </ul>
                                    </div>
                                ))};
                                {aboutData3.map((data, index) => (
                                    <div className="col-lg-6" key={index}>
                                        <ul>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>{data.Age}</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>{data.Degree}</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>{data.PhEmailone}</span></li>
                                            <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>{data.Freelance}</span></li>
                                        </ul>
                                    </div>
                                ))}
                            </div>
                            <p>
                                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                                Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            <section id="facts" className="facts">
                <div className="container" data-aos="fade-up">
                    <Fact />
                </div>
            </section>

            <section id="skills" className="skills section-bg">
                <div className="container" data-aos="fade-up">
                    <div class="section-title">
                        <h2>Skills</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <Skills />
                    <div className="col-lg-6"></div>


                </div>
            </section>
        </>
    )
}