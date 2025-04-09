import { Injectable } from '@angular/core';
import { HeaderModel } from './header-model';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private _headerModel = new BehaviorSubject<HeaderModel>({
    title: "Início",
    icon: "home",
    router: "/"
  })

  constructor() { }

  get headerModel(): HeaderModel {
      return this._headerModel.value
  }

  set vanheaderModel(headerModel: HeaderModel) {
    this._headerModel.next(headerModel)
  }
}
