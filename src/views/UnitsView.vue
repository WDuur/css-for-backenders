<script setup lang="ts">
import BaseElementBlock from '@/components/BaseElementBlock.vue'
import { useAnchorNavigation } from '@/composables/useAnchorNavigation'

const {} = useAnchorNavigation([
  'title',
  'subtitle1',
  'px',
  'subtitle2',
  'Tekstgebaseerde eenheden',
  'Viewport-gebaseerde eenheden',
])
</script>
<template>
  <div class="css-layout css-base-element-blocks">
    <h1 id="title">Begrijp CSS Eenheden: Wanneer gebruik je px, rem, vh en meer?</h1>
    <h2 id="subtitle1">
      <p>Absolute eenheden <sub> (vaste grootte, niet afhankelijk van viewport of parent)</sub></p>
    </h2>
    <BaseElementBlock
      title="px"
      contents="is een vaste CSS-eenheid die één schermpixel vertegenwoordigt."
      description="Pixel is een vaste eenheid in CSS die gelijk staat aan één schermpixel, wat een specifieke eenheid van resolutie op een scherm is. Het is een absolute eenheid, wat betekent dat de grootte niet afhankelijk is van de gebruikersinstellingen (zoals het zoomniveau van de browser of de schermresolutie). Het wordt vaak gebruikt wanneer je de exacte grootte van elementen wilt bepalen, zonder dat deze zich aanpassen aan andere factoren zoals het viewport of font-instellingen.

      <br>Gebruik van px:<br/>
      <ul>
      <li>Voor exacte posities: Wanneer je wilt dat een element precies een bepaalde breedte of hoogte heeft, ongeacht de schermgrootte of gebruikersinstellingen.</li>
      <li>Voor afbeeldingen of iconen: Omdat de grootte van de afbeelding of het icoon in pixels wordt bepaald, kun je ervoor zorgen dat ze altijd dezelfde grootte behouden.<li/>
      Voor schaduwen, randen, en afstanden: Het wordt ook vaak gebruikt bij het instellen van schaduwen, borders of marges wanneer een consistente en niet-schaalbare ruimte gewenst is.</li></ul>"
      quote="<p>Andere absolute eenheden:</p><ul>
  <li><strong>cm (centimeter)</strong> – 1 cm is precies 10 mm.</li>
  <li><strong>mm (millimeter)</strong> – Een kleinere eenheid dan cm, vaak gebruikt in print.</li>
  <li><strong>in (inch)</strong> – 1 inch = 2.54 cm.</li>
  <li><strong>pt (punt)</strong> – 1 pt = 1/72 inch (veel gebruikt in typografie en print).</li>

</ul>
<p>cm, mm, in, pt en pc zijn nuttig voor <strong>print-stijlen</strong> (<code>@media print</code>), maar worden zelden gebruikt voor het beeldscherm.</p>
"
      code="/* Exacte breedte en hoogte */
.box {
  width: 200px;
  height: 100px;
}"
    />
    <h2 id="subtitle2">
      <p>Relative eenheden <sub> (afhankelijk van parent-element of viewport)</sub></p>
    </h2>
    <BaseElementBlock
      title="Tekstgebaseerde eenheden"
      contents="Een tekstgebaseerde eenheid in CSS is een maat die afhankelijk is van de lettergrootte."
      description="<ul>
  <li>
    <strong>em</strong> – Relatief ten opzichte van de <code>font-size</code> van het parent-element.
    <ul>
      <li>Voorbeeld: <code>2em</code> = 2x de huidige <code>font-size</code>.</li>
      <li>Gebruik voor: padding, margins en lettergroottes binnen componenten.</li>
    </ul>
  </li>

  <li>
    <strong>rem</strong> – Relatief ten opzichte van de <code>font-size</code> van <code>&lt;html&gt;</code>.
    <ul>
      <li>Voorbeeld: <code>1rem</code> = de standaard <code>font-size</code> van de root (meestal 16px).</li>
      <li>Handiger dan em voor consistente typografie.</li>
    </ul>
  </li>

  <li>
    <strong>ex</strong> – Relatief aan de hoogte van de kleine letter 'x' van het huidige lettertype.
  </li>

  <li>
    <strong>ch</strong> – Relatief aan de breedte van het cijfer '0' in het huidige lettertype.
    <ul>
      <li>Handig voor: het instellen van maximale tekstbreedte in karakters.</li>
    </ul>
  </li>
</ul>"
      quote="Het gebruik van margin lijkt eenvoudig, en dat is het ook. Maar bij herbruikbare componenten kan het een uitdaging zijn om een consistente layout te behouden. Daarom is het beter om de parent te laten bepalen hoeveel ruimte er tussen zichzelf en het child component zit. Dit zorgt voor een flexibeler en beter beheersbaar ontwerp."
      code=""
    />
    <BaseElementBlock
      title="Viewport-gebaseerde eenheden"
      contents="bepaalt de ruimte buiten de rand van een element."
      description="<ul>
  <li>
    <strong>vw (viewport width)</strong> – Percentage van de breedte van de viewport.
    <ul>
      <li>Voorbeeld: 50vw = 50% van de schermbreedte.</li>
    </ul>
  </li>

  <li>
    <strong>vh (viewport height)</strong> – Percentage van de hoogte van de viewport.
    <ul>
      <li><Voorbeeld: 100vh = volledige schermhoogte.</li>
    </ul>
  </li>

  <li>
    <strong>vmin</strong> – Gebaseerd op het kleinste van vw of vh.
  </li>

  <li>
    <strong>vmax</strong> – Gebaseerd op het grootste van vw of vh.
  </li>

  <li>
    <ul>
      <li>
        Handig voor: responsieve layouts zonder media queries!
      </li>
    </ul>
  </li>
</ul>
"
    />
  </div>
</template>

<style lang="scss" scoped>
h1,
h2 {
  min-height: 100vh;
  display: flex;
  align-items: center;
  font-size: 2.4rem;
}
sub {
  vertical-align: text-bottom;
  font-size: 1.4rem;
}
.orange {
  color: orange;
  font-weight: bold;
}
</style>
