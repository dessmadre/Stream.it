type VideoProps = {
	url: string;
};

export default function Video({ url }: VideoProps) {
	return (
		<div className='iframe__container'>
			<iframe
				className=' border-0 h-full left-0 absolute top-0 w-full'
				src={url}
				frameBorder='0'
				allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
				allowFullScreen
				loading='lazy'></iframe>
		</div>
	);
}
