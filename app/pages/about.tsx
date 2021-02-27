import Link from 'next/link';

export default function About() {
	return (
		<div>
			<h1>About Page</h1>
			<Link href='/'>
				<button>Go to the index page</button>
			</Link>
		</div>
	);
}
