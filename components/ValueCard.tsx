import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ValueCardProps {
  title: string;
  description: string;
  badge?: string;
}

export function ValueCard({ title, description, badge }: ValueCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        {badge && (
          <Badge variant="default" className="w-fit mb-2">
            {badge}
          </Badge>
        )}
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-text">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

