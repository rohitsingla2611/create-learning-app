import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./Module-2/6-free-code-camp/index.css"

// import App from "./Module-1/1-life-cycle-clock/App";

// import App from "./Module-2/1-interactive-view/App";
// import App from "./Module-2/2-conditional-rendering/App";
// import App from "./Module-2/3-array-map/App";
// import App from "./Module-2/4-array-filter/App";
// import App from "./Module-2/5-object-mapping/App";
// import App from "./Module-2/6-free-code-camp/App";

// import App from "./Module-3/1-first-react-app/App/App";
// import App from "./Module-3/2-class-component/App/App";
// import App from "./Module-3/3-content-conditionally/App/App";
// import App from "./Module-3/4-radium-hover-tool/App/App";
// import App from "./Module-3/5-styled-components/App/App";
// import App from "./Module-3/6-css-modules/App/App";

// import App from "./Module-4/1-project-structure/Containers/App";
// import App from "./Module-4/2-life-cycle-creation/Containers/App";
// import App from "./Module-4/3-life-cycle-updation/Containers/App";
// import App from "./Module-4/4-important-hooks/Containers/App";

// import App from "./Module-5/1-stop-watch/App";
// import App from "./Module-5/2-items-list/App";

// import App from "./Module-6/1-parent-child/App";
// import App from "./Module-6/2-to-do-list/App";
import App from "./Module-6/3-fetch-data-random-user/App";
// import App from "./Module-6/4-form-control/App";
// import App from "./Module-6/5-temp-lifting-up-state/App";

ReactDOM.render(
  // Sometimes Rendering Twice due to strict mode
  <React.StrictMode>
    <App indexTitle="This is argument passesd in index.js File" />
  </React.StrictMode>,
  document.getElementById("root")
);

// ReactDOM.render(
//   <App indexTitle="This is argument passesd in index.js File" />,
//   document.getElementById("root")
// );
