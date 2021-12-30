import Header from '../components/header'
import ExtLink from '../components/ext-link'

import sharedStyles from '../styles/shared.module.css'
import contactStyles from '../styles/contact.module.css'

import GitHub from '../components/svgs/github'
import Twitter from '../components/svgs/twitter'
import Envelope from '../components/svgs/envelope'
import LinkedIn from '../components/svgs/linkedin'

const contacts = [
  {
    Comp: Twitter,
    alt: 'twitter icon',
    link: 'https://twitter.com/foxytanuki',
  },
  {
    Comp: GitHub,
    alt: 'github icon',
    link: 'https://github.com/foxytanuki',
  },
  // {
  //   Comp: LinkedIn,
  //   alt: 'linkedin icon',
  //   link: '',
  // },
  {
    Comp: Envelope,
    alt: 'envelope icon',
    link: 'mailto:biz@foxytanuki.dev?subject=Notion Blog',
  },
]

export default function Contact() {
  return (
    <>
      <Header titlePre="Contact" />
      <div className={sharedStyles.layout}>
        <div className={contactStyles.avatar}>
          <img src="/avatar.png" alt="avatar with foxytanuki" height={60} />
        </div>

        <h1 style={{ marginTop: 0 }}>Contact</h1>

        <div className={contactStyles.name}>
          foxytanuki - Blockchain & Backend Developer
        </div>

        <div className={contactStyles.links}>
          {contacts.map(({ Comp, link, alt }) => {
            return (
              <ExtLink key={link} href={link} aria-label={alt}>
                <Comp height={32} />
              </ExtLink>
            )
          })}
        </div>
      </div>
    </>
  )
}
