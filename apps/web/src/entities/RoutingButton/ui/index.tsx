import Link from "next/link";
import { NavLink } from "@mantine/core";
import type { RoutingButtonProps } from "../types/index";

const RoutingButton = ({
  href,
  children,
}: React.PropsWithChildren<RoutingButtonProps>) => {
  return <NavLink component={Link} href={href} label={children} />;
};

export default RoutingButton;
