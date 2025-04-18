"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import type { FC } from "react";
import HomeContent from "@/app/_components/home";
import ProjectsContent from "./_components/projects";

// Home Page
const Profile: FC = () => {
  return (
    <main className="relative">
      {/* 背景画像 */}
      <div className="absolute inset-0 -z-10 min-h-screen">
        <Image
          src="/images/background-image-jiburi.png"
          alt="background"
          fill
          className="object-cover"
        />
      </div>

      {/* 空にだけアニメーション */}
      <div className="rain-bg" />

      <div className="relative z-10 flex flex-col items-center h-screen">
        <div className="flex flex-col items-center">
          <h1 className="text-h2 leading-[1.2] tracking-hero font-hero text-primary-soft-beige mt-[87px]">
            Welcome to My Profile
          </h1>
          <p className="text-paragraph font-paragraph text-text-body mt-[26px]">
            I'm a software engineer with a passion for building scalable and
            efficient systems.
          </p>
        </div>
        <div className="w-full max-w-[1140px] mt-[58px]">
          <Tabs>
            <TabsList className="w-full bg-accent-mystic-purple">
              <TabsTrigger value="home">Home</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="about">About me</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>
            <TabsContent value="home">
              <HomeContent />
            </TabsContent>
            <TabsContent value="projects">
              <ProjectsContent />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
};

export default Profile;
