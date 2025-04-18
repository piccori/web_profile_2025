"use client";

import { Card } from "@/components/ui/card";
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
            <Card className="w-full h-full max-w-28 bg-accent-warm-yellow rounded-xl shadow-[inset_0_0_6px_rgba(255,255,255,0.3)] hover:shadow-[0_0_12px_rgba(255,211,105,0.5)] hover:scale-105 transition duration-300 flex flex-col items-center justify-center gap-2 py-4 px-2">
              <svg
                width="32"
                height="32"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8"
              >
                <title>Frontend Development Icon</title>
                <rect width="64" height="64" rx="12" fill="#F5DEB3" />
                <path
                  d="M16 20H48V44H16V20Z"
                  fill="#1A1A1A"
                  stroke="#FFD369"
                  strokeWidth="2"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 24H44V40H20V24Z"
                  fill="#EEEEEE"
                  stroke="#B3E5FC"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <circle cx="23" cy="27" r="1.5" fill="#FFD369" />
                <rect
                  x="26"
                  y="27"
                  width="12"
                  height="2"
                  fill="#C1D3C9"
                  rx="1"
                />
                <rect
                  x="26"
                  y="32"
                  width="12"
                  height="2"
                  fill="#C1D3C9"
                  rx="1"
                />
                <circle cx="23" cy="33" r="1.5" fill="#B3E5FC" />
                <path
                  d="M14 16L50 16"
                  stroke="#FFD369"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              <p className="text-label font-label font-semibold text-accent-mystic-purple tracking-wide">
                Frontend
              </p>
            </Card>

            <Card className="w-full h-full max-w-28 bg-accent-warm-yellow rounded-xl shadow-[inset_0_0_6px_rgba(255,255,255,0.3)] hover:shadow-[0_0_12px_rgba(255,211,105,0.5)] hover:scale-105 transition duration-300 flex flex-col items-center justify-center gap-2 py-4 px-2">
              <svg
                className="w-8 h-8"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Backend Development Icon</title>
                <rect width="64" height="64" rx="12" fill="#F5DEB3" />
                <rect
                  x="16"
                  y="18"
                  width="32"
                  height="28"
                  rx="3"
                  fill="#1A1A1A"
                  stroke="#FFD369"
                  strokeWidth="2"
                />
                <circle cx="22" cy="24" r="2" fill="#FFD369" />
                <circle cx="30" cy="24" r="2" fill="#B3E5FC" />
                <circle cx="38" cy="24" r="2" fill="#C1D3C9" />
                <rect
                  x="20"
                  y="30"
                  width="24"
                  height="2.5"
                  fill="#EEEEEE"
                  rx="1"
                />
                <rect
                  x="20"
                  y="35"
                  width="16"
                  height="2.5"
                  fill="#C1D3C9"
                  rx="1"
                />
                <rect
                  x="20"
                  y="40"
                  width="20"
                  height="2.5"
                  fill="#C1D3C9"
                  rx="1"
                />
                <path
                  d="M28 49L36 49"
                  stroke="#FFD369"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              <p className="text-label font-label font-semibold text-accent-mystic-purple tracking-wide">
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
