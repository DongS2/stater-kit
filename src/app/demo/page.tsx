import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Bell,
  Check,
  Star,
  Users,
  TrendingUp,
  Package,
} from "lucide-react";

// 통계 데이터 예시
const stats = [
  { label: "총 사용자", value: "12,345", icon: Users, change: "+12%" },
  { label: "월간 성장", value: "23.5%", icon: TrendingUp, change: "+5.2%" },
  { label: "패키지 수", value: "42", icon: Package, change: "+3" },
  { label: "평점", value: "4.9", icon: Star, change: "★★★★★" },
];

// 알림 데이터
const notifications = [
  { type: "성공", message: "배포가 완료되었습니다.", variant: "default" as const },
  { type: "정보", message: "새 업데이트가 있습니다.", variant: "secondary" as const },
  { type: "경고", message: "스토리지 용량이 부족합니다.", variant: "destructive" as const },
];

// 요금제 데이터
const plans = [
  {
    name: "무료",
    price: "₩0",
    features: ["프로젝트 1개", "10GB 스토리지", "커뮤니티 지원"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "₩9,900",
    features: ["무제한 프로젝트", "100GB 스토리지", "우선 지원"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "문의",
    features: ["무제한 모든 것", "전담 지원", "SLA 보장"],
    highlighted: false,
  },
];

// 데모 페이지 - 다양한 shadcn/ui 컴포넌트 활용 패턴
export default function DemoPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">컴포넌트 데모</h1>
        <p className="text-muted-foreground">
          shadcn/ui와 lucide-react 아이콘을 활용한 UI 패턴 예시입니다.
        </p>
      </div>

      {/* 통계 대시보드 패턴 */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">통계 대시보드 패턴</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card key={stat.label}>
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardDescription className="text-xs">{stat.label}</CardDescription>
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      <Separator className="my-8" />

      {/* 알림 카드 패턴 */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">알림 카드 패턴</h2>
        <div className="max-w-md space-y-3">
          {notifications.map((notification) => (
            <Card key={notification.type}>
              <CardContent className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-3">
                  <Bell className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-sm font-medium">{notification.type}</p>
                    <p className="text-xs text-muted-foreground">{notification.message}</p>
                  </div>
                </div>
                <Badge variant={notification.variant}>확인</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-8" />

      {/* 요금제 카드 패턴 */}
      <section>
        <h2 className="text-xl font-semibold mb-4">요금제 카드 패턴</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.highlighted ? "border-primary shadow-md" : ""}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>{plan.name}</CardTitle>
                  {plan.highlighted && <Badge>추천</Badge>}
                </div>
                <p className="text-3xl font-bold">{plan.price}</p>
                {plan.price !== "문의" && (
                  <CardDescription>/월</CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  시작하기
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
