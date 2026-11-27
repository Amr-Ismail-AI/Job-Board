import Link from "next/link"

function ApplicationsPage() {
  return (
    <div>
        <h1>Application Page</h1>
        <Link className="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600" href="/dashboard/applications/1">Applications 1</Link>
        <Link className="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600" href="/dashboard/applications/2">Applications 2</Link>
        <Link className="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600" href="/dashboard/applications/3">Applications 3</Link>
    </div>

  )
}

export default ApplicationsPage