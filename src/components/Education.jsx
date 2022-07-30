import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Education() {
  return (
    <div
      name="education"
      className="w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline">Education 🏫</p>
        </div>

        <br />

        <div>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#640000", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  #640000",
              }}
              date="2019-2023"
              iconStyle={{ background: "#640000", color: "#fff" }}
            >
              <img
                alt="Logo"
                src={"https://www.thapar.edu/images/noimage.jpg"}
                style={{ height: "60px", width: "100px" }}
              />
              <h3
                className="vertical-timeline-element-title"
                style={{ fontWeight: "800" }}
              >
                Thapar Institute of Engineering and Technology
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Patiala, India
              </h4>
              <p>B.E. in Computer Science and Engineering</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="2017-2019"
              contentStyle={{ background: "#8B8000", color: "#fff" }}
              iconStyle={{ background: "#8B8000", color: "#fff" }}
              //   icon={<WorkIcon />}
            >
              <img
                alt="Logo"
                src={"http://sggs35school.com/images/logo.jpg"}
                style={{ height: "60px", width: "100px" }}
              />
              <h3
                className="vertical-timeline-element-title"
                style={{ fontWeight: "800" }}
              >
                Sri Guru Gobind Singh Sr. Sec. School
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Chandigarh, India
              </h4>
              <p>Intermediate(Science)</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              date="2017"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <img
                alt="Logo"
                src={
                  "https://image1.jdomni.in/storeLogo/19042020/5B/F6/B2/0A5632C7517220839FA47A3E4E_1587283282528.png?output-format=webp"
                }
                style={{ height: "60px", width: "120px" }}
              />
              <h3
                className="vertical-timeline-element-title"
                style={{ fontWeight: "800" }}
              >
                St. Joseph School
              </h3>
              <h4 className="vertical-timeline-element-subtitle">
                Ambala, India
              </h4>
              <p>Matriculation</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}

export default Education;
