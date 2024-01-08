import cn from "../../cn";

const Hero = () => {
  return (
    <section className="flex justify-between items-center w-full">
      <div className="basis-1/2 flex flex-col gap-10">
        <h1 className="font-Lora font-medium tracking-tight text-[52px] leading-tight">
          Discover the Latest Fashion Trends
        </h1>
        <p className="font-Ubuntu text-[16px]">
          From stylish dresses to trendy tops and must-have accessories, we have
          everything you need to stay on top of the latest fashion trends. Our
          expertly curated collection features the hottest styles from top
          designers, so you can always find the perfect look for any occasion.
          Shop now and discover your new favorite fashion pieces.
        </p>
        <button
          className={cn(
            "font-Ubuntu font-semibold text-[16px]",
            "bg-button w-[286px] h-[43px]",
            "rounded-lg"
          )}
        >
          Shop Now
        </button>
      </div>
      <div className="basis-1/2 h-[560px] shrink-0">
        <img
          src="/src/assets/img-hero.png"
          alt=""
          width={800}
          className="h-full object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
