<template>


  <div class="col-4 p-3">
    <img
      src="https://media.istockphoto.com/illustrations/seamless-with-skulls-and-bones-illustration-id164472921?k=20&m=164472921&s=612x612&w=0&h=mQ1J2XptX_6qh9sgPY7k84Gr_r-mIRT64EE886hpTR8="
      @click="OpenGift()" class="img-fluid">
    <div class="card">

      <img :src="gift?.url" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <h3>{{gift.tag}}</h3>
      </div>
    </div>
  </div>
</template>


<script>

import { computed } from "@vue/reactivity";
import { popScopeId } from "vue";
import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";


export default {
  props: {
    gift: { type: Gift, required: true }

  },
  setup(props) {



    return {
      async openGift() {
        try {
          await giftService.openGift(props.gift.id)
        } catch (error) {
          logger.error('[OpenGifts]', error)
          Pop.error
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>