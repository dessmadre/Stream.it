import { useRouter } from 'next/router';

export default function AuthForm({
	email,
	password,
	handleEmail,
	handlePassword,
	handleSubmit,
	error,
}) {
	const active = useRouter().pathname;

	return (
		<div className='w-screen h-screen flex justify-center items-center'>
			<div className='flex justify-center items-center px-12 py-12 bg-white w-2/6 h-2/5 rounded-md shadow'>
				<form className='w-full max-w-lg' onSubmit={handleSubmit}>
					{error && <p>{error}</p>}
					<div className='flex flex-wrap justify-center items-center'>
						<div className='mb-8'>
							<h3 className='text-3xl font-semibold'>
								{active === '/auth/signin' ? 'Sign In' : 'Register'}
							</h3>
						</div>
					</div>
					<div className='flex flex-wrap'>
						<div className='w-full'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='email'>
								Email
							</label>
							<input
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-300'
								id='email'
								type='email'
								required
								value={email}
								onChange={handleEmail}
							/>
						</div>
					</div>
					<div className='flex flex-wrap'>
						<div className='w-full'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='grid-password'>
								Password
							</label>
							<input
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-300'
								id='password'
								type='password'
								required
								value={password}
								onChange={handlePassword}
							/>
						</div>
					</div>
					<div className='flex'>
						<div className='w-4/5'>
							<button
								className='mt-3 shadow bg-blue-300 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
								type='submit'>
								{active === '/auth/signin' ? 'Sign in' : 'Register'}
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
