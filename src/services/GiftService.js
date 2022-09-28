
import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
import { sandboxServer } from "./AxiosService.js"

class GiftService {
  async getGifts() {
    const res = await sandboxServer.get('/api/gifts')
    AppState.gifts = res.data.map(g => new Gift(g))

  }

  async openGift(giftid) {
    const gift = AppState.gifts.find(g => g.id == giftid)
    gift.opened = true
    const res = await sandboxServer.put(`api/gifts/${giftid}`, gift)


  }




}

export const giftService = new GiftService()