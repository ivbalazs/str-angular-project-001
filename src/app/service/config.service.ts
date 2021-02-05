import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  appName: string = 'Könyv Webshop';

  menuItems: IMenuItem[] = [
    {text: 'Home', link: '/', icon: 'home'},
    {text: 'Kategória>Utazás', link: '/cat01'},
    {text: 'Kategória>Számítástechnika', link: '/cat02'},
    {text: 'Admin', link: '/admin'},
  ];

  constructor() { }
}
