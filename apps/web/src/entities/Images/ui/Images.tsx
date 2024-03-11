import Image from "next/image";
import { getPlaceHolderImage } from "../model";

type ImagesProps = React.ComponentProps<typeof Image>;

const Images = async ({ ...props }: ImagesProps) => {
  const source = props.src as string;
  const { base64 } = await getPlaceHolderImage(source);

  return <Image placeholder="blur" blurDataURL={base64} {...props} />;
};

export default Images;
