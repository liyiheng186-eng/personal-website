import { SystemPage } from "@/components/SystemPage";
import { systemPages } from "@/data/systemPages";

type SystemRouteProps = {
  searchParams: Promise<{
    from?: string;
  }>;
};

export default async function AboutPage({ searchParams }: SystemRouteProps) {
  const { from } = await searchParams;

  return (
    <SystemPage
      from={from}
      {...systemPages.about}
    />
  );
}
