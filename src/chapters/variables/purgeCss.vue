<template>
  <div>
    PurgeCSS is een tool die ongebruikte CSS-klassen uit stylesheets verwijdert door je HTML- en
    JS-bestanden te analyseren. Het helpt om de uiteindelijke CSS-bestanden kleiner en efficiënter
    te maken voor productie.
    <table border="1">
      <thead>
        <tr>
          <th>Stap</th>
          <th>Beschrijving</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1. Invoerbestanden</td>
          <td>PurgeCSS leest je HTML-, JS- of Vue-bestanden en je CSS-bestand.</td>
        </tr>
        <tr>
          <td>2. Analyse</td>
          <td>
            Het scant op welke CSS-klassen daadwerkelijk gebruikt worden in de contentbestanden.
          </td>
        </tr>
        <tr>
          <td>3. Vergelijking</td>
          <td>Alle klassen in de CSS worden vergeleken met de gebruikte klassen in je content.</td>
        </tr>
        <tr>
          <td>4. Opschonen</td>
          <td>CSS-klassen die nergens gebruikt worden, worden verwijderd uit het eindresultaat.</td>
        </tr>
        <tr>
          <td>5. Output</td>
          <td>Je krijgt een geoptimaliseerd CSS-bestand met alleen de benodigde stijlen.</td>
        </tr>
      </tbody>
    </table>
    <br />
    <br />
  </div>
</template>
