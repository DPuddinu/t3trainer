import { type ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "~/components/primitives/ui/card";


type CardInfoType = {
  title: ReactNode,
  description: ReactNode,
  content: ReactNode,
  onClick: () => void,
}
export function CardInfo({ content, description, onClick, title }: CardInfoType) {

  return <Card className="w-full sm:max-w-sm" onClick={onClick}>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>{content}</CardContent>
  </Card>
}