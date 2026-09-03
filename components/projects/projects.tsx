import { ArrowRight, Bot, LineChart, Sparkles } from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

import { FadeIn } from "@/components/ui/motion-primitives";

type Project = {
  id: string;
  icon: ComponentType<{ className?: string }>;
  iconLabel: string;
  title: string;
  description: string;
  meta: string;
  imageRatio: number;
  image: string;
  imageAlt: string;
  repo: string;
};

const PROJECTS: Project[] = [
  {
    id: "thematic-investing",
    icon: LineChart,
    iconLabel: "Thematic Investing",
    title: "AI thematic investing across the five-layer AI stack.",
    description:
      "An objective, layer-structured framework for classifying AI companies, mapping value migration, and building factor-based portfolios, with a falsifiable backtest against AI-index benchmarks.",
    meta: "Research, HTML",
    imageRatio: 800 / 451,
    image: "/thematic-investing.png",
    imageAlt: "Thematic investing framework preview",
    repo: "https://github.com/robinmak/thematic-investing",
  },
  {
    id: "esg-agentic-platform",
    icon: Bot,
    iconLabel: "ESG Agentic Platform",
    title: "An agentic AI platform that grades TCFD climate disclosures.",
    description:
      "A CrewAI crew of agents reads corporate sustainability and annual reports, scores each TCFD criterion, and grades overall disclosure quality.",
    meta: "Python, CrewAI",
    imageRatio: 3020 / 1702,
    image: "/esg-agentic-platform.png",
    imageAlt: "ESG agentic platform preview",
    repo: "https://github.com/robinmak/esg-agentic-platform",
  },
  {
    id: "chain-of-claims",
    icon: Sparkles,
    iconLabel: "Chain of Claims",
    title:
      "A benchmark and agentic pipeline for claim-evidence reasoning.",
    description:
      "An integrated benchmark and agentic pipeline for claim-evidence reasoning in LLM-generated financial-services documents.",
    meta: "Python, Benchmark",
    imageRatio: 1450 / 1034,
    image: "/chain-of-claims.png",
    imageAlt: "Chain of Claims benchmark preview",
    repo: "https://github.com/robinmak/chain-of-claims",
  },
];

export type ProjectsProps = {
  withHeadline?: boolean;
  viewMoreVisible?: boolean;
};

export function Projects({
  withHeadline = false,
  viewMoreVisible = false,
}: ProjectsProps): ReactNode {
  const items = viewMoreVisible ? PROJECTS.slice(0, 4) : PROJECTS;
  const showViewMore = viewMoreVisible && items.length < PROJECTS.length;

  return (
    <section className="relative w-full">
      <div className="mx-auto w-full max-w-275 px-6 sm:px-10">
        {withHeadline ? (
          <FadeIn className="flex flex-col items-center gap-5 pt-12 pb-10 text-center sm:pt-20 sm:pb-14">
            <h2 className="font-serif text-[2.5rem] font-medium leading-[1.05] tracking-tight text-foreground md:text-[3rem] lg:text-[3.5rem]">
              My projects
            </h2>
            <p className="max-w-[33ch] text-[18px] leading-[1.45] tracking-tight text-foreground/65 sm:text-[20px]">
              From playful experiments to thoughtful systems, a look at the
              work I&rsquo;m proud to have shipped.
            </p>
          </FadeIn>
        ) : null}

        <div className="columns-1 gap-6 md:columns-2 md:gap-7">
          {items.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {showViewMore ? (
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href="/projects"
              className="border border-foreground/8 focus-ring group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-foreground/5"
            >
              View all projects
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}): ReactNode {
  const Icon = project.icon;
  return (
    <FadeIn
      delay={Math.min(index * 0.06, 0.3)}
      className="mb-6 break-inside-avoid md:mb-7"
    >
      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${project.iconLabel} on GitHub`}
        className="focus-ring block rounded-3xl"
      >
        <article className="project-card flex cursor-pointer flex-col gap-4 rounded-3xl border border-foreground/8 bg-background p-3 sm:p-3.5">
          <header className="flex items-center gap-2.5 px-1 pt-2">
            <span className="border-foreground/10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border bg-background">
              <Icon
                className="h-3.5 w-3.5 text-foreground"
                aria-hidden="true"
              />
            </span>
            <span className="text-sm font-medium tracking-tight text-foreground">
              {project.iconLabel}
            </span>
          </header>

          <div
            className="project-card__image ring-foreground/5 relative w-full overflow-hidden rounded-2xl bg-foreground/5 ring-1"
            style={{ aspectRatio: project.imageRatio }}
          >
            <div className="project-card__image-inner">
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(min-width: 1024px) 540px, (min-width: 768px) 45vw, 100vw"
                className="object-cover"
                priority={index < 2}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2.5 px-1 pb-1">
            <h3 className="text-[20px] font-medium leading-[1.2] tracking-tight text-foreground sm:text-[22px]">
              {project.title}
            </h3>
            <p className="text-[14px] leading-normal tracking-tight text-foreground/65 sm:text-[15px]">
              {project.description}
            </p>
          </div>

          <p className="px-1 pb-2 text-[12px] tracking-tight text-foreground/50">
            {project.meta}
          </p>
        </article>
      </a>
    </FadeIn>
  );
}
