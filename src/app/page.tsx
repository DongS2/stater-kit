import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// 기술스택 소개 카드 데이터
const features = [
  {
    icon: Zap,
    title: "Next.js v15",
    description: "App Router, Server Components, 최신 React 기능 지원",
    badge: "v15.5",
  },
  {
    icon: Sparkles,
    title: "TailwindCSS v4",
    description: "CSS 기반 설정, 더 빠른 빌드, oklch 색공간 지원",
    badge: "v4",
  },
  {
    icon: Shield,
    title: "shadcn/ui",
    description: "접근성을 고려한 Radix UI 기반 재사용 컴포넌트",
    badge: "Tailwind v4 지원",
  },
];

// 홈페이지 - 기술스택 쇼케이스
export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* 히어로 섹션 */}
      <section className="text-center py-16">
        <Badge variant="outline" className="mb-4">
          Claude Next.js Starter Kit
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          빠르게 시작하는
          <br />
          <span className="text-primary/80">Next.js 개발 환경</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Next.js v15, TailwindCSS v4, shadcn/ui가 사전 구성된
          프로덕션 레디 스타터킷입니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/demo" className={cn(buttonVariants({ size: "lg" }))}>
            데모 보기 <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <Button size="lg" variant="outline">
            GitHub에서 보기
          </Button>
        </div>
      </section>

      <Separator className="my-12" />

      {/* 기술스택 소개 카드 */}
      <section>
        <h2 className="text-2xl font-semibold text-center mb-8">
          포함된 기술 스택
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <Icon className="h-8 w-8 text-primary" />
                    <Badge variant="secondary">{feature.badge}</Badge>
                  </div>
                  <CardTitle className="mt-3">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      <Separator className="my-12" />

      {/* Button 변형 쇼케이스 */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Button 컴포넌트</h2>
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      <Separator className="my-12" />

      {/* Badge 변형 쇼케이스 */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Badge 컴포넌트</h2>
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </section>
    </div>
  );
}
