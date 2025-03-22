<template>
  <div>
    Je gebruikt <strong>!important</strong> in CSS alleen wanneer het echt nodig is om een
    stijlregel prioriteit te geven boven alle andere, inclusief inline-stijlen en specifiekere
    selectors. Dit kan bijvoorbeeld nuttig zijn:
    <ul>
      <li>
        Als laatste redmiddel wanneer je geen controle hebt over de originele CSS. Maar: gebruik het
        spaarzaam,
      </li>
      <li>
        Bij het overschrijven van externe stylesheets (zoals van een bibliotheek of framework).
      </li>
    </ul>
    omdat het debuggen en onderhouden van je CSS moeilijker maakt. Het is beter om de specificiteit
    van je selectors te verhogen of je CSS-structuur te verbeteren.
  </div>
  <div class="image">
    <image src="/images/important.webp" />
  </div>
</template>

<style scoped lang="scss">
.image {
  height: 600px;

  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  max-width: 50vw;
  box-shadow: 20px 20px 50px var(--vt-c-black-dark);
  margin-top: 2rem;
}

.image img {
  height: auto;
  position: relative;
  min-height: 80%;
  min-width: 80%;
  object-fit: cover;
  bottom: 4rem;
}
</style>
