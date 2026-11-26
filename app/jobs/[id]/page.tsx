import { Suspense } from "react";

type Props = {
  params: Promise<{ id: string }>;
};

// Component responsible for reading dynamic params
async function JobDetails({ params }: Props) {
  const { id } = await params;

  return (
    <div className="flex flex-col items-center border-2 p-4">
      <h2 className="text-2xl font-bold">Job Name Details</h2>

      <p className="text-gray-500">Remote Position</p>

      <p>Job ID: {id}</p>
    </div>
  );
}

export default function JobPageDetails({ params }: Props) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">Job Page Details</h1>

      <Suspense fallback={<p>Loading job details...</p>}>
        <JobDetails params={params} />
      </Suspense>
    </main>
  );
}