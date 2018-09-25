# Setupinstructies (eenmalig uit te voeren)

* Installeer [Git](https://git-scm.com/)
* Installeer [NodeJS](https://nodejs.org/)
* Open een Git Bash console in de folder waar je de vakgerelateerde bestanden in wil plaatsen
  * Onder Windows
    * Open Windows Explorer (Win+E)
    * Ga naar de folder
    * Rechtsklik op de folder
    * Selecteer "Git Bash Here"
* Voer in:
  * Windows: `npm install -g UCLeuvenLimburg/algoritmisch-denken-cli`
  * Mac: `sudo install -g UCLeuvenLimburg/algoritmisch-denken-cli`
* In een browser: ga naar [GitHub Classroom](https://classroom.github.com/a/CkWbidEY).
* Selecteer je studentennummer uit de lijst. Indien je je studentennummer niet kan vinden, zie hieronder.
* Aanvaard de assignment.
* Wacht enkele seconden tot GitHub klaar is met je repository te initialiseren.
* Noteer de getoonde URL. Deze is van de vorm `https://github.com/ucll-algoritmisch-denken-1819/ad1819-LOGIN` waarbij LOGIN je GitHub-login is.
* Ga terug naar de console. Voer in: `algo initialize URL` waarbij URL het adres is dat je in de vorige stap verkreeg. Dit zou in principe slechts enkele seconden moeten duren. Indien dit langer duurt, laat iets weten aan de lector.

Je kan nu oefeningen maken zoals [hier](usage.md) beschreven.


## Indien je studentennummer niet in de lijst stond

Stuur een mail naar frederic.vogels@ucll.be om toegang te vragen tot de algo-repository. Vergeet
je studentennummer niet te vermelden.

Ondertussen kan je voort als volgt:

* In de Git Bash console: `algo initialize --no-fork`.

Dit maakt een directory `algoritmisch-denken` aan waarin de opgaves staan.
Je kan echter je vooruitgang niet uploaden.

Wanneer we je hebben toegevoegd op GitHub Classroom voer je we dezelfde stappen uit *behalve de laatste*.

* Open de Git Bash console in de `algoritmisch-denken` directory.
* Voer uit: `algo fork URL` waarbij URL het adres is dat je krijgt van GitHub Classroom.

Hierna kan je je vooruitgang beginnen uploaden zoals [hier](usage.md) beschreven.
