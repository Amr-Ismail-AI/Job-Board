import Link from "next/link"

function AdminJobPage() {
  return (
    <div>
        <h1>Admin Job Page</h1>
        <Link className="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600" href="/dashboard/jobs/new">New Job</Link>
        <Link className="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600" href="/dashboard/jobs/1">Job 1</Link>
        <Link className="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600" href="/dashboard/jobs/2">Job 2</Link>
        <Link className="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600" href="/dashboard/jobs/3">Job 3</Link>
    </div>
  )
}

export default AdminJobPage