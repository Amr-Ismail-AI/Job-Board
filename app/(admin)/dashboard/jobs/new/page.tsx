import Link from "next/link"

function NewJobPage() {
  return (
    <div>
        <h1>New Job Page</h1>
        <Link className="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600" href="/dashboard/jobs">Back To Jobs</Link>
    </div>
  )
}

export default NewJobPage