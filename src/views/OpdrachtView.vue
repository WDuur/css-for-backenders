<script setup lang="ts">
import { onMounted } from 'vue'
import { useAnchorNavigation } from '@/composables/useAnchorNavigation'
import { useChapterNavigation } from '@/composables/useChapterNavigation'

const chapterRoute = ['animatie', '']
const anchorRoute = ['Profile card', 'end']
const { setRoute } = useChapterNavigation()
const { scrollTo } = useAnchorNavigation(anchorRoute)

onMounted(() => {
  setRoute(chapterRoute)
  scrollTo('title')
})
</script>
<template>
  <IndicatorLabel title="Opdracht" />
  <div class="css-layout css-base-element-blocks">
    <BaseElementBlock title="Profile card" subtitle="">
      <template #description>
        <p>
          Ontwerp en style een profielkaart waarin de focus ligt op typografie, kleuren en
          responsiviteit. Je start met alleen de html van de kaart, dit omvat onder andere het
          gebruik van een avatar, een naam, functietitel, bio en social media-iconen. De opdracht
          mag volledig in CSS worden geschreven, maar het gebruik van een preprocessor zoals SCSS is
          toegestaan en zelfs aangeraden als je meer structuur wilt aanbrengen.
        </p>
        <ul>
          <li>Gebruik het meegeleverde HTML-template zonder wijzigingen.</li>
          <li>
            Bouw de basisstyling van de kaart, inclusief:
            <ul>
              <li>Fonts</li>
              <li>Kleuren en contrast</li>
              <li>Responsive layout met flex of grid</li>
              <li>Avatar, naam, functietitel, bio en social links correct gestyled</li>
            </ul>
          </li>
          <li>
            Gebruik van CSS-variabelen of SCSS-variabelen voor kleuren, lettertypes, en eventueel
            schaduw of spacing.
          </li>
          <li>
            Zorg voor een responsive design: de kaart moet goed leesbaar blijven op mobiel en
            desktop.
          </li>
        </ul></template
      >
      <template #code><GridLayoutCode /></template>
    </BaseElementBlock>
  </div>
</template>
