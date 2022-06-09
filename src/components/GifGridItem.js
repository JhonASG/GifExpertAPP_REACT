import React from 'react'
import PropsTypes from "prop-types";

export const GifGridItem = ({title, url}) => {
	return (
		<>
			<div data-testid='container' className='card animate__animated animate__rotateInDownLeft'>
				<img src={url} alt={title} />
				<p>{title}</p>
			</div>
		</>
	)
}

GifGridItem.propTypes = {
	title: PropsTypes.string.isRequired,
	url: PropsTypes.string.isRequired
}