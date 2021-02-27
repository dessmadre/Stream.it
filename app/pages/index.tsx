import Container from 'components/Container';

export default function Index() {
	return (
		<Container>
			<div className='h-screen w-screen'>
				<div className='pt-10 flex justify-center flex-col flex-wrap items-center'>
					<h1 className='text-3xl font-semibold'>Welcome to Stream.it</h1>
					<p className='mt-5 text-xl'>
						Sign In or Register to start your stream collection
					</p>
				</div>
			</div>
		</Container>
	);
}
