import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  return (
    <div className="experience"><br></br>
      <VerticalTimeline lineColor="#3e497a">
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="June/22- March/23"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Software Developer - Persistent Systems
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Pune, Maharashtra
          </h4>
          <p>Developed the Application.Work with UI/UX developers to build Standalone Application using different Frameworks.</p>
          <p>Do Frontend as well as Backend task individually as per the project requirements</p>
          <p>Involved in project plan meetings with clients, business analysts & team members to analyze requirements.</p>
          <p>Translate Business requirement into working model using Agile Methodology.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jan/22- june/22"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Java Intern - Persistent Systems
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Pune, Maharashtra
          </h4>
          <p>Create UML Diagrams, Blueprint to start Development of Application.</p>
          <p>Complete the task & assignment within the timeline.</p>
          <p>Collaborate with team of Developers to build web applications.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;