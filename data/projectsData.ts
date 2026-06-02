interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: '채용공고 트렌드 분석',
    description:
      '점핏·사람인 등에서 개발자 채용공고를 매일 수집해 기술 스택, 연봉, 경력 요건 트렌드를 분석하는 데이터 파이프라인 프로젝트.',
    href: '/tags/job-crawler',
  },
]

export default projectsData
