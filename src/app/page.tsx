import { BackgroundLines } from "@/components/ui/background-lines";
import { ColourfulText } from "@/components/ui/colourful-text";

export default function Home() {
  return (
    <BackgroundLines className="h-[calc(100vh-268px)] flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-[clamp(1.875rem,8vw,4.5rem)] font-noto-sans-kr py-2 md:py-10 relative z-20 font-bold tracking-tight">
        <ColourfulText text="코딩으로" /> <br /> 새로운 가능성을 열어보세요
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center mt-4 px-4">
        배우는 순간, 당신의 아이디어가 현실이 됩니다
      </p>
      <div className="mt-8 md:mt-12">
        <button className="cursor-pointer px-8 py-3 md:px-10 md:py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg text-sm md:text-base transition-all duration-200 transform hover:scale-105 relative z-20">
          지금 시작하기
        </button>
      </div>
    </BackgroundLines>
  );
}
