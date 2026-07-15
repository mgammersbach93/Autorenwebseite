# Website mgammersbach.de – Projektkontext

Autorenwebsite von Markus Gammersbach. Astro v5, **kein TypeScript** (bewusst deaktiviert).
Live: https://mgammersbach.de (Netlify: autorenwebseite.netlify.app) · Lokal: `npm run dev` → localhost:4321.
GitHub: `mgammersbach93/Autorenwebseite`, Branch `master`, Netlify deployt automatisch bei Push.

## Detaildateien (bei Bedarf lesen)

- `project-context.txt` – Projektgedächtnis: alle Seiten, Entscheidungen, Setup/Zugänge
- `conventions.txt` – vollständiges Design-System (Farben, Typo, Radius, Buttons)
- `museum-tool.md` – Spezifikation des geplanten Museum-Tools (MVP)

## Design-System (Kurzfassung – Details in conventions.txt)

- Farben: Off-White `#F5F0E8` (NIE reines Weiß), Text `#1C1C1C`, Muted `#888880`,
  Smaragd `#234F42`, Gold `#B89A3E` (Hover `#C9A84C`)
- Seite `neues-wagen.astro`: Orange-Palette (`#C13A00`, `#FBA922`) statt Smaragd/Gold
- Schrift: nur Manrope (300/400/600/700), kein Bold im Fließtext
- Border-Radius differenziert: Buttons 9999px (Pill), Smaragd-Shapes 40px 40px 0 0,
  Bilder/Karten 20–24px, Tags 8px
- Icons: stroke-only in Gold; Smaragd-Sections immer 100vw; Buttons nie full-width

## Entscheidungen & Regeln

- **Kein CMS** – Keystatic wurde evaluiert und verworfen
- MDX installiert; In-Article-CTAs über `BlogBookCta.astro`
- Blog-Kategorien: schreiben, lesen, wachsen, millennials (`src/lib/blog-categories.ts`)
- Buchcover immer nebeneinander, auch mobil; Navigation transparent über Hero, Off-White sticky
- Einfachheit bevorzugen: minimale, direkte Lösungen, die zur bestehenden Architektur passen
- Keine ungefragten Design-Mockups/Vorschauen
- Änderungen minimal-invasiv – nur das Angesprochene ändern, keine ungefragten Refactorings
- Windows/PowerShell: kein `&&` in Terminal-Befehlen (Semikolon oder mehrzeilig)

## Bekannte Stolpersteine

- `.prose :global(a)` im Blog blutet in Komponenten-Styles – Button-Farben brauchen
  explizite Overrides
- Freepik/Magnific-Bildprompts: keine Midjourney-Syntax (`--ar`, `--cref`);
  Freepik-Modusauswahl „Illustration"/„Vector" nutzen, Magnific nur Upscaling

## Offene Punkte

- Museum-Tool: 2–3 Grundriss-Varianten prototypen (siehe `museum-tool.md`)
- Google Search Console: Startseiten-Indexierung anstoßen (altes WordPress-Snippet)
- `warum-lesen.astro` noch Platzhalter; Blogserie „Millennial Workshop" in Arbeit
- SEO laufend: Sitemap, Trailing Slashes, Orphan Pages (Ahrefs), interne Verlinkung

## Für Website-Texte

Ton: warm, selbstironisch, auf Augenhöhe – keine Hustle-Rhetorik, kein Kitsch.
(Vollständiges Register: `vault/schreibstil-content.md` im übergeordneten Ordner
`Claude Projekte`, falls als Workspace geöffnet.)
