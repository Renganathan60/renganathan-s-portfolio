import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { PageTransition } from "@/components/PageTransition";

const title = "Renganathan S — Frontend Developer";
const description =
  "Frontend developer building responsive, high-performance React and JavaScript web applications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <PageTransition className="pt-0 sm:pt-0">
      <Hero />
    </PageTransition>
  );
}
