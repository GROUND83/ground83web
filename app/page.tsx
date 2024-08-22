import Image from "next/image";

export default function Home() {
  return (
    <main className="  bg-black bg-gradient-to-r from-gray-900 to-black ">
      <div className=" relative w-screen flex flex-row ">
        <div className=" w-full  aspect-video ">
          <Image
            src={
              "https://tbucqnuyvwwhuqebboev.supabase.co/storage/v1/object/public/finefarming/etc/back1.jpg"
            }
            alt="background"
            width={1200}
            height={400}
            className=" object-cover w-full lg:aspect-video aspect-[1/2] h-auto opacity-50"
          />
        </div>
      </div>
      <div className=" absolute top-0 left-0 z-30 flex flex-col items-center  justify-center w-full h-screen">
        <h1 className="text-2xl lg:text-5xl text-white font-bold">
          당신의 상상을 실현시켜드립니다.
        </h1>
        <div className="text-white flex flex-col items-center mt-6 text-sm gap-3">
          <p>GROUND83</p>
          <p>WEB AGENCY</p>
          <p>wonchang.k@gmail.com</p>
        </div>
      </div>
    </main>
  );
}
