export default function Container({ children }) {
	return (
		<main className='min-h-screen w-screen px-12 mx-auto bg-gray-100'>
			{children}
		</main>
	);
}
