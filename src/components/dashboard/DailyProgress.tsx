import { CircleCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

// TODO Aufgabe 5:
// Im Moment steht hier immer "0" und der Button macht noch nichts.
// So gehst du vor:
//   1. Importiere useState aus "react".
//   2. Lege innerhalb der Komponente eine State-Variable für die Anzahl an.
//   3. Zeige die State-Variable statt der festen 0 an.
//   4. Gib dem Button ein onClick, das den Wert um 1 erhöht.
// Ein kleines useState-Beispiel findest du in der README.md.

export function DailyProgress() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tagesfortschritt</CardTitle>
        <CardDescription>Wie viel hast du heute schon geschafft?</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-lg">
          Heute erledigte Aufgaben: <span className="font-bold">0</span>
        </p>

        <Button className="w-full">
          <CircleCheck />
          Aufgabe abschließen
        </Button>

        {/* TODO Aufgabe 5 (optional):
            Ergänze einen zweiten Button, der den Zähler wieder auf 0 setzt. */}
      </CardContent>
    </Card>
  )
}
