# 프로젝트 폴더 구조 및 카테고리 순환 시스템

```
your-project/
├── app/
│   ├── layout.tsx          # 메인 레이아웃 파일
│   └── global.css          # 전역 스타일
├── components/
│   └── RandomBanner.tsx    # 랜덤 배너 컴포넌트
├── constants/
│   └── quotes.ts           # 카테고리별 프로그래밍 명언 모음
└── ...
```

## 카테고리 순환 시스템

### 25개 카테고리 구성

1. **famous** - 유명인 명언 (스티브 잡스, 도널드 크누스 등)
2. **java** - Java 관련 글귀
3. **python** - Python 관련 글귀
4. **javascript** - JavaScript/TypeScript 관련 글귀
5. **cpp** - C/C++ 관련 글귀
6. **sql** - SQL/데이터베이스 관련 글귀
7. **rust** - Rust 관련 글귀
8. **go** - Go 관련 글귀
9. **frameworks** - 프레임워크/라이브러리 관련
10. **ai_modern** - AI 시대 관련 글귀
11. **languages_comparison** - 외국어 비유 글귀
12. **motivation** - 학습 동기부여 글귀
13. **devops_cloud** - DevOps/클라우드 관련
14. **web_mobile** - 웹/모바일 개발 관련
15. **other_languages** - 기타 언어들 (PHP, Ruby, C# 등)
16. **architecture_patterns** - 아키텍처/디자인 패턴
17. **data_security** - 데이터/보안 관련
18. **collaboration_testing** - 협업/테스팅 관련
19. **ux_performance** - UX/성능 관련
20. **growth_community** - 성장/커뮤니티 관련
21. **work_life_balance** - 일과 삶의 균형
22. **fun_metaphors** - 재미있는 비유들
23. **philosophy** - 개발 철학
24. **future_tech** - 미래 기술
25. **general_wisdom** - 일반적인 지혜

### 순환 방식 예시

**첫 번째 라운드 (1-25일):**

- 1일차: 유명인 명언 1번째
- 2일차: Java 1번째
- 3일차: Python 1번째
- ...
- 25일차: 일반 지혜 1번째

**두 번째 라운드 (26-50일):**

- 26일차: 유명인 명언 2번째
- 27일차: Java 2번째
- 28일차: Python 2번째
- ...
- 50일차: 일반 지혜 2번째

**세 번째 라운드 (51일 이후):**

- 51일차: 유명인 명언 3번째
- 52일차: Java 3번째
- ...

### 주요 특징

1. **규칙적인 순환**: 25일마다 모든 카테고리를 한 번씩 순회
2. **균등한 노출**: 모든 카테고리가 공평하게 노출됨
3. **예측 가능성**: 특정 요일에는 항상 같은 카테고리 유형이 나옴
4. **무한 순환**: 모든 글귀를 다 사용해도 다시 처음부터 시작

### 기술적 구현

**시간 기준**: 한국 시간(UTC+9) 오전 9시 기준으로 날짜 변경

**계산 로직**:

```typescript
// 카테고리 결정: 25일 주기로 순환
const categoryIndex = daysSinceStart % 25;

// 글귀 선택: 각 카테고리 내에서 순환
const quoteRound = Math.floor(daysSinceStart / 25);
const quoteIndex = quoteRound % quotesInCategory.length;
```

**기준일**: 2025년 1월 1일부터 계산 시작

## 주요 변경사항

### 1. 카테고리 기반 구조

- 기존: 단순 랜덤 선택
- 개선: 체계적인 카테고리 순환

### 2. 예측 가능한 순서

- 학생들이 언제 어떤 종류의 글귀가 나올지 예상 가능
- 특정 언어 수업 전날에 해당 언어 글귀 확인 가능

### 3. 균형잡힌 노출

- 모든 기술 분야가 고르게 노출됨
- 특정 카테고리에 치우치지 않음

### 4. 확장성

- 새로운 카테고리 추가 시 `categoryOrder` 배열에만 추가하면 됨
- 각 카테고리별로 글귀 개수 제한 없음

## 커스터마이징 방법

### 카테고리 순서 변경

`constants/quotes.ts`의 `categoryOrder` 배열에서 순서 조정:

```typescript
export const categoryOrder = [
  "java", // Java를 첫 번째로
  "python", // Python을 두 번째로
  "famous", // 유명인 명언을 세 번째로
  // ... 나머지
];
```

### 새 카테고리 추가

1. `quoteCategories` 객체에 새 카테고리 추가
2. `categoryOrder` 배열에 추가
3. 자동으로 순환에 포함됨

### 글귀 추가/수정

각 카테고리별로 개별적으로 관리 가능:

```typescript
export const quoteCategories = {
  java: [
    "☕ 기존 글귀들...",
    "☕ 새로 추가할 글귀", // 간단히 추가
  ],
  // ...
};
```

### 변경 시간 조정

`RandomBanner.tsx`의 `getKoreanDate()` 함수에서:

```typescript
// 오전 9시 대신 다른 시간으로 변경
if (koreanTime.getHours() < 10) {
  // 오전 10시로 변경
  koreanTime.setDate(koreanTime.getDate() - 1);
}
```

## 예상 효과

1. **학습 계획성**: 특정 수업 전에 관련 글귀로 동기부여
2. **지속적 관심**: 25일 주기로 모든 분야 노출
3. **예측 가능성**: 학생들이 기다리는 재미 제공
4. **균형잡힌 학습**: 편중되지 않은 기술 분야 노출

이제 매일 체계적으로 다양한 프로그래밍 분야의 명언과 격려를 받을 수 있습니다! 🚀

# dev-course-materials

개발 과정 학습 자료

## 시작하기

1. 의존성 설치

```bash
pnpm install
```

2. 개발 서버 실행

```bash
pnpm dev
```

## Solutions 디렉토리 접근 (강사용)

답안 모음에 접근하려면:

1. `/projects/level-1/solutions` 경로로 이동
2. 비밀번호 입력: `teacher2024`
3. 한 번 입력하면 브라우저에 저장되어 계속 접근 가능
4. 로그아웃 버튼으로 접근 해제 가능

### 보안 특징

- **클라이언트 사이드 보호**: 간단한 비밀번호로 접근 제어
- **로컬 저장**: 한 번 인증하면 localStorage에 저장
- **배포 환경**: 환경변수 없이도 배포 사이트에서 동작
- **학생 차단**: 비밀번호를 모르는 학생들은 접근 불가

### 비밀번호 변경

`src/components/solutions-access.tsx` 파일의 `TEACHER_PASSWORD` 상수를 수정하면 비밀번호 변경 가능합니다.
