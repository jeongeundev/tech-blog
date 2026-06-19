interface StudyCategory {
  title: string
  description: string
  href: string
}

const studyData: StudyCategory[] = [
  {
    title: 'AI',
    description: 'LLM·에이전트 등 AI 전반 지식과, 실제 프로젝트에 적용하며 정리한 학습 기록.',
    href: '/tags/ai',
  },
  {
    title: 'Backend',
    description: 'FastAPI, PostgreSQL, REST API 설계 등 백엔드 개발 공부 기록.',
    href: '/tags/backend',
  },
  {
    title: '자격증',
    description: 'ADP, 정보처리기사 등 데이터·개발 자격증 준비 과정 기록.',
    href: '/tags/certification',
  },
  {
    title: 'Web Dev',
    description: 'Next.js, Tailwind CSS 등 이 블로그를 만들고 운영하면서 배운 웹 개발 기록.',
    href: '/tags/webdev',
  },
]

export default studyData
