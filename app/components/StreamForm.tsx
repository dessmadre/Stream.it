import { useRouter } from 'next/router';

export default function StreamForm({
	handleSubmit,
	title,
	handleTitle,
	description,
	handleDescription,
	url,
	handleUrl,
	handleDelete,
}) {
	const active = useRouter().pathname;

	return (
		<div className='w-screen h-screen flex justify-center items-center'>
			<div className='flex justify-center items-center px-12 py-6 bg-white w-2/6 h-3/5 rounded-md shadow'>
				<form className='w-full max-w-lg' onSubmit={handleSubmit}>
					<div className='flex flex-wrap justify-center items-center'>
						<div className='mb-8'>
							<h3 className='text-3xl font-semibold'>
								{active === '/streams/new'
									? 'Create New Stream'
									: 'Edit Stream'}
							</h3>
						</div>
					</div>
					<div className='flex flex-wrap'>
						<div className='w-full'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='title'>
								Title
							</label>
							<input
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-300'
								id='title'
								type='text'
								required
								value={title}
								onChange={handleTitle}
								autoComplete='off'
							/>
						</div>
					</div>
					<div className='flex flex-wrap'>
						<div className='w-full'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='description'>
								Description
							</label>
							<input
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-300'
								id='description'
								type='text'
								required
								value={description}
								onChange={handleDescription}
								autoComplete='off'
							/>
						</div>
					</div>
					<div className='flex flex-wrap'>
						<div className='w-full'>
							<label
								className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
								htmlFor='url'>
								url
							</label>
							<input
								className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-300'
								id='url'
								type='text'
								required
								value={url}
								onChange={handleUrl}
								autoComplete='off'
							/>
						</div>
					</div>
					<div className='flex'>
						<div className='w-full flex justify-between'>
							<button
								className='mt-3 shadow bg-blue-400 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
								type='submit'>
								{active === '/streams/new' ? 'Create Stream' : 'Edit Stream'}
							</button>
							{active === '/streams/edit/[id]' && (
								<button
									className='mt-3 shadow bg-red-400 hover:bg-red-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
									onClick={handleDelete}>
									{' '}
									Delete Stream
								</button>
							)}
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
