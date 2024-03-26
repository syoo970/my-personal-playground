// header style component(tailwind)
"use client";
import StyledHeader from "./StyledHeader";
import RoutingButton from "../../../entities/RoutingButton/ui";
import { routes } from "../route";
import { useMobile } from "../model/mobile";

const Header = () => {
  const { isMobile } = useMobile();

  return (
    <StyledHeader>
      <nav>
        <ul className={`flex gap-2 ${isMobile ? "flex-col" : "w-[350px]"}`}>
          {routes.map((route) => (
            <RoutingButton key={route.path} href={route.path}>
              <div
                className={`w-full flex items-center ${
                  isMobile ? "" : "justify-center"
                }`}
              >
                {route.label}
              </div>
            </RoutingButton>
          ))}
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
