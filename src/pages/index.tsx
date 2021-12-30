import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="" />
      <div className={sharedStyles.layout}>
        <img src="/og_image.png" width="350" alt="OG image of foxytanuki" />
        <h1>たぬきつね</h1>
      </div>
    </>
  )
}
