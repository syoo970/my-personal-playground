"use client";

const StyledHeader = ({ children }: React.PropsWithChildren) => {
  return (
    <header className="w-full fixed left-0 right-0 top-0 h-[60px] py-2 px-4">
      {children}
    </header>
  );
};

export default StyledHeader;
