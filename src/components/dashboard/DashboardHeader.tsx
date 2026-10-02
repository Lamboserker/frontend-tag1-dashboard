// Props sind die "Eingabewerte" einer Komponente.
// Hier legen wir fest, welche Props der Header erwartet.
type DashboardHeaderProps = {
  title: string
  userName: string
}

export function DashboardHeader({ title, userName }: DashboardHeaderProps) {
  return (
    <header className="flex items-center justify-between border-b bg-background px-6 py-4">
      <div>
        {/* TODO Aufgabe 2:
            Mache diese Überschrift größer.
            Tipp: Suche nach der Klasse, die mit "text-" beginnt. */}
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-sm text-muted-foreground">
          Willkommen zurück, {userName}! Schön, dass du da bist.
        </p>

        {/* TODO Aufgabe 1:
            Füge unter der Begrüßung einen eigenen kurzen Beschreibungstext
            mit einem <p>-Element hinzu. */}
      </div>

      {/* Benutzer-Avatar (Platzhalter mit dem ersten Buchstaben des Namens) */}
      <div className="flex items-center gap-3">
        <div className="hidden text-right sm:block">
          <p className="text-sm font-medium">{userName}</p>
          <p className="text-xs text-muted-foreground">Projektleitung</p>
        </div>
        <div className="flex size-10 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground">
          {userName[0]}
        </div>
      </div>
    </header>
  )
}
