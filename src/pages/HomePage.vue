<template>
  <div class="container">
    <div class="row">
      <GiftedCard v-for="g in gifts" :gift="g" />
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState.js";
import { giftService } from "../services/GiftService.js";


export default {
  setup() {
    async function getGifts() {
      try {
        await giftService.getGifts()
      } catch (error) {
        logger.error('[GettingGifts]', error)
        Pop.error

      }
    }
    getGifts()



    return {
      gifts: computed(() => AppState.gifts),
    }
  }
}

</script>

<style scoped lang="scss">

</style>
