import style from "./Main.module.css";
import Section from "./MainSection/MainSection";
import { Flights } from "../../types";
interface MainProps {
  flights: Flights[];
  setToggleBtn: React.Dispatch<React.SetStateAction<boolean>>;
}
const Main: React.FC<MainProps> = ({ flights, setToggleBtn }) => {
  return (
    <div
      className={style["main-container"]}
      onClick={() => setToggleBtn(false)}
    >
      <div className={style["main-content"]}>
        <Section flights={flights} />
      </div>
    </div>
  );
};
export default Main;
