import {
  FaBuildingColumns,
  FaLocationDot,
  FaMapLocationDot,
  FaPeopleGroup,
} from "react-icons/fa6";
import { useSidebar } from "../context/SidebarContext";

function DetailCard() {
  const { isOpen } = useSidebar();
  const { isDetail } = useSidebar();

  return (
    <div
      className={`w-[387px] h-dvh absolute ${
        isOpen
          ? isDetail
            ? "left-[326px]"
            : "left-[-100px]"
          : isDetail
          ? "left-[103px]"
          : "left-[-300px]"
      }  z-30 bg-white transition-all duration-300 ease-in-out`}
    >
      <img
        src="gua-liang-bangkai.png"
        alt=""
        className="w-full h-[215px] mb-3.5"
      />
      <div className="px-6">
        <h1 className=" text-2xl mb-5">Gua Liang Bingkai</h1>
        <div className="flex flex-col gap-3.5  mb-8">
          <div className="flex gap-2.5 text-sm">
            <FaLocationDot size={19} /> Kecamatan Mentewe
          </div>
          <div className="flex gap-2.5 text-sm overflow-ellipsis">
            <FaMapLocationDot size={19} /> QQWW+XVH, Dukuh Rejo, Kec. Mantewe,
            Kabupaten Tanah Bumbu, Kalimantan Selatan 72211
          </div>
          <div className="flex gap-2.5 text-sm">
            <FaBuildingColumns size={19} /> 1000 Km dari Batulicin
          </div>
          <div className="flex gap-2.5 text-sm">
            <FaPeopleGroup size={19} /> 850 Kunjungan
          </div>
        </div>

        <div className="flex flex-col gap-3 mb-8">
          <h1 className="text-xl">Deskripsi</h1>
          <span className="text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
            eligendi quibusdam harum veniam, hic ipsum ducimus aut ut architecto
            saepe, fugit dolores sunt. Sunt quod quidem voluptas repudiandae
            vitae consectetur?
          </span>
        </div>

        <div className="flex flex-col gap-3 mb-4">
          <h1 className="text-xl">Foto & Video</h1>
        </div>
      </div>
    </div>
  );
}

export default DetailCard;
