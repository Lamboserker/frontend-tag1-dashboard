import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Task } from "@/data/mockData"

type TaskListProps = {
  tasks: Task[]
}

export function TaskList({ tasks }: TaskListProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Aktuelle Aufgaben</CardTitle>
        <CardDescription>Deine nächsten To-dos im Überblick</CardDescription>
      </CardHeader>

      <CardContent>
        {/* TODO Aufgabe 4:
            Füge hier ein Suchfeld mit der Input-Komponente ein.
            Der Placeholder soll "Aufgaben suchen ..." lauten.
            Tipp: Die Komponente liegt in src/components/ui/input.tsx
            und muss oben in dieser Datei importiert werden. */}

        {/* .map() geht jede Aufgabe der Liste durch
            und erzeugt dafür einen Listeneintrag (<li>). */}
        <ul className="divide-y">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center justify-between gap-4 py-3">
              <div>
                <p className="font-medium">{task.title}</p>
                <p className="text-sm text-muted-foreground">
                  {task.project} · fällig am {task.dueDate}
                </p>
              </div>

              {/* Status-Badge: Je nach Status wird eine andere Variante verwendet. */}
              <Badge variant={task.status === "Erledigt" ? "secondary" : "default"}>
                {task.status}
              </Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
