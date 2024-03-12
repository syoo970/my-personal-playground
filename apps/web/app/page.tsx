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
      <div className="flex flex-col">
        <TypingText text="Hello, World!" />
        <TypingText
          multiline
          textList={["Hello, World!", "프론트엔드 개발자"]}
          innerClassName="text-2xl"
          className="flex items-center"
        />
      </div>
    </main>
  );
}
