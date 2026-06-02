interface StudyCategory {
  title: string
  description: string
  href: string
}

const studyData: StudyCategory[] = [
  {
    title: 'Backend',
    description: 'FastAPI, PostgreSQL, REST API 설계 등 백엔드 개발 공부 기록.',
    href: '/tags/backend',
  },
  {
    title: 'ADP',
    description: '데이터 분석 전문가(ADP) 자격증 준비 과정',
    href: '/tags/adp',
  },
  {
    title: 'Web Dev',
    description: 'Next.js, Tailwind CSS 등 이 블로그를 만들고 운영하면서 배운 웹 개발 기록.',
    href: '/tags/webdev',
  },
]

export default studyData
