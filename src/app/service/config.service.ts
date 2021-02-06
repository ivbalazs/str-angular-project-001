import { Injectable } from '@angular/core';

export interface IMenuItem {
  text: string;
  link: string;
  icon?: string;
}

export interface ITableCol {
  key: string;
  text: string;
  editable?: boolean;
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
    {text: 'Admin', link: '/admin'}
  ];

  // id: number = 0;
  // catId: number = 0;
  // name: string = '';
  // description: string = '';
  // image: string = '';
  // price: number = 0;
  // stock: number = 0;
  // featured: boolean = false;
  // active: boolean = true;
  // discounted: boolean = false;

  tableCols: ITableCol[] = [
    {key: 'id', text: '#', editable: false},
    // {key: 'catID', text: 'CatId', editable: false},
    {key: 'name', text: 'Name', editable: true},
    {key: 'description', text: 'Description', editable: true},
    {key: 'image', text: 'Image', editable: true},
    {key: 'price', text: 'Price', editable: true},
    {key: 'stock', text: 'Stock', editable: true},
    {key: 'featured', text: 'Featured', editable: true},
    {key: 'active', text: 'Active', editable: true},
    {key: 'discounted', text: 'Discounted', editable: true}
  ]; 

  constructor() { }
}
