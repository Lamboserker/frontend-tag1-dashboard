# Frontend Tag 1 – Dein erstes Dashboard

Heute arbeitest du an deinem ersten kleinen Frontend-Projekt. Du bekommst ein vorbereitetes Dashboard, das du Schritt für Schritt erweitern wirst.

Dabei lernst du, wie HTML, CSS und JavaScript zusammenspielen, wie React-Komponenten funktionieren und wie du Tailwind CSS und shadcn/ui verwendest.

> **So arbeitest du mit dieser Anleitung:**
> Bearbeite die Aufgaben der Reihe nach. Jede Aufgabe baut ein kleines Stück auf der vorherigen auf.
> Hake erledigte Punkte ab (`[ ]` → `[x]`), wenn du die README in VS Code bearbeitest – oder einfach gedanklich.
> Du musst nicht alles auf Anhieb verstehen. Ausprobieren ist ausdrücklich erwünscht!

---

## Inhaltsverzeichnis

1. [Was du heute lernst](#was-du-heute-lernst)
2. [Voraussetzungen und Installation](#1-voraussetzungen-und-installation)
3. [Kurze Theorie](#2-kurze-theorie)
4. [Die Aufgaben](#3-die-aufgaben)
   - [Aufgabe 0 – Orientierung im Projekt](#aufgabe-0--orientierung-im-projekt)
   - [Aufgabe 1 – HTML und JSX verstehen](#aufgabe-1--html-und-jsx-verstehen)
   - [Aufgabe 2 – Tailwind CSS kennenlernen](#aufgabe-2--tailwind-css-kennenlernen)
   - [Aufgabe 3 – Erste eigene UI-Komponente](#aufgabe-3--erste-eigene-ui-komponente)
   - [Aufgabe 4 – shadcn/ui verwenden](#aufgabe-4--shadcnui-verwenden)
   - [Aufgabe 5 – JavaScript bringt Leben ins Dashboard](#aufgabe-5--javascript-bringt-leben-ins-dashboard)
   - [Aufgabe 6 – Responsive Design](#aufgabe-6--responsive-design)
5. [Freiwillige Zusatzaufgaben](#4-freiwillige-zusatzaufgaben-optional)
6. [Spickzettel und häufige Fehler](#5-spickzettel-und-häufige-fehler)
7. [Geschafft! So sicherst du deine Arbeit.](#geschafft-so-sicherst-du-deine-arbeit)

---

## Was du heute lernst

Am Ende dieser Übung weißt du …

- wie ein modernes React-Frontend aufgebaut ist,
- was HTML, CSS und JavaScript jeweils machen,
- was UI-Komponenten sind und weshalb man sie verwendet,
- wie du dich in einer Projektstruktur zurechtfindest,
- wie du Elemente mit **Tailwind CSS** gestaltest,
- wie du fertige **shadcn/ui**-Komponenten verwendest,
- wie du einfache dynamische Funktionen mit **React** umsetzt,
- wie du ein Projekt mit **Git** klonst, bearbeitest und Änderungen committest.

**Deine Fortschritts-Checkliste:**

- [ ] Projekt installiert und gestartet
- [ ] Aufgabe 0 – Orientierung im Projekt
- [ ] Aufgabe 1 – HTML und JSX verstehen
- [ ] Aufgabe 2 – Tailwind CSS kennenlernen
- [ ] Aufgabe 3 – Erste eigene UI-Komponente
- [ ] Aufgabe 4 – shadcn/ui verwenden
- [ ] Aufgabe 5 – JavaScript bringt Leben ins Dashboard
- [ ] Aufgabe 6 – Responsive Design
- [ ] Arbeit mit Git gesichert
- [ ] *(optional)* Bonusaufgaben A, B, C

---

## 1. Voraussetzungen und Installation

### Das brauchst du

| Programm | Wofür? | Prüfen mit |
|---|---|---|
| [Node.js](https://nodejs.org/de) (LTS-Version, mindestens 20.19) | Führt die Entwicklungswerkzeuge aus, bringt `npm` mit | `node -v` und `npm -v` |
| [Git](https://git-scm.com/downloads) | Versionsverwaltung, zum Klonen und Sichern | `git --version` |
| [Visual Studio Code](https://code.visualstudio.com/) | Code-Editor | – |
| Ein aktueller Browser (Chrome, Edge oder Firefox) | Anzeige der Website und Developer Tools | – |

Gib die Befehle aus der rechten Spalte in ein Terminal ein. Wenn jeweils eine Versionsnummer erscheint (z. B. `v22.12.0`), ist alles bereit.

> 💡 **Empfehlung:** Installiere in VS Code die Erweiterung **„Tailwind CSS IntelliSense“**. Sie schlägt dir beim Tippen passende Tailwind-Klassen vor. VS Code fragt dich beim Öffnen des Projekts automatisch danach.

### Schritt 1 – Repository klonen

„Klonen“ bedeutet: Du lädst eine Kopie des Projekts von GitHub auf deinen Computer herunter.

Die Adresse (URL) deines Repositorys findest du auf GitHub über den grünen Button **„Code“**. Wenn du über GitHub Classroom arbeitest, ist das dein persönliches Repository.

```bash
git clone <URL-DEINES-REPOSITORYS>
```

Beispiel:

```bash
git clone https://github.com/dein-name/frontend-tag1-dashboard.git
```

### Schritt 2 – In den Projektordner wechseln

```bash
cd frontend-tag1-dashboard
```

> Der Ordnername kann bei GitHub Classroom etwas anders lauten, z. B. `frontend-tag1-dashboard-dein-name`. Mit `ls` (macOS/Linux/PowerShell) bzw. `dir` (Eingabeaufforderung) siehst du, welche Ordner vorhanden sind.

### Schritt 3 – Projekt in VS Code öffnen

```bash
code .
```

Der Punkt steht für „der aktuelle Ordner“. Falls der Befehl `code` nicht funktioniert, öffne VS Code und wähle **Datei → Ordner öffnen …** und anschließend den Projektordner.

Öffne danach in VS Code ein Terminal: **Terminal → Neues Terminal**. Alle weiteren Befehle gibst du dort ein.

### Schritt 4 – Abhängigkeiten installieren

```bash
npm install
```

Dieser Befehl lädt alle Bibliotheken herunter, die das Projekt braucht (React, Tailwind CSS usw.). Sie landen im Ordner `node_modules`. Das kann beim ersten Mal ein bis zwei Minuten dauern.

> Du musst `npm install` nur **einmal** ausführen (und erneut, falls sich die `package.json` ändert).

### Schritt 5 – Entwicklungsserver starten

```bash
npm run dev
```

Im Terminal erscheint dann ungefähr Folgendes:

```text
  VITE v8.x.x  ready in 300 ms

  ➜  Local:   http://localhost:5173/
```

### Schritt 6 – Website im Browser öffnen

Öffne die angezeigte Adresse (meist **http://localhost:5173**) im Browser. Im VS-Code-Terminal kannst du die Adresse auch mit **Strg + Klick** (macOS: **Cmd + Klick**) öffnen.

Du solltest jetzt das Dashboard **MyDashboard** mit Seitenleiste, Statistik-Karten und Aufgabenliste sehen. 🎉

> **Wichtig:** Lass das Terminal mit `npm run dev` geöffnet, solange du arbeitest. Jede gespeicherte Änderung (**Strg + S**) wird sofort im Browser angezeigt – ganz ohne Neuladen.
> Beenden kannst du den Server mit **Strg + C** im Terminal.

### Hilfe bei typischen Problemen

<details>
<summary><strong>„npm“ bzw. „node“ wird nicht erkannt</strong></summary>

Node.js ist nicht installiert oder das Terminal kennt es noch nicht.

1. Installiere Node.js (LTS-Version) von [nodejs.org](https://nodejs.org/de).
2. Schließe **alle** Terminals und VS Code komplett und öffne sie neu.
3. Prüfe mit `node -v`, ob es jetzt klappt. Hilft das nicht, starte den Computer neu.
</details>

<details>
<summary><strong>Windows: „Die Ausführung von Skripts ist auf diesem System deaktiviert“</strong></summary>

Das ist eine Sicherheitseinstellung der Windows PowerShell. Lösung (einmalig in PowerShell ausführen):

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

Alternativ kannst du in VS Code oben rechts im Terminal über den Pfeil neben dem **+** auf **„Command Prompt“** (Eingabeaufforderung) umstellen.
</details>

<details>
<summary><strong>Der Port 5173 ist bereits belegt</strong></summary>

Vite weicht dann automatisch auf den nächsten freien Port aus (z. B. `5174`). **Schau im Terminal nach**, welche Adresse angezeigt wird, und öffne genau diese.

Vielleicht läuft der Server auch noch in einem anderen Terminal? Dann beende ihn dort mit **Strg + C**.

Du kannst den Port auch selbst festlegen:

```bash
npm run dev -- --port 3000
```
</details>

<details>
<summary><strong>Fehlermeldung zur Node.js-Version („Vite requires Node.js version …“)</strong></summary>

Deine Node.js-Version ist zu alt. Installiere die aktuelle LTS-Version von [nodejs.org](https://nodejs.org/de), starte das Terminal neu und führe `npm install` erneut aus.
</details>

<details>
<summary><strong>Die Seite ist weiß oder zeigt einen roten Fehler</strong></summary>

1. Lies die Fehlermeldung im Browser bzw. im Terminal – meist stehen dort **Dateiname und Zeilennummer**.
2. Öffne die Browser-Konsole mit **F12** → Reiter **„Konsole“**.
3. Häufige Ursachen: Tippfehler, ein vergessener `import`, ein nicht geschlossenes Tag. Siehe [Häufige Fehler](#häufige-fehler).
4. Mit **Strg + Z** kannst du deine letzte Änderung rückgängig machen.
</details>

<details>
<summary><strong>Meine Änderungen erscheinen nicht im Browser</strong></summary>

- Hast du die Datei gespeichert (**Strg + S**)? Ein Punkt neben dem Dateinamen im Tab bedeutet „nicht gespeichert“.
  Tipp: **Datei → Automatisch speichern** aktivieren.
- Läuft `npm run dev` noch im Terminal?
- Bearbeitest du die richtige Datei im richtigen Projektordner?
</details>

---

## 2. Kurze Theorie

### Wer macht was im Frontend?

| Technologie | Aufgabe | Vergleich mit einem Haus |
|---|---|---|
| **HTML** | Struktur und Inhalte | Wände, Räume, Türen |
| **CSS** | Design und Layout | Farbe, Tapete, Einrichtung |
| **JavaScript** | Verhalten und Interaktionen | Strom, Lichtschalter, Klingel |
| **React** | Oberfläche aus wiederverwendbaren Komponenten zusammensetzen | Fertigbauteile, die man mehrfach einbauen kann |
| **Tailwind CSS** | Gestaltung mithilfe fertiger CSS-Utility-Klassen | Ein Farb- und Materialkatalog |
| **shadcn/ui** | Anpassbare, vorgefertigte UI-Komponenten | Fertige Fenster und Türen zum Einbauen |

Außerdem verwenden wir **TypeScript** (JavaScript mit Typangaben – heute brauchst du davon nur die Grundlagen), **Vite** (startet den Entwicklungsserver) und **Lucide React** (Icons).

### Was ist JSX?

In React schreibst du die Oberfläche in **JSX**. Das sieht fast aus wie HTML, steht aber direkt im JavaScript-/TypeScript-Code. So liegen Struktur und Logik einer Komponente übersichtlich an einem Ort.

```tsx
function Begruessung() {
  const name = "Alex"

  return (
    <div className="p-4">
      <h1>Hallo {name}!</h1>
      <p>Schön, dass du da bist.</p>
    </div>
  )
}
```

Die wichtigsten Unterschiede zu HTML:

| HTML | JSX | Warum? |
|---|---|---|
| `class="..."` | `className="..."` | `class` ist in JavaScript ein reserviertes Wort (für Klassen in der Programmierung). Deshalb heißt das Attribut in JSX `className`. |
| `<br>` | `<br />` | In JSX muss **jedes** Tag geschlossen werden. |
| – | `{name}` | In geschweiften Klammern kannst du JavaScript-Werte einfügen. |
| `<!-- Kommentar -->` | `{/* Kommentar */}` | Kommentare innerhalb von JSX. |

**Komponenten** sind eigene Bausteine, die mit einem **Großbuchstaben** beginnen, z. B. `<StatCard />` oder `<Button />`. Kleingeschriebene Tags wie `<div>` oder `<p>` sind normale HTML-Elemente.

---

## 3. Die Aufgaben

Jede Aufgabe ist gleich aufgebaut:

- 🎯 **Ziel** – Was du lernst
- 📁 **Dateien** – Wo du arbeitest
- 📝 **Arbeitsanweisung** – Was du tun sollst
- 💡 **Tipp** – Eine kleine Hilfe
- ✅ **Erfolgskontrolle** – Woran du erkennst, dass du fertig bist

Im Code findest du außerdem Kommentare wie `// TODO Aufgabe 3:`. Sie zeigen dir, **wo** du etwas ergänzen kannst. Mit **Strg + Umschalt + F** kannst du in VS Code im ganzen Projekt nach `TODO Aufgabe` suchen.

---

### Aufgabe 0 – Orientierung im Projekt

🎯 **Ziel:** Die wichtigsten Dateien kennenlernen.

📁 **Dateien:** Das ganze Projekt – du änderst noch nichts.

#### Die Projektstruktur

```text
frontend-tag1-dashboard/
│
├── public/                     Statische Dateien (z. B. das Favicon im Browser-Tab)
│
├── src/                        Der eigentliche Quellcode – hier arbeitest du
│   ├── components/
│   │   ├── ui/                 Fertige shadcn/ui-Komponenten (nicht verändern!)
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── input.tsx
│   │   │
│   │   └── dashboard/          Eigene Komponenten des Dashboards
│   │       ├── DailyProgress.tsx    Karte „Tagesfortschritt“
│   │       ├── DashboardHeader.tsx  Kopfbereich mit Titel und Avatar
│   │       ├── Sidebar.tsx          Seitenleiste mit Navigation
│   │       ├── StatCard.tsx         Statistik-Karte (KPI)
│   │       └── TaskList.tsx         Liste der aktuellen Aufgaben
│   │
│   ├── data/
│   │   └── mockData.ts         Erfundene Beispieldaten
│   │
│   ├── lib/
│   │   └── utils.ts            Kleine Hilfsfunktion für CSS-Klassen
│   │
│   ├── App.tsx                 Die zentrale Komponente – setzt das Dashboard zusammen
│   ├── main.tsx                Startpunkt der React-Anwendung
│   └── index.css               Globale Styles (Tailwind CSS und Farben)
│
├── index.html                  Die einzige HTML-Seite – React füllt sie mit Inhalt
├── package.json                Projektinfos, Befehle (Scripts) und Abhängigkeiten
├── components.json             Einstellungen für shadcn/ui
├── vite.config.ts              Einstellungen für Vite
├── tsconfig*.json              Einstellungen für TypeScript
├── .gitignore                  Dateien, die Git ignorieren soll (z. B. node_modules)
└── node_modules/               Installierte Bibliotheken (entsteht durch npm install)
```

> 🔎 **Gut zu wissen:** Imports wie `@/components/ui/button` sind eine Abkürzung. Das `@` steht für den Ordner `src`. Der Import bedeutet also: „Hole die Datei `src/components/ui/button.tsx`“.

📝 **Arbeitsanweisung:** Öffne die Dateien im Explorer von VS Code (links) und beantworte folgende Fragen. Schreibe die Antworten kurz für dich auf.

- [ ] 1. In welcher Datei wird die React-Anwendung gestartet?
- [ ] 2. Wo befindet sich die zentrale Dashboard-Oberfläche?
- [ ] 3. Wo liegen die wiederverwendbaren UI-Komponenten?
- [ ] 4. In welcher Datei sind die globalen Styles definiert?
- [ ] 5. Was steht in der `package.json`? (Tipp: Schau dir `scripts` und `dependencies` an.)
- [ ] 6. Wo befinden sich die Mock-Daten?

💡 **Tipp:** Mit **Strg + P** kannst du in VS Code eine Datei schnell über ihren Namen öffnen. Mit **Strg + Klick** auf einen Komponentennamen (z. B. `StatCard`) springst du direkt in die Datei, in der sie definiert ist.

✅ **Erfolgskontrolle:**

- [ ] Ich kann alle sechs Fragen beantworten.
- [ ] Ich kann erklären, warum der Ordner `node_modules` nicht von Hand bearbeitet wird.

<details>
<summary>Antworten anzeigen (erst selbst überlegen!)</summary>

1. In `src/main.tsx`. Dort wird `<App />` in das Element `<div id="root">` aus der `index.html` eingesetzt.
2. In `src/App.tsx`. Dort werden Sidebar, Header, Statistik-Karten, Aufgabenliste und Tagesfortschritt zusammengesetzt.
3. In `src/components/ui/` (shadcn/ui-Basiskomponenten) und in `src/components/dashboard/` (eigene Dashboard-Komponenten).
4. In `src/index.css`.
5. Der Projektname, die Befehle unter `scripts` (z. B. `dev`, `build`), die benötigten Bibliotheken unter `dependencies` und `devDependencies` sowie die benötigte Node.js-Version unter `engines`.
6. In `src/data/mockData.ts`.
</details>

---

### Aufgabe 1 – HTML und JSX verstehen

🎯 **Ziel:** Erste Änderungen an der Struktur vornehmen.

📁 **Dateien:** `src/App.tsx`, `src/components/dashboard/DashboardHeader.tsx`

📝 **Arbeitsanweisung:**

- [ ] 1. Ändere den Dashboard-Titel. Der Titel wird in `App.tsx` an den `DashboardHeader` übergeben.
- [ ] 2. Füge in `DashboardHeader.tsx` unterhalb der Begrüßung einen eigenen Beschreibungstext hinzu.
- [ ] 3. Ergänze in `App.tsx` am Ende des `<main>`-Bereichs einen weiteren kleinen Informationsbereich (`<section>`).
- [ ] 4. Füge in diesen Bereich eine Überschrift (`<h2>`) und einen Absatz (`<p>`) ein – zum Beispiel „Tipp des Tages“ oder „Neuigkeiten im Team“.
- [ ] 5. Untersuche, wo `div`, `section`, `h1`, `p` und `button` im Projekt verwendet werden.

Zur Orientierung bei Punkt 5:

| Element | Bedeutung |
|---|---|
| `<div>` | Neutraler Container, um Dinge zu gruppieren |
| `<section>` | Ein inhaltlich zusammengehörender Abschnitt |
| `<h1>` bis `<h6>` | Überschriften (`h1` ist die wichtigste) |
| `<p>` | Ein Absatz mit Text |
| `<button>` | Ein klickbarer Button |

💡 **Tipp:** Die Stellen sind im Code mit `TODO Aufgabe 1` markiert. Den `<button>` findest du nicht direkt im Code, denn er steckt in der Komponente `<Button>`. Mach im Browser einen **Rechtsklick auf einen Button → „Untersuchen“**. In den Developer Tools siehst du das fertige HTML, das React erzeugt hat.

Du musst hier noch kein CSS schreiben. Wenn dein neuer Bereich etwas schlicht aussieht, ist das völlig in Ordnung – das ändern wir in Aufgabe 2.

✅ **Erfolgskontrolle:**

- [ ] Im Browser steht oben dein neuer Titel.
- [ ] Unter der Begrüßung erscheint dein Beschreibungstext.
- [ ] Unten im Dashboard ist ein neuer Bereich mit Überschrift und Absatz zu sehen.
- [ ] Es gibt keine Fehlermeldung im Browser oder Terminal.

---

### Aufgabe 2 – Tailwind CSS kennenlernen

🎯 **Ziel:** Vorhandene Elemente visuell verändern.

📁 **Dateien:** `src/components/dashboard/StatCard.tsx`, `src/components/dashboard/DashboardHeader.tsx`, `src/App.tsx`

**So funktioniert Tailwind CSS:** Statt CSS in eine eigene Datei zu schreiben, gibst du einem Element kleine, fertige Klassen im `className`. Jede Klasse erledigt genau eine Sache:

```tsx
<p className="text-lg font-bold text-blue-600">Hallo</p>
//            ↑ Größe  ↑ fett      ↑ Farbe
```

**Hilfreiche Klassen zum Ausprobieren:**

| Klasse | Wirkung |
|---|---|
| `bg-blue-500` | Hintergrundfarbe (Farbtöne von `50` = sehr hell bis `950` = sehr dunkel) |
| `text-blue-700` | Textfarbe |
| `text-xl` | Schriftgröße (`text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl` … `text-5xl`) |
| `font-bold` | Fette Schrift (`font-medium`, `font-semibold`, `font-bold`) |
| `p-4` | Innenabstand rundum (`px-4` = links/rechts, `py-4` = oben/unten) |
| `m-4`, `mt-4` | Außenabstand (`mt` = margin-top, also nur oben) |
| `gap-4` | Abstand zwischen Elementen in `flex` oder `grid` |
| `flex` | Elemente nebeneinander anordnen (Flexbox) |
| `grid` | Elemente in einem Raster anordnen, z. B. mit `grid-cols-2` |
| `rounded-md` | Abgerundete Ecken (`rounded-sm` … `rounded-xl`, `rounded-full`) |
| `border` | Rahmen (`border-2` = dicker, `border-blue-500` = Rahmenfarbe) |

> **Abstände:** Die Zahl steht für Vielfache von 4 Pixeln. `p-1` = 4 px, `p-4` = 16 px, `p-8` = 32 px.

Farben wie `text-muted-foreground` oder `bg-primary` sind Farben aus dem Design (dem „Theme“) des Projekts. Sie sind in `src/index.css` festgelegt.

📝 **Arbeitsanweisung:**

- [ ] 1. Ändere die Hintergrundfarbe der Statistik-Karten (`StatCard.tsx`).
- [ ] 2. Vergrößere eine Überschrift, z. B. den Titel im `DashboardHeader`.
- [ ] 3. Verändere den Abstand zwischen zwei Elementen.
- [ ] 4. Füge einer Karte einen (farbigen) Rahmen hinzu.
- [ ] 5. Passe die Textfarbe eines Elements an.
- [ ] 6. Nutze Flexbox oder Grid, um Elemente nebeneinander anzuordnen – zum Beispiel in deinem Informationsbereich aus Aufgabe 1.

💡 **Tipp:** Wenn eine Klasse keine Wirkung zeigt, steht vielleicht schon eine andere Klasse derselben Art im `className` (z. B. `text-2xl` und `text-4xl` gleichzeitig). **Ersetze** dann die vorhandene Klasse, statt eine zweite hinzuzufügen. Die vollständige Dokumentation findest du unter [tailwindcss.com/docs](https://tailwindcss.com/docs).

✅ **Erfolgskontrolle:**

- [ ] Die Statistik-Karten haben eine neue Hintergrundfarbe und einen sichtbaren Rahmen.
- [ ] Mindestens eine Überschrift ist sichtbar größer.
- [ ] Ich habe einen Abstand und eine Textfarbe verändert.
- [ ] In meinem eigenen Bereich stehen mindestens zwei Elemente nebeneinander.
- [ ] Ich kann erklären, was `p-4`, `gap-4` und `flex` bewirken.

---

### Aufgabe 3 – Erste eigene UI-Komponente

🎯 **Ziel:** Das Prinzip wiederverwendbarer Komponenten verstehen.

📁 **Dateien:** `src/components/dashboard/StatCard.tsx` (ansehen), `src/App.tsx` (bearbeiten)

**Was sind Props?**
Props („Properties“) sind die **Eingabewerte einer Komponente** – so wie Attribute bei HTML-Elementen. Die Komponente `StatCard` ist eine Vorlage. Über Props bestimmst du, *was* auf der Karte steht. So kannst du dieselbe Komponente mehrfach mit verschiedenen Inhalten verwenden:

```tsx
<StatCard
  title="Offene Aufgaben"
  value={12}
/>
```

- Text übergibst du in Anführungszeichen: `title="Offene Aufgaben"`
- Zahlen und JavaScript-Werte übergibst du in geschweiften Klammern: `value={12}`

Welche Props die `StatCard` kennt, siehst du in `StatCard.tsx` im Abschnitt `type StatCardProps`:

| Prop | Pflicht? | Bedeutung |
|---|---|---|
| `title` | ja | Überschrift der Karte |
| `value` | ja | Angezeigter Wert (Zahl oder Text) |
| `icon` | nein | Ein Icon oben rechts |
| `description` | nein | Kleiner Zusatztext unter dem Wert |

📝 **Arbeitsanweisung:**

- [ ] 1. Erstelle in `App.tsx` eine weitere Statistik-Karte (Stelle: `TODO Aufgabe 3`).
- [ ] 2. Gib der Karte einen eigenen Titel, z. B. „Teammitglieder“.
- [ ] 3. Übergib einen Zahlenwert.
- [ ] 4. Ergänze ein passendes Icon.
- [ ] 5. Verwende die Komponente mehrfach mit unterschiedlichen Inhalten (z. B. auch einmal mit `description`).

💡 **Tipp:**
- Schau dir genau an, wie die drei vorhandenen Karten ihre Props übergeben – besonders das Icon.
- In `src/data/mockData.ts` gibt es im Objekt `stats` noch einen Wert, der bisher nicht angezeigt wird.
- Icons findest du unter [lucide.dev/icons](https://lucide.dev/icons). Den Namen des Icons musst du oben in `App.tsx` in der Zeile `import { ... } from "lucide-react"` ergänzen. Aus `users` auf der Website wird im Code `Users` (Großschreibung, ohne Bindestriche).

✅ **Erfolgskontrolle:**

- [ ] Im Dashboard sind mindestens vier Statistik-Karten zu sehen.
- [ ] Jede neue Karte hat einen eigenen Titel, einen Wert und ein Icon.
- [ ] Ich habe dafür **nicht** die Datei `StatCard.tsx` kopiert, sondern die Komponente wiederverwendet.
- [ ] Ich kann in einem Satz erklären, was Props sind.

> Keine Sorge, wenn die vierte Karte gerade in eine neue Zeile rutscht. Darum kümmerst du dich in Aufgabe 6.

---

### Aufgabe 4 – shadcn/ui verwenden

🎯 **Ziel:** Vorgefertigte UI-Komponenten kennenlernen.

📁 **Dateien:** `src/App.tsx`, `src/components/dashboard/TaskList.tsx`, `src/components/ui/` (nur ansehen!)

**Selbst geschriebene Komponente oder shadcn/ui-Komponente – was ist der Unterschied?**

| | Selbst geschrieben (z. B. `StatCard`) | shadcn/ui (z. B. `Button`) |
|---|---|---|
| Wer hat sie erstellt? | Du bzw. dein Team | Vorlage von [ui.shadcn.com](https://ui.shadcn.com), ins Projekt kopiert |
| Wofür? | Ganz bestimmte Aufgaben in *diesem* Projekt | Allgemeine Bausteine, die jede App braucht (Buttons, Karten, Eingabefelder …) |
| Wo? | `src/components/dashboard/` | `src/components/ui/` |
| Anpassung | Du schreibst den Code selbst | Über Props wie `variant` und über `className` |

Das Besondere an shadcn/ui: Die Komponenten werden **nicht** als fertiges Paket installiert, sondern als Quellcode direkt ins Projekt kopiert. Man *könnte* sie also verändern – das ist heute aber **nicht** nötig. Du importierst und verwendest sie nur. Eigene Komponenten wie die `StatCard` bauen übrigens selbst auf shadcn-Komponenten (`Card`) auf.

**Varianten des Buttons:**

| `variant` | Aussehen |
|---|---|
| `default` | Gefüllter Button in der Hauptfarbe (Standard) |
| `secondary` | Dezenter, grauer Button |
| `outline` | Nur mit Rahmen |
| `ghost` | Ohne Hintergrund, erst beim Darüberfahren sichtbar |
| `destructive` | Rot – für „gefährliche“ Aktionen wie Löschen |
| `link` | Sieht aus wie ein Link |

Zusätzlich gibt es die Prop `size` mit den Werten `sm`, `default` und `lg`.

📝 **Arbeitsanweisung:**

- [ ] 1. Suche die Button-Komponente im Projekt und schau dir die Liste der Varianten in der Datei an (nur lesen).
- [ ] 2. Füge in `App.tsx` neben dem Button „Neue Aufgabe“ einen weiteren Button hinzu (Stelle: `TODO Aufgabe 4`).
- [ ] 3. Teste mindestens drei unterschiedliche Button-Varianten.
- [ ] 4. Verwende eine `Card`-Komponente – zum Beispiel für deinen Informationsbereich aus Aufgabe 1.
- [ ] 5. Ergänze einen `Badge` mit dem Text „In Bearbeitung“.
- [ ] 6. Füge in `TaskList.tsx` ein Input-Feld mit dem Placeholder „Aufgaben suchen ...“ hinzu.

Das Suchfeld muss noch **nicht** funktionieren – es reicht, wenn man hineinschreiben kann.

💡 **Tipp:** Jede Komponente muss oben in der Datei importiert werden, bevor du sie benutzen kannst. In `App.tsx` und `TaskList.tsx` siehst du, wie das für `Button`, `Card` und `Badge` aussieht. Für das Eingabefeld lautet der Import:

```tsx
import { Input } from "@/components/ui/input"
```

Wie eine Card aufgebaut ist (`Card`, `CardHeader`, `CardTitle`, `CardContent` …), kannst du dir in `TaskList.tsx` abschauen.

✅ **Erfolgskontrolle:**

- [ ] Neben „Neue Aufgabe“ ist mindestens ein weiterer Button zu sehen.
- [ ] Ich habe verschiedene Varianten ausprobiert und gesehen, wie sie sich unterscheiden.
- [ ] Ein Badge „In Bearbeitung“ ist sichtbar.
- [ ] Über der Aufgabenliste gibt es ein Suchfeld mit dem Text „Aufgaben suchen ...“.
- [ ] Ich habe keine Datei im Ordner `src/components/ui/` verändert.

---

### Aufgabe 5 – JavaScript bringt Leben ins Dashboard

🎯 **Ziel:** Ein einfaches React-State-Konzept kennenlernen.

📁 **Dateien:** `src/components/dashboard/DailyProgress.tsx`

Im Dashboard gibt es die Karte **„Tagesfortschritt“** mit der Anzeige „Heute erledigte Aufgaben: 0“ und dem Button „Aufgabe abschließen“. Im Moment passiert beim Klick noch nichts. Das änderst du jetzt!

**Was ist State?**
„State“ (Zustand) sind Daten, die sich ändern können, während die Seite geöffnet ist. Wenn sich der State ändert, aktualisiert React automatisch die Anzeige. Eine ganz normale Variable reicht dafür **nicht**: React bekommt nicht mit, dass sie sich geändert hat, und zeichnet die Oberfläche nicht neu.

Dafür gibt es `useState`:

```tsx
const [wert, setWert] = useState(startwert)
//      ↑ aktueller Wert
//            ↑ Funktion, um den Wert zu ändern
//                               ↑ Wert beim ersten Anzeigen
```

**Kleines Lernbeispiel – eine Lampe zum An- und Ausschalten:**

```tsx
import { useState } from "react"

function Lampe() {
  const [istAn, setIstAn] = useState(false)

  return (
    <div>
      <p>Die Lampe ist {istAn ? "an 💡" : "aus 🌑"}</p>
      <button onClick={() => setIstAn(!istAn)}>Schalter drücken</button>
    </div>
  )
}
```

So funktioniert das Beispiel:

1. `useState(false)` – Die Lampe ist am Anfang aus.
2. `{istAn ? "an 💡" : "aus 🌑"}` – Je nach Wert wird ein anderer Text angezeigt.
3. `onClick={() => ...}` – Dieser Code läuft bei jedem Klick.
4. `setIstAn(!istAn)` – Setzt den neuen Wert (`!` dreht `true` und `false` um). React zeigt danach automatisch den neuen Zustand an.

📝 **Arbeitsanweisung:**

- [ ] 1. Verwende `useState`, um in `DailyProgress.tsx` einen Zahlenwert zu speichern (Startwert: `0`).
- [ ] 2. Erhöhe den Wert bei jedem Klick auf „Aufgabe abschließen“ um 1.
- [ ] 3. Gib den aktuellen Wert dynamisch in der Oberfläche aus (statt der festen `0`).
- [ ] 4. *(optional)* Ergänze einen Reset-Button, der den Wert wieder auf `0` setzt. Probiere dafür die Variante `outline` aus.

💡 **Tipp:** Die einzelnen Schritte stehen als Kommentar oben in `DailyProgress.tsx`. Der `<Button>` aus shadcn/ui versteht `onClick` genauso wie ein normaler `<button>`. Überlege: Wie berechnest du aus dem aktuellen Wert den neuen Wert?

✅ **Erfolgskontrolle:**

- [ ] Nach dem ersten Klick steht dort „Heute erledigte Aufgaben: 1“, nach dem zweiten „2“ usw.
- [ ] *(optional)* Der Reset-Button setzt die Anzeige auf 0 zurück.
- [ ] Ich kann erklären, warum hier `useState` statt einer normalen Variable nötig ist.

> Beim Neuladen der Seite (**F5**) steht der Zähler wieder auf 0. Das ist richtig so, denn State lebt nur, solange die Seite geöffnet ist.

---

### Aufgabe 6 – Responsive Design

🎯 **Ziel:** Das Dashboard auf unterschiedlichen Bildschirmgrößen darstellen.

📁 **Dateien:** `src/App.tsx`

„Responsive“ bedeutet: Die Seite passt sich an die Bildschirmgröße an – vom Smartphone bis zum großen Monitor.

📝 **Arbeitsanweisung:**

- [ ] 1. Öffne im Browser die Developer Tools (**F12** oder **Strg + Umschalt + I**, macOS: **Cmd + Option + I**).
- [ ] 2. Aktiviere die mobile Geräteansicht (Symbol mit Handy und Tablet oder **Strg + Umschalt + M**) und wähle oben z. B. „iPhone“ aus.
- [ ] 3. Untersuche das Layout. Was passiert mit den Statistik-Karten? Und was mit der Seitenleiste?
- [ ] 4. Sorge dafür, dass die Statistik-Karten auf dem Handy **untereinander** erscheinen.
- [ ] 5. Ab einer größeren Bildschirmbreite sollen mehrere Karten **nebeneinander** stehen – auf einem großen Bildschirm am besten alle vier in einer Reihe.

**Die Tailwind-Präfixe für Bildschirmgrößen:**

| Präfix | Gilt ab einer Breite von | Typisches Gerät |
|---|---|---|
| *(kein Präfix)* | 0 px – also immer | Smartphone |
| `sm:` | 640 px | großes Smartphone (quer) |
| `md:` | 768 px | Tablet |
| `lg:` | 1024 px | Laptop |
| `xl:` | 1280 px | großer Monitor |

Tailwind arbeitet nach dem Prinzip **„Mobile First“**: Eine Klasse **ohne** Präfix gilt für alle Bildschirmgrößen. Eine Klasse **mit** Präfix gilt erst **ab** dieser Breite und überschreibt die Klasse ohne Präfix.

```tsx
<p className="text-sm md:text-lg">
  Auf dem Handy klein, ab Tablet-Breite größer.
</p>
```

💡 **Tipp:** Die Stelle ist mit `TODO Aufgabe 6` markiert. Du brauchst dort mehrere `grid-cols-...`-Klassen mit unterschiedlichen Präfixen. Ein echtes Beispiel im Projekt: Die Seitenleiste in `Sidebar.tsx` verwendet `hidden md:flex`. Sie ist also auf dem Handy versteckt und erst ab Tablet-Breite sichtbar.

✅ **Erfolgskontrolle:**

- [ ] In der Handy-Ansicht stehen alle Statistik-Karten untereinander und sind vollständig lesbar.
- [ ] Wenn ich das Fenster breiter ziehe, erscheinen die Karten nebeneinander.
- [ ] Auf einem großen Bildschirm stehen alle vier Karten in einer Reihe.
- [ ] Ich kann erklären, was „Mobile First“ bedeutet.

---

## 4. Freiwillige Zusatzaufgaben (optional)

> ⭐ **Diese Aufgaben sind freiwillig!** Sie sind für alle gedacht, die schneller fertig sind und noch mehr ausprobieren möchten. Es ist völlig in Ordnung, wenn du sie heute nicht bearbeitest.

### Bonus A – Dynamische Suche

📁 `src/components/dashboard/TaskList.tsx`

Das Suchfeld aus Aufgabe 4 soll die Aufgabenliste **während der Eingabe** filtern. Wer „logo“ eintippt, sieht nur noch „Logo-Varianten abstimmen“.

- [ ] Der eingegebene Suchtext wird in einem State gespeichert.
- [ ] Die Liste zeigt nur Aufgaben, deren Titel den Suchtext enthält.
- [ ] Groß- und Kleinschreibung spielen keine Rolle.

💡 **Hinweise:**
- Ein Input meldet jede Eingabe über `onChange`. Den eingegebenen Text erhältst du mit `event.target.value`.
- Mit `.filter()` erstellst du aus einem Array ein neues Array, das nur bestimmte Einträge enthält.
- Texte vergleichen: `"Hallo Welt".toLowerCase().includes("welt")` ergibt `true`.

### Bonus B – Status ändern

📁 `src/components/dashboard/TaskList.tsx`

Erstelle für jede Aufgabe einen Button, mit dem sie zwischen „Offen“ und „Erledigt“ wechseln kann. Der Badge soll sich dabei sofort ändern.

- [ ] Jede Aufgabe hat einen eigenen Button (z. B. mit `variant="ghost"` und `size="sm"`).
- [ ] Ein Klick wechselt den Status von „Offen“ zu „Erledigt“ und umgekehrt.

💡 **Hinweise:**
- Damit sich die Liste ändern kann, muss sie selbst im State liegen: `useState(tasks)`.
- Mit `.map()` kannst du eine neue Liste erzeugen, in der nur die angeklickte Aufgabe (erkennbar an ihrer `id`) einen anderen Status hat.
- Für die Kombination mit Bonus A: Filtere die Liste aus dem State.

### Bonus C – Eigene Komponente

📁 Neue Datei in `src/components/dashboard/`, z. B. `ProjectCard.tsx`

Entwickle eine kleine eigene Komponente und verwende sie **mindestens zweimal** im Dashboard – mit unterschiedlichen Props.

- [ ] Die Komponente liegt in einer eigenen Datei und wird mit `export function ...` exportiert.
- [ ] Sie hat mindestens zwei Props (z. B. `name` und `progress`).
- [ ] Sie wird in `App.tsx` importiert und mindestens zweimal verwendet.

💡 **Ideen:** Projektkarte mit Fortschritt in Prozent, Teammitglied mit Avatar und Rolle, Hinweisbox mit Icon, Termin-Karte. Nimm `StatCard.tsx` als Vorbild für den Aufbau.

---

## 5. Spickzettel und häufige Fehler

### Häufige Fehler

| Fehlermeldung / Problem | Ursache | Lösung |
|---|---|---|
| `... is not defined` | Komponente oder Icon wurde nicht importiert | `import` oben in der Datei ergänzen |
| `Expected corresponding JSX closing tag` | Ein Tag ist nicht geschlossen | Zu jedem `<div>` gehört ein `</div>`, einzelne Tags enden mit `/>` |
| `Adjacent JSX elements must be wrapped` | `return` liefert mehrere Elemente nebeneinander | Alles in ein gemeinsames `<div>` (oder `<>...</>`) packen |
| Komponente wird nicht angezeigt | Name klein geschrieben, z. B. `<statCard />` | Komponenten beginnen immer mit Großbuchstaben |
| Styling wirkt nicht | `class` statt `className` oder Tippfehler in der Klasse | `className` verwenden, Klasse in der Tailwind-Doku prüfen |
| `npm run build` meldet `is declared but its value is never read` | Etwas wurde importiert, aber nicht verwendet | Unbenutzten Import entfernen |
| Text statt Wert wird angezeigt, z. B. „stats.openTasks“ | Geschweifte Klammern vergessen | `value={stats.openTasks}` statt `value="stats.openTasks"` |

### Nützliche Befehle

| Befehl | Was er tut |
|---|---|
| `npm install` | Abhängigkeiten installieren |
| `npm run dev` | Entwicklungsserver starten |
| `npm run build` | Fertige Version für die Veröffentlichung erstellen (prüft auch TypeScript-Fehler) |
| `npm run preview` | Die mit `build` erstellte Version lokal ansehen |
| `npm run lint` | Code auf typische Fehler prüfen |

### Tastenkürzel in VS Code

| Kürzel | Aktion |
|---|---|
| **Strg + S** | Speichern |
| **Strg + Z** | Rückgängig |
| **Strg + P** | Datei suchen und öffnen |
| **Strg + Umschalt + F** | Im ganzen Projekt suchen |
| **Strg + Leertaste** | Vorschläge anzeigen (z. B. Tailwind-Klassen) |
| **Alt + Umschalt + F** | Code automatisch formatieren |

*(macOS: **Cmd** statt **Strg**, **Option** statt **Alt**)*

### Zum Weiterlesen

- [React – Schnellstart](https://react.dev/learn)
- [Tailwind CSS – Dokumentation](https://tailwindcss.com/docs)
- [shadcn/ui – Komponenten](https://ui.shadcn.com/docs/components)
- [Lucide – Icon-Suche](https://lucide.dev/icons)
- [MDN Web Docs (deutsch) – HTML, CSS, JavaScript](https://developer.mozilla.org/de/)

---

## Geschafft! So sicherst du deine Arbeit.

Herzlichen Glückwunsch – du hast dein erstes Dashboard gebaut! 🎉 Jetzt sicherst du deine Änderungen mit Git.

### Was bedeuten clone, commit und push?

| Befehl | Bedeutung | Vergleich |
|---|---|---|
| `git clone` | Kopiert ein Repository von GitHub auf deinen Computer (hast du am Anfang gemacht) | Ein Buch aus der Bibliothek ausleihen und kopieren |
| `git commit` | Speichert den aktuellen Stand **lokal** als „Schnappschuss“ mit einer Beschreibung | Ein Foto vom aktuellen Stand machen und ins eigene Album kleben |
| `git push` | Lädt deine lokalen Commits **zu GitHub** hoch | Das Album online teilen |

Wichtig: Ein Commit allein liegt nur auf deinem Computer. Erst mit `push` landen deine Änderungen auf GitHub.

### Schritt 1 – Einmalig: Git sagen, wer du bist

Falls du Git auf diesem Computer zum ersten Mal verwendest:

```bash
git config --global user.name "Dein Name"
git config --global user.email "deine-email@beispiel.de"
```

### Schritt 2 – Änderungen ansehen, vormerken und committen

Beende zuerst den Entwicklungsserver mit **Strg + C** (oder öffne ein zweites Terminal).

```bash
git status
git add .
git commit -m "Frontend Tag 1 abgeschlossen"
```

| Befehl | Was er tut |
|---|---|
| `git status` | Zeigt, welche Dateien du verändert hast (rot = noch nicht vorgemerkt, grün = vorgemerkt) |
| `git add .` | Merkt **alle** Änderungen für den nächsten Commit vor (der Punkt steht für „alles im aktuellen Ordner“) |
| `git commit -m "..."` | Speichert die vorgemerkten Änderungen mit einer kurzen Beschreibung |

> 💡 **Profi-Tipp:** Du kannst auch nach jeder Aufgabe einen Commit machen, z. B. `git commit -m "Aufgabe 3: neue StatCard"`. So kannst du später jeden Zwischenstand wiederfinden.

### Schritt 3 – Zu GitHub hochladen (Abgabe)

**Wenn du über GitHub Classroom arbeitest**, gehört das geklonte Repository dir und du hast Schreibrechte. Dann genügt:

```bash
git push
```

Beim ersten Mal öffnet sich eventuell ein Fenster zur Anmeldung bei GitHub. Danach siehst du deine Änderungen auf der GitHub-Seite deines Repositorys.

**Wenn du keine Schreibrechte für das ursprüngliche Repository hast** (z. B. weil du das Projekt direkt aus dem Repository der Lehrkraft geklont hast), schlägt `git push` mit einer Fehlermeldung fehl. Deine Commits sind trotzdem sicher – sie liegen lokal auf deinem Computer. Für eine Online-Abgabe hast du zwei Möglichkeiten:

1. **Fork:** Klicke auf GitHub im Original-Repository oben rechts auf **„Fork“**. Dadurch entsteht eine eigene Kopie unter deinem Account.
2. **Eigenes Repository:** Lege auf GitHub über **„New repository“** ein neues, leeres Repository an (ohne README).

Verbinde dein lokales Projekt anschließend mit deinem eigenen Repository und lade es hoch:

```bash
git remote set-url origin https://github.com/DEIN-NAME/frontend-tag1-dashboard.git
git push -u origin main
```

Ersetze `DEIN-NAME` durch deinen GitHub-Benutzernamen. Mit `git remote -v` kannst du prüfen, mit welchem Repository dein Projekt verbunden ist.

✅ **Abschluss-Kontrolle:**

- [ ] `git status` meldet „nothing to commit, working tree clean“.
- [ ] Mein Commit erscheint bei `git log --oneline`.
- [ ] *(für die Online-Abgabe)* Meine Änderungen sind auf GitHub sichtbar.

**Gut gemacht! Bis zum nächsten Mal.** 🚀
