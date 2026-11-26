
type Props = {
    params: Promise<{ id: string }>
}

async function JobPageDetails({ params } : Props) {

    const { id } = await params
    console.log(id)

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-4xl font-bold'>Job Page Details</h1>
      <div className='flex flex-col justify-center items-center border-2 border-white p-2'>
        <h2 className='text-2xl font-bold'>Job Name Details</h2>
        <p className='text-gray-500'>Remote Position</p>
        <p>We are looking for frontend developer</p>
      </div>
    </div>
  )
}

export default JobPageDetails