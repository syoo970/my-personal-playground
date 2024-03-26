"use client";
import React from "react";
import { Burger, Drawer } from "@mantine/core";
import { useMobile } from "../model/mobile";

const StyledHeader = ({ children }: React.PropsWithChildren) => {
  const ref = React.useRef<HTMLButtonElement>(null);
  const { isMobile, opened, toggle, close } = useMobile();

  return (
    <header className="w-full fixed left-0 right-0 top-0 h-[60px] py-2 px-4">
      <div className="w-full h-full flex items-center justify-between gap-4">
        {isMobile && <Burger opened={opened} onClick={toggle} ref={ref} />}
        <div className="logo flex gap-2 items-center">
          <div className="leading-none flex items-center">
            <p className="text-bolder text-center font-sans">개발자 유승범</p>
          </div>
        </div>
        {!isMobile ? children : <div className={`w-[34px]`} />}
        {isMobile && (
          <Drawer opened={opened} onClose={close}>
            {children}
          </Drawer>
        )}
      </div>
    </header>
  );
};

export default StyledHeader;
