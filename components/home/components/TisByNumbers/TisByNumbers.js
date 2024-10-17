import image from "../../../../public/icons/360.png";
import "../../../../styles/home/components/tisByNumbers/TisByNumbers.css";
import Image from "next/image";
import Stats from "./stats";
function TisByNumbers() {
  const handleVirtualTourClick = () => {
    window.location.href = "/virtual-tour";
  };
  return (
    <div id="8">
      <div className="Tis_By_Numbers_main_div" onClick={handleVirtualTourClick}>
        <Image className="image360" src={image} alt="" />
        <p className="title">DIVINE INTO OUR...</p>
        <p className="title_2">VIRTUAL TOUR</p>
      </div>

      <div className="-mt-[40px] md:-mt-[120px]">
        <Stats />
      </div>
    </div>
  );
}

export default TisByNumbers;
