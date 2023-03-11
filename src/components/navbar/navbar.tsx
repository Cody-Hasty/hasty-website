import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import powerIcon from '../../assets/icons/system-shutdown-panel.svg'
import { parseDate } from '../../utils/dateUtils'

export default function Navbar() {
	const [time, setTime] = useState(new Date())

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date())
		}, 1000)
		return () => {
			clearInterval(interval)
		}
	}, [])

	return (
		<div id="navbar">
			<div className="left">Places</div>
			<div className="middle">{parseDate(time)}</div>
			<Link to="/locked" className="right">
				<img src={powerIcon} alt="Power"/>
			</Link>
		</div>
	)
}
