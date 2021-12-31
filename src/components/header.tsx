import Link from 'next/link'
import Head from 'next/head'
import ExtLink from './ext-link'
import { useRouter } from 'next/router'
import styles from '../styles/header.module.css'

const navItems: { label: string; page?: string; link?: string }[] = [
  { label: 'Home', page: '/' },
  { label: 'Blog', page: '/blog' },
  { label: 'Contact', page: '/contact' },
  {
    label: 'Source Code',
    link: 'https://github.com/foxytanuki/notion-blog',
  },
]

const ogImageUrl =
  'https://raw.githubusercontent.com/foxytanuki/notion-blog/main/public/og_image.png'
const siteName = 'たぬきつね'

const Header = ({ titlePre = '', pageTitle = '' }) => {
  const { pathname } = useRouter()

  return (
    <header className={styles.header}>
      <Head>
        <title>
          {titlePre ? `${titlePre} | ` : ''} {siteName}
        </title>
        <meta name="description" content="生産性の低い文章群" />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:type" content="article" />
        <meta name="twitter:site" content="@foxytanuki" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={ogImageUrl} />
      </Head>
      <ul>
        {navItems.map(({ label, page, link }) => (
          <li key={label}>
            {page ? (
              <Link href={page}>
                <a className={pathname === page ? 'active' : undefined}>
                  {label}
                </a>
              </Link>
            ) : (
              <ExtLink href={link}>{label}</ExtLink>
            )}
          </li>
        ))}
      </ul>
    </header>
  )
}

export default Header
