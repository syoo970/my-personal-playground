"use client";
import { useMediaQuery } from "@mantine/hooks";
import { Burger } from "@mantine/core";

const StyledHeader = ({ children }: React.PropsWithChildren) => {
  const isMobile = useMediaQuery("(max-width: 760px)");

  return (
    <header className="w-full fixed left-0 right-0 top-0 h-[60px] py-2 px-4">
      <div className="w-full h-full flex items-center justify-between gap-4">
        <div className="logo flex gap-2 items-center">
          {isMobile && <Burger />}
          <p className="text-bolder text-center font-sans leading-normal flex items-center">
            개발자 유승범
          </p>
        </div>
        <div>{children}</div>
      </div>
    </header>
  );
};

export default StyledHeader;
