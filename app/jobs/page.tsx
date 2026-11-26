import Link from 'next/link'

function JobPage() {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-4xl font-bold'>Job Page</h1>
      <div className='flex flex-col justify-center items-center border-2 border-white p-2'>
        <h2 className='text-2xl font-bold'>Job Name</h2>
        <p className='text-gray-500'>Remote Position</p>
        <Link className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600" href="/jobs/1">Job View</Link>
      </div>
    </div>
  )
}

export default JobPage