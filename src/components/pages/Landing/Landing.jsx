import React from 'react'
import classNames from 'classnames'
import Header from '../../Header/Header'
import CardBlock from '../../CardBlock/CardBlock'
import styles from './Landing.module.scss'

const Landing = () => {
	return (
		<main className={styles.Landing} >
			<Header/>
			<CardBlock/>
		</main>
	)
}

export default Landing
