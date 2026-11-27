import { Suspense } from "react";
import Link from "next/link";

type Props = {
  params: Promise<{ jobId: string }>;
};

async function AdminDetailsContent({ params }: Props) {
  const { jobId } = await params;

  console.log(jobId);

  return (
    <div>
      <h1>Admin Details</h1>

      <Link
        className="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600"
        href={`/dashboard/jobs/${jobId}/edit`}
      >
        Edit Job
      </Link>

      <Link
        className="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600"
        href="/dashboard/jobs"
      >
        Back to Jobs
      </Link>
    </div>
  );
}

export default function AdminDetailsPage({ params }: Props) {
  return (
    <Suspense fallback={<p>Loading job details...</p>}>
      <AdminDetailsContent params={params} />
    </Suspense>
  );
}