import { Suspense } from "react";
import Link from "next/link";

type Props = {
  params: Promise<{ applicationId: string }>;
};

async function ApplicationDetailsContent({ params }: Props) {
  const { applicationId } = await params;

  return (
    <div>
      <h1>Application Details Page</h1>

      <Link
        className="bg-blue-500 p-2 rounded-md text-white hover:bg-blue-600"
        href={`/dashboard/applications/${applicationId}/review`}
      >
        Review Applications
      </Link>
    </div>
  );
}

export default function ApplicationDetailsPage({ params }: Props) {
  return (
    <Suspense fallback={<p>Loading application details...</p>}>
      <ApplicationDetailsContent params={params} />
    </Suspense>
  );
}