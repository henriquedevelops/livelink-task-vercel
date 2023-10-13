import { FC } from 'react'
import styles from './page.module.css'
import LogoSVG from '@/components/LogoSVG/LogoSVG'
import CreatorCard from '@/components/CreatorCard/CreatorCard'
import creatorsData from '@/utils/creatorsData'

const Home: FC = () => {
  return (
    <main className={styles.main}>
      <LogoSVG />

      <div className={styles.creatorCardsWrapper}>
        {creatorsData.map((creator) => (
          <CreatorCard
            creatorName={creator.name}
            imageSrc={creator.imageSrc}
            imageAlt={creator.imageAlt}
            textTitle={creator.textTitle}
            text={creator.text}
            key={creator.id}
          />
        ))}
      </div>
    </main>
  )
}

export default Home
