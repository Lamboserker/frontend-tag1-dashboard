import { FolderKanban, LayoutDashboard, ListTodo, Settings } from "lucide-react"
import { cn } from "@/lib/utils"

// Die Einträge der Seitenleiste.
// "active: true" markiert die Seite, auf der wir uns gerade befinden.
const menuItems = [
  { label: "Dashboard", icon: <LayoutDashboard className="size-4" />, active: true },
  { label: "Projekte", icon: <FolderKanban className="size-4" />, active: false },
  { label: "Aufgaben", icon: <ListTodo className="size-4" />, active: false },
  { label: "Einstellungen", icon: <Settings className="size-4" />, active: false },
]

export function Sidebar() {
  return (
    // "hidden md:flex" bedeutet: Auf kleinen Bildschirmen ist die Sidebar
    // versteckt, ab der Bildschirmbreite "md" wird sie angezeigt.
    <aside className="hidden w-64 shrink-0 flex-col border-r bg-sidebar p-4 md:flex">
      {/* Logo */}
      <div className="mb-8 flex items-center gap-2 px-2">
        <div className="flex size-8 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground">
          M
        </div>
        <span className="text-lg font-semibold">MyDashboard</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1">
        {menuItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
              item.active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {item.icon}
            {item.label}
          </a>
        ))}
      </nav>

      {/* Kleiner Hinweis am unteren Rand */}
      <div className="mt-auto rounded-lg bg-muted p-3 text-xs text-muted-foreground">
        Frontend Tag 1 – Übungsprojekt
      </div>
    </aside>
  )
}
