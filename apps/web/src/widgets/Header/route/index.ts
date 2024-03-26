type RouteType = {
  path: string;
  label: string;
};

export const routes: RouteType[] = [
  { path: "/", label: "Home" },
  { path: "/about-me", label: "About Me" },
  { path: "/my-works", label: "My Works" },
];
