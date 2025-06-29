// components/RandomBanner.tsx
"use client";

import { Banner } from "nextra/components";
import { getQuoteByRotation } from "@/constants/quotes";
import { useEffect, useState } from "react";

// 한국 시간 기준으로 오전 9시에 바뀌는 날짜 계산
function getKoreanDate(): Date {
  const now = new Date();

  // 한국 시간으로 변환 (UTC+9)
  const koreanTime = new Date(now.getTime() + 9 * 60 * 60 * 1000);

  // 오전 9시 이전이면 전날 기준으로 계산
  if (koreanTime.getHours() < 9) {
    koreanTime.setDate(koreanTime.getDate() - 1);
  }

  return koreanTime;
}

// 기준일(2025년 1월 1일)부터의 경과 일수 계산
function getDaysSinceStart(currentDate: Date): number {
  // 2025년 1월 1일을 기준일로 설정
  const startDate = new Date("2025-01-01");

  // 밀리초 차이를 일수로 변환
  const timeDiff = currentDate.getTime() - startDate.getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  // 음수가 되지 않도록 보정 (2025년 이전 날짜의 경우)
  return Math.max(0, daysDiff);
}

export default function RandomBanner() {
  const [quote, setQuote] = useState<string>("");

  useEffect(() => {
    // 클라이언트 사이드에서만 실행
    const koreanDate = getKoreanDate();
    const daysSinceStart = getDaysSinceStart(koreanDate);
    const selectedQuote = getQuoteByRotation(daysSinceStart);
    setQuote(selectedQuote);
  }, []);

  // 서버 사이드 렌더링 시 기본 메시지 표시
  if (!quote) {
    return (
      <Banner storageKey="academy-banner" dismissible={false}>
        💻 코리아IT아카데미 신촌 - 프로그래밍 학습 자료
      </Banner>
    );
  }

  return (
    <Banner storageKey="academy-banner" dismissible={false}>
      {quote}
    </Banner>
  );
}
