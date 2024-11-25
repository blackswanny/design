"use client";
import Image from "next/image";
import Ball from "../assets/images/ball.png";

export default () => {
  return (
    <>
      <div className='overflow-hidden bg-[url("../assets/images/ball.png")] absolute left-0 top-0 h-screen w-screen bg-left-top bg-no-repeat' style={{
        width: "1276px",
        height: "1256px"
      }}>
        {/* <Image
          src={Ball}
          alt="Huge Ball"
          width={1276}
          height={1256}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        /> */}
      </div>
    </>
  );
};
