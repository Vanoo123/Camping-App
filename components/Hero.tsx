"use client";

import Image from "next/image";
import Button from "./Button";
import { useTranslation } from '../app/i18n'
import Link from "next/link";
import { componentProps } from "@/app/[lng]/page";
import { useLang } from "./LangProvider";

const Hero: React.FC<componentProps> = async ({ lng } ) => {
  const { getLang } = useLang();
  return getLang.then((t:any) => {
    return (
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
        <div className="hero-map" />
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <Image
            rel="preload"
            src="/assets/bouquet.svg" 
            alt="A bouquet icon"
            width={50}
            height={50}
            className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
          />
          <h1 className="bold-40 lg:bold-88">{t("heroTitle")}</h1>
          <p className="regular-16 mt-6 text-gray-70 xl:max-w-[520px] italic">
            {t("heroDescription")}
          </p>
  
          <div className="my-11 flex flex-wrap gap-5">
            <div className="flex items-center gap-2">
              {Array(5)
                .fill(1)
                .map((_, index) => (
                  <Image
                    rel="preload"
                    src="/assets/star.svg"
                    key={index}
                    alt="Star icon"
                    width={24}
                    height={24}
                  />
                ))}
            </div>
  
            <p className="bold-16 lg:bold-20 text-blue-70">
              100+
              <span className="regular-16 lg:regular-20 ml-1">
                {t("heroStars")}
              </span>
            </p>
          </div>
  
          <div className="flex flex-col w-full gap-3 sm:flex-row">
            <Link href="#contact">
              <Button
                type="button"
                title={t("getMarried")}
                variant="btn_yellow_dark"
                alt="A button for get-married"
              />
            </Link>
          </div>
        </div>
  
        <div className="relative flex flex-1 items-start">
          <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8 shadow heroshadow">
            <div className="flex flex-col">
              <div className="flexBetween">
                <p className="regular-16 text-gray-70">{t("location")}</p>
              </div>
              <p className="bold-20 text-black">{t("country")}</p>
            </div>
  
            <div className="flexBetween">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-70">
                  {t("marriage")}
                </p>
                <p className="bold-20 text-black">{t("days")}</p>
              </div>
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-70">
                  {t("apostile")}
                </p>
                <p className="bold-20 text-black">{t("apostileDays")}</p>
              </div>
            </div>
          </div>
            <h1 className="hidden">{t("hiddenSearch")}</h1>
        </div>
      </section>
    );
  })
};

export default Hero;
