import Image from "next/image";

const MainNote = () => {
  return (
    <div className="w-full">
      <div className="bg-white w-[400px] h-[150px] custom-shadow rounded-br-2xl relative flex  items-center">
        <div
          className={
            "font-permanentMarker text-[1.5rem] flex flex-col gap-1 pl-8 pb-4"
          }
        >
          <span>THIS IS</span>
          <span>ME AND</span>
          <span>ONLY YOU</span>
        </div>
        <div className="absolute bottom-[-25px]">
          <Image
            src="/assets/spring1.png"
            width={350}
            height={30}
            alt="spring img"
          />
        </div>
      </div>
    </div>
  );
};

export default MainNote;
