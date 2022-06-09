import {makeAutoObservable} from 'mobx';
import Axios from 'axios'

export default class DeviceStore {


  // async getTypes() {
  //   return await Axios.get('http://localhost:3001/type').then((response => {
  //     this.setTypes(response.data)
  //     return response.data
  //   }))
  // }

  // async getDevices() {
  //   return await Axios.get('http://localhost:3001/device').then((response => {
  //     this.setDevices(response.data)
  //     return response.data
  //   }))
  // }

  // async getBrands() {
  //   return await Axios.get('http://localhost:3001/brand').then((response => {
  //     this.setBrands(response.data)
  //     return response.data
  //   }))
  // }

  constructor() {
      this._types = [
    {id: 5, name: 'Процессоры'},
    {id: 15, name: 'Компьютеры'},
    {id: 25, name: 'Кулеры'},
    {id: 35, name: 'Смартфоны'}
  ]
    // this._types = [];
 
    // this.getTypes();

    this._brands = [
      {id: 5, name: 'Apple'},
      {id: 15, name: 'Samsung'},
      {id: 25, name: 'AMD'},
      {id: 35, name: 'DeepCool'}
    ]
    // this._brands = [];

    // this.getBrands();

    this._devices = [
      {id: 5, name: 'IPhone 13', price: 1000, rating: 5, img: 'http://via.placeholder.com/150x150', TypeId: 35, BrandId: 5 },
      {id: 5, name: 'IPhone 13 pro', price: 1500, rating: 5, img: 'http://via.placeholder.com/150x150', TypeId: 35, BrandId: 5 },
      {id: 5, name: 'Samsung galaxy', price: 800, rating: 5, img: 'http://via.placeholder.com/150x150', TypeId: 35, BrandId: 15 },
      {id: 5, name: 'DeepCool gammax 400', price: 800, rating: 5, img: 'http://via.placeholder.com/150x150', TypeId: 25, BrandId: 35 },
      {id: 5, name: 'DeepCool gammax 400', price: 800, rating: 5, img: 'http://via.placeholder.com/150x150', TypeId: 25, BrandId: 35 },
      {id: 5, name: 'DeepCool gammax 400', price: 800, rating: 5, img: 'http://via.placeholder.com/150x150', TypeId: 25, BrandId: 35 }
    ]
    // this._devices = [];

    // this.getDevices();

    this._selectedType = {}

    this._selectedBrand = {};

    makeAutoObservable(this)
  }
 q
  setTypes(types) {
    this._types = types
  }
  
  setBrands(brands) {
    this._brands = brands
  }

  setDevices(devices) {
    this._devices = devices
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
  }

  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }

  get devices() {
    return this._devices
  }

  get selectedType() {
    return this._selectedType
  }

  get selectedBrand() {
    return this._selectedBrand
  }
}