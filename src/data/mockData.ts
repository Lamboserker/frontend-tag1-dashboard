// Mock-Daten = erfundene Beispieldaten.
// In einem echten Projekt kämen diese Daten später aus einer Datenbank
// oder von einem Server. Heute arbeiten wir nur mit diesen lokalen Werten.

// Ein "type" beschreibt, wie ein Objekt aufgebaut ist.
// So weiß TypeScript, welche Eigenschaften eine Aufgabe hat.
export type TaskStatus = "Offen" | "Erledigt"

export type Task = {
  id: number
  title: string
  project: string
  dueDate: string
  status: TaskStatus
}

// Name des angemeldeten Benutzers (nur ein Platzhalter).
export const userName = "Alex"

// Kennzahlen für die Statistik-Karten.
export const stats = {
  activeProjects: 4,
  openTasks: 9,
  completedThisWeek: 12,
  teamMembers: 5,
}

// Liste der aktuellen Aufgaben.
export const tasks: Task[] = [
  {
    id: 1,
    title: "Startseite gestalten",
    project: "Website-Relaunch",
    dueDate: "06.10.2026",
    status: "Offen",
  },
  {
    id: 2,
    title: "Logo-Varianten abstimmen",
    project: "Website-Relaunch",
    dueDate: "07.10.2026",
    status: "Erledigt",
  },
  {
    id: 3,
    title: "Kontaktformular testen",
    project: "Kundenportal",
    dueDate: "08.10.2026",
    status: "Offen",
  },
  {
    id: 4,
    title: "Newsletter-Text schreiben",
    project: "Marketing Herbst",
    dueDate: "09.10.2026",
    status: "Offen",
  },
  {
    id: 5,
    title: "Teammeeting vorbereiten",
    project: "Interne Organisation",
    dueDate: "10.10.2026",
    status: "Erledigt",
  },
  {
    id: 6,
    title: "Produktfotos hochladen",
    project: "Onlineshop",
    dueDate: "13.10.2026",
    status: "Offen",
  },
]
