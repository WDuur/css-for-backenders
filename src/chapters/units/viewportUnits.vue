<template>
  <ul>
    <li>
      <strong>vw (viewport width)</strong> – Percentage van de breedte van de viewport.
      <ul>
        <li>Voorbeeld: 50vw = 50% van de schermbreedte.</li>
      </ul>
    </li>

    <li>
      <strong>vh (viewport height)</strong> – Percentage van de hoogte van de viewport.
      <ul>
        <li>Voorbeeld: 100vh = volledige schermhoogte.</li>
      </ul>
    </li>

    <li><strong>vmin</strong> – Gebaseerd op het kleinste van vw of vh.</li>

    <li><strong>vmax</strong> – Gebaseerd op het grootste van vw of vh.</li>

    <li>
      <strong>svh</strong>: weerspiegelt de kleinste zichtbare viewporthoogte, exclusief
      interface-elementen van de user agent.
    </li>
    <li><strong>lvh</strong>: weerspiegelt de grootst mogelijke zichtbare viewporthoogte.</li>
    <li>
      <strong>dvh</strong>: weerspiegelt de huidige viewporthoogte zonder de interface van de user
      agent en past zich aan bij veranderingen.
    </li>

    <li>
      Daarnaast is er natuuurlijk ook nog: <strong>svw</strong>, <strong>lvw</strong> en
      <strong>dvw</strong>
    </li>
    <image src="/images/viewport-units-svh-lvh-dvh-svw-lvw-dvw.png" width="100%" height="auto" />
  </ul>
</template>
