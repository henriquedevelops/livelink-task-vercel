'use client'

import React, { FC, useState } from 'react'
import styles from './CreatorCard.module.css'
import AnimateHeight from 'react-animate-height'

interface Props {
  imageSrc: string
  imageAlt: string
  creatorName: string
  textTitle: string
  text: string
}

const CreatorCard: FC<Props> = ({
  imageSrc,
  imageAlt,
  creatorName,
  textTitle,
  text,
}) => {
  const [height, setHeight] = useState<number | 'auto'>(0)

  return (
    <article
      className={styles.creatorCard}
      onClick={() => setHeight(height === 0 ? 'auto' : 0)}
      role="button"
    >
      <img className={styles.image} src={imageSrc} alt={imageAlt} />
      <div>
        <p className={styles.name}>{creatorName}</p>
        <p className={styles.textTitle}>{textTitle}</p>
        <AnimateHeight height={height}>{text}</AnimateHeight>
      </div>
    </article>
  )
}

export default CreatorCard
