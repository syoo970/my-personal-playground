// header style component(tailwind)
import StyledHeader from "./StyledHeader";

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <ul className="flex gap-2">
          <li>home</li>
          <li className="cursor-pointer">about me</li>
          <li>my works</li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
