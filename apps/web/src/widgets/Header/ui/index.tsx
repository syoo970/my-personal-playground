// header style component(tailwind)
import StyledHeader from "./StyledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <div className="w-full h-full flex items-center justify-between">
        <div>LOGO</div>
        <nav>
          <ul className="flex gap-2">
            <li>home</li>
            <li className="cursor-pointer">about me</li>
            <li>my works</li>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  );
};

export default Header;
