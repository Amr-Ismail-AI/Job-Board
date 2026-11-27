import Link from "next/link"

type Props = {
    params: Promise<{ jobId: string }>
}

async function EditJobPage({ params } : Props ) {

    const { jobId } = await params
    console.log(jobId)

  return (
    <div>
        <h1>Edit Job Page</h1>
        <Link className="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600" href={`/dashboard/jobs`}>Back to Jobs</Link>    
    </div>
  )
}

export default EditJobPage