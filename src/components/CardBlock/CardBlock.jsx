import React from 'react'
import Card from '../Card/Card'
import cards from '../../data'
import styles from './CardBlock.module.scss'

const CardBlock = () => {
	return (
		<section className={styles.CardBlock} >
			{
				cards && cards.map((card)=>(
					<Card key={card.id} {...card} className={styles.card} classContent={styles.content} />
				))
			}
		</section>
	)
}

export default CardBlock
