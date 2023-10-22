"use client"

import React, { useState, useEffect } from 'react'
import Link from '@/utils/Link'
import powerIcon from '@icons/system-shutdown-panel.svg'
import { parseDate } from '@/utils/dateUtils'
import Image from 'next/image'

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
				<Image src={powerIcon} alt="Power" width={16} height={16} />
			</Link>
		</div>
	)
}
