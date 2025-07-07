// _meta.ts
import type { MetaRecord } from "nextra";

const appMeta: MetaRecord = {
  index: {
    title: "홈",
    theme: {
      sidebar: false, // 왼쪽 사이드바 숨기기
      toc: false, // 오른쪽 목차 숨기기
      navbar: true, // 상단 네비게이션은 유지 (선택사항)
      footer: true, // 하단 푸터는 유지 (선택사항)
      breadcrumb: false, // 브레드크럼 숨기기 (선택사항)
      pagination: false, // 페이지네이션 숨기기 (선택사항)
    },
  },
  python: {
    title: "Python 프로그래밍",
  },
  projects: {
    title: "실전 프로젝트",
  },
  solutions: {
    title: "답안 모음",
  },
};

export default appMeta;
