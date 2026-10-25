# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 언어 및 커뮤니케이션 규칙
- 기본 응답 언어: 한국어
- 코드 주석: 한국어로 작성
- 커밋 메시지: 한국어로 작성
- 문서화: 한국어로 작성 (IMPORTANT)
- 변수명/함수명: 영어 (코드 표준 준수)

## 개발 명령어

```bash
npm run dev      # Turbopack으로 개발 서버 시작 (http://localhost:3000)
npm run build    # Turbopack으로 프로덕션 빌드
npm run start    # 프로덕션 서버 시작
npm run lint     # ESLint 실행
```

shadcn/ui 컴포넌트 추가:
```bash
npx shadcn@latest add <component-name>
```

## 아키텍처 개요

**Next.js v15 App Router** 기반 스타터킷.

- `src/app/` — App Router 라우트. `layout.tsx`에서 모든 페이지에 `<Header>`, `<Footer>` 공통 적용
- `src/components/layout/` — 공통 레이아웃 컴포넌트 (Header, Footer)
- `src/components/ui/` — shadcn/ui 컴포넌트 (Button, Card, Badge, Sheet, Separator 등)
- `src/lib/utils.ts` — `cn` 유틸리티 (`cn` 패키지에서 re-export)

## 주요 기술 스택

- **Next.js 15** + **React 19** (App Router, Turbopack)
- **TailwindCSS v4**: `@import "tailwindcss"` 방식 사용 (v3의 `@tailwind` 지시어 불사용). CSS 변수로 테마 정의
- **shadcn/ui**: `base-nova` 스타일, `lucide-react` 아이콘. `components.json`으로 설정
- **다크모드**: `.dark` 클래스 기반, CSS 변수로 색상 전환. `@custom-variant dark (&:is(.dark *))`

## TailwindCSS v4 주의사항

v4는 CSS 설정 파일(`tailwind.config.js`) 없이 `globals.css`의 `@theme inline` 블록에서 직접 토큰 정의. `shadcn/tailwind.css`를 import하면 shadcn CSS 변수가 Tailwind 색상 토큰으로 자동 등록됨.

