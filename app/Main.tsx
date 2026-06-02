import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'
import projectsData from '@/data/projectsData'
import studyData from '@/data/studyData'
import Image from '@/components/Image'

const MAX_DISPLAY = 5

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
            <Image
              src="/static/images/avatar.png"
              alt="avatar"
              width={120}
              height={120}
              className="rounded-full"
            />
            <div className="space-y-2 text-center sm:text-left">
              <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
                {siteMetadata.author}
              </h1>
              <p className="text-lg text-gray-500 dark:text-gray-400">
                {siteMetadata.description}
              </p>
              <div className="flex justify-center gap-4 sm:justify-start">
                <Link
                  href={siteMetadata.github}
                  className="text-sm text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  GitHub →
                </Link>
                <Link
                  href="/about"
                  className="text-sm text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  About →
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="py-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  Projects
                </h2>
                <Link
                  href="/projects"
                  className="text-sm text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  All →
                </Link>
              </div>
              <ul className="space-y-3">
                {projectsData.map((p) => (
                  <li key={p.title}>
                    <Link
                      href={p.href ?? '/projects'}
                      className="font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                    >
                      {p.title}
                    </Link>
                    <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                      {p.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  Study
                </h2>
                <Link
                  href="/study"
                  className="text-sm text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                >
                  All →
                </Link>
              </div>
              <ul className="space-y-3">
                {studyData.map((s) => (
                  <li key={s.title}>
                    <Link
                      href={s.href}
                      className="font-medium text-gray-900 hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                    >
                      {s.title}
                    </Link>
                    <p className="mt-0.5 text-sm text-gray-500 dark:text-gray-400">
                      {s.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-2 pt-6 pb-4 md:space-y-5">
          <h2 className="text-2xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-10 dark:text-gray-100">
            Latest
          </h2>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl leading-8 font-bold tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read more: "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base leading-6 font-medium">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
