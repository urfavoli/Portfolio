import React from 'react';

const ResumePage = () => {
  return (
    <article className="page-article active" data-page="resume">
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      {/* Your Resume content goes here */}
      <section>
            <h3>Education & Experience</h3>
            <div className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <ion-icon name="book-outline"></ion-icon>
                    </div>
                    <h3 className="h3">Education</h3>
                </div>
                <ol className="timeline-list">
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">University Name</h4>
                        <span>2015 — 2019</span>
                        <p className="timeline-text">
                            Bachelor of Science in Computer Science.
                        </p>
                    </li>
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Another Degree</h4>
                        <span>2013 — 2015</span>
                        <p className="timeline-text">
                            Associate's Degree in Something.
                        </p>
                    </li>
                </ol>
            </div>
            <div className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <ion-icon name="briefcase-outline"></ion-icon>
                    </div>
                    <h3 className="h3">Experience</h3>
                </div>
                <ol className="timeline-list">
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Senior Front-end Developer</h4>
                        <span>2022 — Present</span>
                        <p className="timeline-text">
                            Developed and maintained user interfaces for web applications, collaborating with design and backend teams.
                        </p>
                    </li>
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Junior Developer</h4>
                        <span>2019 — 2021</span>
                        <p className="timeline-text">
                            Assisted in the development of various web projects and learned industry best practices.
                        </p>
                    </li>
                </ol>
            </div>
        </section>
        <section>
            <h3 className="h3 skills-title">My Skills</h3>
            <ul className="skills-list">
                <li className="skills-item">
                    <div className="title-wrapper">
                        <h5 className="h5">Web Design</h5>
                        <data value="80">80%</data>
                    </div>
                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{width: '80%'}}></div>
                    </div>
                </li>
                <li className="skills-item">
                    <div className="title-wrapper">
                        <h5 className="h5">React.js</h5>
                        <data value="90">90%</data>
                    </div>
                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{width: '90%'}}></div>
                    </div>
                </li>
                <li className="skills-item">
                    <div className="title-wrapper">
                        <h5 className="h5">Next.js</h5>
                        <data value="85">85%</data>
                    </div>
                    <div className="skill-progress-bg">
                        <div className="skill-progress-fill" style={{width: '85%'}}></div>
                    </div>
                </li>
                {/* Add more skills as needed */}
            </ul>
        </section>
    </article>
  );
};

export default ResumePage;ww