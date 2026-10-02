import { CircleCheck, FolderKanban, ListTodo, Plus } from "lucide-react"
import { DailyProgress } from "@/components/dashboard/DailyProgress"
import { DashboardHeader } from "@/components/dashboard/DashboardHeader"
import { Sidebar } from "@/components/dashboard/Sidebar"
import { StatCard } from "@/components/dashboard/StatCard"
import { TaskList } from "@/components/dashboard/TaskList"
import { Button } from "@/components/ui/button"
import { stats, tasks, userName } from "@/data/mockData"

// App ist die zentrale Komponente: Hier wird das Dashboard
// aus den einzelnen Bausteinen (Komponenten) zusammengesetzt.
function App() {
  return (
    <div className="flex min-h-screen bg-muted/40">
      {/* Linke Seitenleiste */}
      <Sidebar />

      {/* Rechter Bereich mit Header und Inhalt */}
      <div className="flex min-w-0 flex-1 flex-col">
        {/* TODO Aufgabe 1:
            Ändere den Titel des Dashboards. */}
        <DashboardHeader title="Dashboard" userName={userName} />

        <main className="flex-1 space-y-6 p-6">
          {/* Überschrift und Aktions-Button */}
          <section className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Übersicht</h2>
              <p className="text-sm text-muted-foreground">
                Alle wichtigen Zahlen auf einen Blick.
              </p>
            </div>

            <div>
              <Button>
                <Plus />
                Neue Aufgabe
              </Button>

              {/* TODO Aufgabe 4:
                  Füge hier einen weiteren Button hinzu und probiere
                  verschiedene Varianten aus (Prop "variant"). */}
            </div>
          </section>

          {/* Statistik-Karten (KPIs) */}
          <section>
            {/* TODO Aufgabe 6:
                Auf dem Handy sollen die Karten untereinander stehen,
                auf größeren Bildschirmen nebeneinander.
                Tipp: Passe die "grid-cols-..."-Klasse an und
                verwende die Präfixe sm:, md: oder lg:. */}
            <div className="grid grid-cols-3 gap-4">
              <StatCard
                title="Aktive Projekte"
                value={stats.activeProjects}
                icon={<FolderKanban className="size-4" />}
              />
              <StatCard
                title="Offene Aufgaben"
                value={stats.openTasks}
                icon={<ListTodo className="size-4" />}
                description="Über alle Projekte hinweg"
              />
              <StatCard
                title="Erledigt diese Woche"
                value={stats.completedThisWeek}
                icon={<CircleCheck className="size-4" />}
              />

              {/* TODO Aufgabe 3:
                  Füge hier eine weitere StatCard mit eigenem Titel,
                  eigenem Wert und passendem Icon hinzu. */}
            </div>
          </section>

          {/* Aufgabenliste und Tagesfortschritt */}
          <section className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <TaskList tasks={tasks} />
            </div>
            <DailyProgress />
          </section>

          {/* TODO Aufgabe 1:
              Füge hier einen eigenen kleinen Informationsbereich hinzu –
              zum Beispiel eine <section> mit einer Überschrift (<h2>)
              und einem Absatz (<p>). */}
        </main>
      </div>
    </div>
  )
}

export default App
