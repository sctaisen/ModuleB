import "./index.scss";
import {Title} from "./components/title";
import {Body} from "./components/body";

export const ModuleB = (props) => {
  return (
    <div className="module-b-content">
      <Title title="ModuleB Title" />
      <Body content="ModuleB Body" />
    </div>
  );
};
