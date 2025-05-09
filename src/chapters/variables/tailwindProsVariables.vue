<template>
  <div>
    <h3>✅ Voordelen</h3>
    <ul>
      <li>
        <strong>Snelle ontwikkeling:</strong> Je kunt direct in je HTML of component schrijven met
        utility-klassen, zonder steeds terug te schakelen naar CSS-bestanden.
      </li>
      <li>
        <strong>Consistent design:</strong> Alles volgt één design-systeem (spacing, kleuren,
        fonts), waardoor je interface consistent blijft zonder extra moeite.
      </li>
      <li>
        <strong>Kleine eindbestanden (met PurgeCSS):</strong> Niet-gebruikte klassen worden
        verwijderd bij productie, wat zorgt voor snelle laadtijden.
      </li>
      <li>
        <strong>Responsiveness en dark mode ingebouwd:</strong> Media queries (<code>sm:</code>,
        <code>md:</code>) en dark mode (<code>dark:</code>) zijn direct beschikbaar via klassen.
      </li>
    </ul>

    <h3>❌ Nadelen</h3>
    <ul>
      <li>
        <strong>Minder overzichtelijke HTML:</strong> Lange lijsten van utility-klassen kunnen HTML
        rommelig maken en minder leesbaar.
      </li>
      <li>
        <strong>Leercurve </strong> Je moet de klassen leren (zoals <code>p-4</code>,
        <code>flex</code>, <code>justify-between</code>), wat initieel wat tijd kost.
      </li>
      <li>
        <strong>Abstractie van CSS-concepten:</strong> Omdat je minder "echte CSS" schrijft, leer je
        misschien minder goed hoe CSS werkt.
      </li>
      <li>
        <strong>Afhankelijkheid van het framework:</strong> Je HTML hangt sterk af van
        Tailwind-klassen. Bij overstappen naar een ander systeem moet je alles herzien.
      </li>
    </ul>
  </div>
</template>
