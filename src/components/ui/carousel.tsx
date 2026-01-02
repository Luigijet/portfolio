import { useEffect, useRef, useState } from "react";

interface CarouselProps {
  slides: string[];
  speed?: number; // pixels per frame
}

const Carousel: React.FC<CarouselProps> = ({ slides, speed = 0.6 }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const xRef = useRef(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2;

    const animate = () => {
      xRef.current -= speed;

      if (Math.abs(xRef.current) >= totalWidth) {
        xRef.current = 0;
      }

      track.style.transform = `translateX(${xRef.current}px)`;
      animationRef.current = requestAnimationFrame(animate);
    };

    if (!isHovered) {
      animationRef.current = requestAnimationFrame(animate);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
    };
  }, [isHovered, speed]);

  return (
    <div
      className="w-full overflow-hidden relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-gradient-r absolute left-0 top-0 bottom-0 z-10" />
      <div className="carousel-gradient-l absolute right-0 top-0 bottom-0 z-10" />
      <div ref={trackRef} className="flex gap-4 w-max">
        {[...slides, ...slides].map((slide, index) => (
          <div key={index} className="flex-none w-[200px] rounded-lg overflow-hidden shadow-sm">
            <img
              src={slide}
              alt="project showcase"
              loading="lazy"
              decoding="async"
              className="block w-full pointer-events-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
