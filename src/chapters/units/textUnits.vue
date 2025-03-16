<template>
  <ul>
    <li>
      <strong>em</strong> – Relatief ten opzichte van de <code>font-size</code> van het
      parent-element.
      <ul>
        <li>Voorbeeld: <code>2em</code> = 2x de huidige <code>font-size</code>.</li>
        <li>Gebruik voor: padding, margins en lettergroottes binnen componenten.</li>
      </ul>
    </li>

    <li>
      <strong>rem</strong> – Relatief ten opzichte van de <code>font-size</code> van
      <code>&lt;html&gt;</code>.
      <ul>
        <li>
          Voorbeeld: <code>1rem</code> = de standaard <code>font-size</code> van de root (meestal
          16px).
        </li>
        <li>Handiger dan em voor consistente typografie.</li>
      </ul>
    </li>
  </ul>
  <image src="/images/css-unit-em-rem.png" width="100%" height="auto"></image>
</template>
