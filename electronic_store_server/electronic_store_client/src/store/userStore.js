import {makeAutoObservable} from 'mobx'

export default class UserStore {
  constructor() {
    this._user = {}; 
    this._loginedUser = {}
    makeAutoObservable(this)
  }

  setUser(user) {
    this._user = user
  }

  setLoginedUser(user) {
    this._loginedUser = user
  }

  get user() {
    return this._user;
  }

  get loginedUser() {
    return this._loginedUser
  }
}