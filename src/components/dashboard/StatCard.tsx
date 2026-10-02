import type { ReactNode } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Diese Props kann man der StatCard übergeben.
// Das Fragezeichen bei "icon?" und "description?" bedeutet: optional.
// Man darf diese Props also auch weglassen.
type StatCardProps = {
  title: string
  value: number | string
  icon?: ReactNode
  description?: string
}

export function StatCard({ title, value, icon, description }: StatCardProps) {
  return (
    // TODO Aufgabe 2:
    // Passe das Styling dieser Karte mithilfe von Tailwind CSS an,
    // z. B. Hintergrundfarbe, Rahmen oder Textfarbe.
    // Tipp: Du kannst der <Card> ein eigenes className geben.
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold">{value}</p>
        {description && (
          <p className="mt-1 text-xs text-muted-foreground">{description}</p>
        )}
      </CardContent>
    </Card>
  )
}
