import {makeAutoObservable} from 'mobx'
import Axios from 'axios'
import req from 'express/lib/request';

export default class BasketStore {
  constructor() {
    this._userId = {}; 
    this._deviceId = {};
    this._basket = {};
    this._basketItems = {};
    this._isBasketCreated = false;
    makeAutoObservable(this)
  }

  async createBasket() {
    if (this._userId) {
      await Axios.post('http://localhost:3001/basket', {
        UserId: this._userId
      }).then((res) => {
        this.setBasket(res.data)
        this.setIsBasketCreated(true);
      }) 
    }
  }

  async createBasketItem() {
    if (this._deviceId) {
      await Axios.post('http://localhost:3001/basketItem', {
        DeviceId: this._deviceId,
        BasketId: this._basket.id,
      })
    }
  }

  setBasket(basket) {
    this._basket = basket;
  }

  setUserId(userId) {
    this._userId = userId;
  }

  setDeviceId(deviceId) {
    this._deviceId = deviceId;
  }

  setBasketItems(basketItems) {
    this._basketItems = basketItems;
  }

  setIsBasketCreated(isBasketCreated) {
    this._isBasketCreated = isBasketCreated;
  }

  get userId() {
    return this._userId;
  }

  get deviceId() {
    return this._deviceId;
  }

  get basket() {
    return this._basket;
  }

  get basketItems() {
    return this._basketItems;
  }

  get isBasketCreated() {
    return this._isBasketCreated;
  }
}