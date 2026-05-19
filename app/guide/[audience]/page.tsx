import { notFound } from "next/navigation";
import { GuidePage } from "@/components/GuidePage";
import { audiences, getAudience } from "@/data/audiences";

type GuideRouteProps = {
  params: Promise<{
    audience: string;
  }>;
};

export function generateStaticParams() {
  return audiences.map((audience) => ({
    audience: audience.slug,
  }));
}

export async function generateMetadata({ params }: GuideRouteProps) {
  const { audience: slug } = await params;
  const audience = getAudience(slug);

  if (!audience) {
    return {
      title: "Guide Not Found | YihengOS",
    };
  }

  return {
    title: `${audience.title} | YihengOS`,
    description: audience.guideIntro,
  };
}

export default async function AudienceGuideRoute({ params }: GuideRouteProps) {
  const { audience: slug } = await params;
  const audience = getAudience(slug);

  if (!audience) {
    notFound();
  }

  return <GuidePage audience={audience} />;
}
