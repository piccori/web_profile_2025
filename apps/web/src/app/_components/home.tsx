"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import type { FC } from "react";

const HomeContent: FC = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[1140px] flex justify-between mt-[87px]">
        <div>
          <Image
            className="rounded-lg ms-40"
            src="/images/profile_image_error.png"
            alt="Profile"
            width={280}
            height={410}
          />
        </div>
        <div className="flex flex-col items-start">
          <div>
            <h2 className="text-h2 leading-[1.2] tracking-hero font-heading text-primary-soft-beige">
              I'm Taisei Higa
            </h2>
            <p className="text-paragraph font-paragraph text-primary-soft-beige mt-2">
              Frontend Engineer
            </p>
            <p className="text-paragraph font-paragraph text-text-body mt-2">
              Love creating elegant solutions to complex problems. Specializing
              <br />
              in building modern web applications with latest technologies.
            </p>
          </div>
          <div className="flex gap-4 mt-6 text-center w-full min-h-20">
            <Card className="w-full h-full max-w-28 bg-accent-warm-yellow">
              <p className="text-label font-label font-semibold text-accent-mystic-purple">
                Frontend
              </p>
            </Card>
            <Card className="w-full h-full max-w-28 bg-accent-warm-yellow">
              <p className="text-label font-label font-semibold text-accent-mystic-purple">
                Backend
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
