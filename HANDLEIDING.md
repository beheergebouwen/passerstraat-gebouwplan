# Passerstraat Gebouwplan – installatie (eenmalig)

Zelfde opzet als het Lakenhuis-gebouwplan. De gegevens komen in **eigen lijsten (PS_...)** op dezelfde SharePoint-site *OVM Gebouwplannen*; Lakenhuis (LK_...) wordt niet aangeraakt.

## 1. GitHub
1. Maak een nieuwe repository `passerstraat-gebouwplan` (zelfde account als Lakenhuis).
2. Upload alle bestanden uit deze map **behalve de map `setup/`** (die bevat de installatiegegevens en de plannen; die komen in SharePoint).
3. Settings → Pages → *Deploy from a branch* → `main` / root. Noteer de URL, bv. `https://<account>.github.io/passerstraat-gebouwplan/`.

## 2. Microsoft Entra (IT)
App-registratie *Lakenhuis Gebouwplan* → Authentication → Single-page application → **Redirect URI toevoegen**: de URL uit stap 1.3 (met `/` op het einde). Er is geen nieuwe app-registratie nodig.

## 3. SharePoint-lijsten en plannen
1. Upload `setup.html` tijdelijk mee naar de repository (staat al in de map) en open `https://<account>.github.io/passerstraat-gebouwplan/setup.html`.
2. Meld aan, kies de bestanden uit de map `setup/`: `seed.json` + `plan_k.jpg`, `plan_f0.jpg`, `plan_f1.jpg`, `plan_f2.jpg`, `plan_f3.jpg`.
3. Klik **Installatie starten**. De pagina maakt 9 lijsten (PS_Ruimten, PS_Deuren, PS_Organisaties, PS_Instellingen, PS_Bezetting, PS_Kosten, PS_Voorschotten, PS_Imports, PS_IstaMeters – deze laatste blijft leeg), vult 71 ruimten en 69 deuren in en zet de plannen in `Documenten/Passerstraat/Plannen`.
4. Verwijder daarna `setup.html` uit de repository.

## 4. Na de installatie
- Organisaties: Kuumba (gelijkvloers), Baita (appartementen) en De Overmolen. Kleuren en extra organisaties via de tab Organisaties.
- Bezetting: vul per ruimte de begindatum in (tab Plan → ruimte → Bezetting). Zolang er geen bezetting is, geldt de organisatie uit de ruimtelijst.
- Te controleren: oppervlakte van gangen, sanitair en kelder (*Te meten*), toewijzing van de terrassen, en de grenzen van de ruimten op het plan.

## Codes
- Ruimte: `PS-[verdieping]-[nr]` (K, 00, 01, 02, 03). Code architect (0.1–0.22, APP. x.x) staat in de naam.
- Deur: `P[verdieping][nr]` – zelfde codes als het PDF-deurenplan. Codes architect (BD0.01–BD0.04) in het veld CodeArchitect.
