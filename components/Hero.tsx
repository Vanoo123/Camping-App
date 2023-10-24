import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map"> </div>
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image 
          rel="preload"
          src="/bouquet.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Get married easily in Georgia</h1>
        <p className="regular-16 mt-6 text-gray-70 xl:max-w-[520px] italic">
        Discover the magic of weddings designed just for you. Our team of dedicated experts is here to turn your dream wedding into a reality. Let's create memories that will last a lifetime.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                rel="preload"
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            100+
            <span className="regular-16 lg:regular-20 ml-1">Married Person</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button 
            type="button" 
            title="Get Married Now" 
            variant="btn_yellow_dark"
            alt="get-married"   
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-70">Location</p>
            </div>
            <p className="bold-20 text-black">Georgia</p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-70">Marriage</p>
              <p className="bold-20 text-black">In 1 day</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-70">Apostille</p>
              <p className="bold-20 text-black">In 2 Days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero