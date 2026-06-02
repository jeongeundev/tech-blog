# 🌐 Jeongeun Dev Blog

개발자 jeongeun의 기술 블로그
개발 공부 기록과 프로젝트 과정, 취업 준비 여정을 담고 있습니다.
Next.js와 Tailwind CSS로 직접 구성하고 Vercel에 배포한 블로그입니다.

---

## 🧭 블로그 주소

https://tech-blog-nu-tan.vercel.app

---

## ✍️ 블로그 주요 콘텐츠

- 🧪 **Projects**: 개인 프로젝트 설계 및 구현 기록
- 📌 **Study**: 백엔드 개발, ADP 자격증, 웹 개발 학습 기록
- 📝 **Blog**: 전체 글 목록

---

## 🛠️ 사용 스택

| 구성 요소 | 기술 |
|-----------|------|
| 프레임워크 | Next.js 15 (App Router) |
| 스타일링 | Tailwind CSS |
| 콘텐츠 관리 | Contentlayer + MDX |
| 배포 플랫폼 | Vercel |
| 기반 템플릿 | tailwind-nextjs-starter-blog |

---

## 📁 폴더 구조

```
.
├── app/                # Next.js 페이지 및 라우팅
├── components/         # 공통 컴포넌트
├── data/
│   ├── blog/           # 블로그 포스트 (.mdx)
│   ├── authors/        # 작성자 정보
│   ├── siteMetadata.js # 사이트 전역 설정
│   ├── projectsData.ts # 프로젝트 목록
│   └── studyData.ts    # 공부 카테고리 목록
├── public/             # 이미지 등 정적 파일
└── layouts/            # 포스트 레이아웃 템플릿
```

---

## 🚀 로컬 실행 방법

```bash
# 1. 의존성 설치
npm install

# 2. 로컬 서버 실행
npm run dev

# 3. 브라우저에서 확인
http://localhost:3000
```

---

## ✏️ 블로그 글 작성

`data/blog/` 폴더에 `.mdx` 파일을 추가하면 자동으로 페이지가 생성됩니다.

```mdx
---
title: '글 제목'
date: '2026-06-02'
tags: ['태그']
draft: false
summary: '한 줄 요약'
---

본문 내용
```

> `draft: true`로 설정하면 로컬에서만 보이고 배포 시 제외됩니다.

### 태그 규칙

| 태그 | 용도 |
|------|------|
| `job-crawler` | 채용공고 크롤링 프로젝트 |
| `backend` | 백엔드 공부 |
| `adp` | ADP 자격증 |
| `webdev` | 웹 개발 / 블로그 운영 |
