import CardFour from "./CardFour";
import CardOne from "./CardOne";
import CardThree from "./CardThree";
import CardTwo from "./CardTwo";

const MainCard = () => {
  return (
    <>
      <div className="flex flex-col gap-y-4 items-center ">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>
    </>
  );
};

export default MainCard;
