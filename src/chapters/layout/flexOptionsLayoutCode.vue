<template>
  <pre>
    <code>
      .container {
        display: flex: /* Activeer Flexbox */

        /* Flex Direction */
        flex-direction: row; /* Standaard, items worden van links naar rechts geplaatst */
        flex-direction: row-reverse; /* Items worden van rechts naar links geplaatst */
        flex-direction: column; /* Items worden van boven naar beneden geplaatst */
        flex-direction: column-reverse; /* Items worden van onder naar boven geplaatst */

        /* Justify Content */
        justify-content: flex-start; /* Items aan de linkerkant (horizontaal) */
        justify-content: flex-end; /* Items aan de rechterkant (horizontaal) */
        justify-content: center; /* Items gecentreerd (horizontaal) */
        justify-content: space-between; /* Ruimte gelijkmatig verdeeld tussen items */
        justify-content: space-around; /* Ruimte gelijkmatig rondom items */
        justify-content: space-evenly; /* Ruimte gelijkmatig verdeeld, inclusief de randen */

        /* Flex Wrap */
        flex-wrap: nowrap; /* Items blijven op één regel, zonder overloop */
        flex-wrap: wrap; /* Items worden naar een nieuwe regel verplaatst als ze niet passen */
        flex-wrap: wrap-reverse; /* Items worden naar een nieuwe regel verplaatst, maar in omgekeerde volgorde */

        /* Align Items */
        align-items: flex-start; /* Items uitgelijnd aan de bovenkant (verticaal) */
        align-items: flex-end; /* Items uitgelijnd aan de onderkant (verticaal) */
        align-items: center; /* Items gecentreerd (verticaal) */
        align-items: stretch; /* Items rekken uit om de hoogte van de container in te vullen */

        /* Align Content */
        align-content: flex-start; /* Rijen uitgelijnd aan de bovenkant van de container */
        align-content: flex-end; /* Rijen uitgelijnd aan de onderkant van de container */
        align-content: center; /* Rijen gecentreerd in de container */
        align-content: space-between; /* Ruimte tussen de rijen */
        align-content: space-around; /* Ruimte rondom de rijen */
        align-content: space-evenly; /* Ruimte gelijkmatig verdeeld tussen de rijen */
      }
    </code>
  </pre>
</template>
