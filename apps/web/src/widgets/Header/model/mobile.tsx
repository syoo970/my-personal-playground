"use client";
import { useMediaQuery, useDisclosure } from "@mantine/hooks";

export const useMobile = () => {
  const isMobile = useMediaQuery("(max-width: 760px)");
  const [opened, rest] = useDisclosure(false);

  return {
    isMobile,
    opened,
    ...rest,
  };
};
