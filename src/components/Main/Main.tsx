import style from "./Main.module.css";
import Section from "./MainSection/MainSection";
import { Flights } from "../../types";
interface MainProps {
  flights: Flights[];
}
const Main: React.FC<MainProps> = ({ flights }) => {
  return (
    <div className={style["main-container"]}>
      <div className={style["main-content"]}>
        <Section flights={flights} />
      </div>
    </div>
  );
};
export default Main;
