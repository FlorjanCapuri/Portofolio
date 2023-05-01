import React from "react";

const Main = () => {
  return (
    <div id="Main" className="h-screen px-[20%] ">
      <div className="bg-background py-[28px] px-[20%] ">
        <img className="w-[190px] h-[43px]" src="logo.png"></img>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 mt-10">
        <div className="text-6xl">
          Hi, I'm <span className="text-primary">Florjan</span>
        </div>
        <div>A software developer with a passion for learning and creating</div>
        <div>CANVAS</div>
      </div>
    </div>
  );
};

export default Main;
