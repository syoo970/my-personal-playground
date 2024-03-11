"use server";
import { getPlaiceholder } from "plaiceholder";

export const getPlaceHolderImage = async (url: string): Promise<any> => {
  const buffer = await fetch(url).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );
  return getPlaiceholder(buffer);
};
