import React from "react";
import ReactWorks from "../component/worksComponent/ReactWorks";
import JsWorks from "../component/worksComponent/JsWorks";
import PublishingWorks from "../component/worksComponent/PublishingWorks";

import { useSelectedWorkStore } from "../store/selectWorkStore";

const Projects = () => {
  const { selectedWork, setSelectedWork } = useSelectedWorkStore();

  const showReactWorks = () => {
    setSelectedWork("React");
  };

  const showJsWorks = () => {
    setSelectedWork("JavaScript");
  };

  const showPublishingWorks = () => {
    setSelectedWork("Publishing");
  };
  return (
    <div>
      <ul>
        <li>
          <button onClick={showReactWorks}>React</button>
        </li>
        <li>
          <button onClick={showJsWorks}>JavaScript</button>
        </li>
        <li>
          <button onClick={showPublishingWorks}>Publishing</button>
        </li>
      </ul>
      <div>
        {selectedWork === "React" && <ReactWorks />}
        {selectedWork === "JavaScript" && <JsWorks />}
        {selectedWork === "Publishing" && <PublishingWorks />}
      </div>
    </div>
  );
};

export default Projects;
