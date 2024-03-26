// header style component(tailwind)
import StyledHeader from "./StyledHeader";
import RoutingButton from "../../../entities/RoutingButton/ui";
import { routes } from "../route";

const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <ul className="flex flex-col gap-2">
          {routes.map((route) => (
            <RoutingButton key={route.path} href={route.path}>
              {route.label}
            </RoutingButton>
          ))}
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
