import { useRef, useEffect } from 'react';
import '../styles/slider.scss';

export function Slider() {
	const childrenLength = 4;

	let counter = 0;

	const slidesContainer = useRef(null);

	const slide = (next = true) => {
		if (counter >= 0 && counter < childrenLength - 1)
			counter++;
		else
			counter = 0;
		slidesContainer.current.style.setProperty('--slide', -counter);
	}

	useEffect(() => {
		const intervalID = window.setInterval(slide, 5000);

		return () => {
			window.clearInterval(intervalID);
		}
	}, []);

	return (
		<div className='slider'>
			<div className='slider__container' ref={slidesContainer}>
				<img src="./assets/banner.jpg" alt="" />
				<img src="./assets/banner.jpg" alt="" />
				<img src="./assets/banner.jpg" alt="" />
				<img src="./assets/banner.jpg" alt="" />
			</div>
		</div>
	)
}