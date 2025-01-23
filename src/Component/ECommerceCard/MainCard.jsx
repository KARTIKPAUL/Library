import CardFour from "./CardFour";
import CardOne from "./CardOne";
import CardThree from "./CardThree";
import CardTwo from "./CardTwo";

const MainCard = () => {
  return (
    <>
      <div className="flex flex-col space-y-10 items-center my-10">
        <CardOne />
        <CardTwo />
        <CardThree />
        <CardFour />
      </div>
    </>
  );
};

export default MainCard;
