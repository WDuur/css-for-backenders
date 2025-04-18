<template>
  <strong>Verschil tussen SCSS en gewone CSS</strong>
  <table>
    <tr>
      <th>Kenmerk</th>
      <th>SCSS</th>
      <th>CSS</th>
    </tr>
    <tr>
      <td><strong>Variabelen</strong></td>
      <td>✅ Ja (<code>$primary-color: red;</code>)</td>
      <td>❌ Nee</td>
    </tr>
    <tr>
      <td><strong>Nesting</strong></td>
      <td>✅ Ja (<code>.parent { .child { ... } }</code>)</td>
      <td>❌ Nee</td>
    </tr>
    <tr>
      <td><strong>Mixins</strong></td>
      <td>✅ Ja (<code>@mixin button-style { ... }</code>)</td>
      <td>❌ Nee</td>
    </tr>
    <tr>
      <td><strong>Operators</strong></td>
      <td>✅ Ja (<code>width: 100% - 20px;</code>)</td>
      <td>❌ Nee</td>
    </tr>
    <tr>
      <td><strong>Codehergebruik</strong></td>
      <td>✅ Beter door mixins en variabelen</td>
      <td>❌ Beperkt</td>
    </tr>
  </table>

  <strong>Voordelen van SCSS</strong>
  <ul>
    <li>
      <strong>Betere structuur</strong>: Code is overzichtelijker door nesting en herbruikbare
      componenten.
    </li>
    <li><strong>Efficiënter werken</strong>: Minder herhaling dankzij variabelen en mixins.</li>
    <li>
      <strong>Makkelijk onderhoudbaar</strong>: Wijzigingen in variabelen worden overal doorgevoerd.
    </li>
    <li><strong>Flexibel</strong>: Ondersteunt logica zoals functies en operators in styling.</li>
  </ul>

  <p>
    Wil je SCSS implementeren in je project? Dan heb je een compiler nodig zoals
    <strong>Dart Sass</strong> of een bundler zoals <strong>Webpack</strong>.
  </p>
</template>