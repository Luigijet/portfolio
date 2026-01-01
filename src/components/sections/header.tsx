import { useState, useEffect } from "react";

import { FaLocationCrosshairs } from "react-icons/fa6";

import { ABOUT_ME } from "@/components/constants/data";

// =============================================
// TYPE DEFINITIONS
// =============================================
interface ProfileImageProps {
  isHovering: boolean;
  setIsHovering: (hovering: boolean) => void;
}

interface LocationTimeProps {
  currentTime: string;
}

// =============================================
// CUSTOM HOOKS
// =============================================
const usePHTTime = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const timeString = new Date().toLocaleTimeString("en-PH", {
        timeZone: "Asia/Manila", // PH time zone
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return currentTime;
};

// =============================================
// UI COMPONENTS
// =============================================
const ProfileImage = ({ isHovering, setIsHovering }: ProfileImageProps) => (
  <div className="flex-shrink-0">
    <div
      className="w-24 h-24 rounded-full overflow-hidden border-4 border-border cursor-pointer duration-200"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {isHovering ? (
        <img
          src={ABOUT_ME.profileGif}
          alt="Profile GIF"
          width={96}
          height={96}
          className="w-full h-full object-cover"
        />
      ) : (
        <img
          src={ABOUT_ME.profileImage}
          alt={ABOUT_ME.name}
          width={96}
          height={96}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  </div>
);

const LocationTime = ({ currentTime }: LocationTimeProps) => (
  <div className="hidden md:block text-base text-muted-foreground space-y-1 text-right">
    <div className="flex items-center gap-2 justify-end">
      <FaLocationCrosshairs className="w-4 h-4" />
      <span className="font-mono">{ABOUT_ME.location}</span>
    </div>
    <div className="font-mono">{currentTime} PHT</div>
  </div>
);

// =============================================
// MAIN COMPONENT
// =============================================
const Header = () => {
  const currentTime = usePHTTime();
  const [isHovering, setIsHovering] = useState<boolean>(false);

  return (
    <section className="pt-5 animate-section" id="header">
      <div className="flex items-center gap-4 mb-4 ">
        <ProfileImage isHovering={isHovering} setIsHovering={setIsHovering} />

        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">{ABOUT_ME.name}</h1>
          </div>
          <p className="text-base text-muted-foreground font-medium">{ABOUT_ME.title}</p>
        </div>

        <LocationTime currentTime={currentTime} />
      </div>
    </section>
  );
};

export default Header;
