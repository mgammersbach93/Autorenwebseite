# Museum-Tool – geplantes MVP

> Übernommen aus dem claude.ai-Projekt (Juli 2026). Interaktives Feature für die Website,
> inspiriert vom Museumskonzept aus John Streleckys „Big Five for Life".
> **Attribution an Strelecky muss transparent auf der Tool-Seite erscheinen.**

## Konzept

- Interaktive Astro-Seite: Nutzer verteilen **60 Punkte auf sechs Räume** per Slider,
  können Notizen ergänzen und sehen einen dynamischen Grundriss.
- **Visualisierung:** Treemap-artiger Grundriss – Raumfläche skaliert mit den Punkten
  (empfohlener Ansatz).
- **Daten bleiben im Browser** (localStorage), kein Backend.
  - Datenschutz: kurzer Hinweis in der Datenschutzerklärung reicht, kein Consent-Banner.
  - Nutzer informieren: Browserdaten löschen = Einträge weg.

## Nächste Schritte

1. 2–3 Grundriss-Varianten prototypen, dann Implementierung entscheiden.
2. Mobile-Verhalten der Treemap planen (kritischster Teil).
3. Aufwandsschätzung: ein fokussiertes Wochenende, Hauptaufwand Grundriss-Komponente.

## Leitplanken

- Einfach halten – localStorage + Astro-Komponenten, keine Framework-Zusätze.
- Design-System der Website (Off-White/Smaragd/Gold, Manrope) gilt auch hier.
