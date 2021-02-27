import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from 'lib/useAuth';

export default function Header() {
	const { user } = useAuth();
	const active = useRouter().pathname;

	const links = [
		!user && { label: 'Sign In', href: '/auth/signin' },
		!user && { label: 'Sign Up', href: '/auth/signup' },
		user && { label: 'Streams', href: '/streams' },
		user && { label: 'Create', href: '/streams/new' },
		user && { label: 'Sign Out', href: '/auth/signout' },
	]
		.filter(link => link)
		.map(({ label, href }) => {
			return (
				<Link href={href} key={href}>
					<a
						className={`ml-7 font-semibold pt-1 pb-2 px-5  ${
							active === href ? 'bg-gray-200' : 'bg-white'
						} hover:bg-gray-200 rounded-full`}>
						{label}
					</a>
				</Link>
			);
		});

	return (
		<nav className='bg-blue-200 pt-3 pb-4 px-12 z-50 w-screen shadow relative'>
			<div className='flex justify-between items-center'>
				<div>
					<Link href='/'>
						<a className='text-xl text-gray-700 font-semibold cursor-pointer'>
							Stream.it
						</a>
					</Link>
				</div>
				<div>{links}</div>
			</div>
		</nav>
	);
}
