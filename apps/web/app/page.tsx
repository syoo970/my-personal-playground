import Images from "../src/entities/Images/ui/Images";
import { TypingText } from "../src/entities/TypingText";

export default function Page(): JSX.Element {
  return (
    <main>
      <Images
        src={"https://images.unsplash.com/photo-1710003364549-de37d4ed3413"}
        width={500}
        height={300}
        alt="unsplash"
      />
      <TypingText text="Hello, World!" />
    </main>
  );
}
