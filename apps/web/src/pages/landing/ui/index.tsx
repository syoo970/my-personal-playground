import { TypingText } from "../../../entities/TypingText";
import { Images } from "../../../entities/Images";
import WavvingHands from "../../../entities/WavvingHands/ui/WavvingHands";

const LandingPage = () => {
  return (
    <div className="w-full h-full">
      <div className="flex flex-col gap-2">
        <div className="flex items-center">
          <p className="text-5xl font-sans text-bolder mr-4">안녕하세요!</p>
          <WavvingHands className="text-5xl" />
        </div>
        s
        <div className="flex itmes-center">
          <span className="flex items-center font-sans text-5xl mr-4">
            저는
          </span>
          <TypingText
            multiline
            cursor={false}
            textList={["프론트엔드", "커피를 사랑하는"]}
            style={{
              display: "flex",
              alignItems: "center",
              borderBottom: "1px solid #000",
            }}
            className="font-sans text-5xl mr-4"
          />
          <span className="flex items-center font-sans text-5xl">
            개발자 입니다.
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
