import Image from "next/image";
import type { FC } from "react";

// Home Page
const Home: FC = () => {
  return (
    <main className="relative">
      <div className="absolute inset-0 -z-10 min-h-screen">
        <Image
          src="/images/background-image-jiburi.png"
          alt="background"
          fill
          className="object-cover"
        />
      </div>
      <div className="relative z-10 flex flex-col items-center h-screen">
        <h1 className="text-h2 leading-[1.2] tracking-hero font-hero text-primary-soft-beige mt-[87px]">
          Welcome to My Profile
        </h1>
        <p className="text-paragraph font-paragraph text-text-body mt-[26px]">
          I'm a software engineer with a passion for building scalable and
          efficient systems.
        </p>
      </div>
    </main>
  );
};

export default Home;
