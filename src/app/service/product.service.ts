import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl: string = 'http://localhost:3000/products';

  list: Product[] = [

    // {
    //   "id": 1,
    //   "catId": 1,
    //   "name": "Pellentesque eget nunc.",
    //   "description": "Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque.",
    //   "image": "../../assets/img/1.jpg",
    //   "price": 4112,
    //   "stock": 29,
    //   "featured": true,
    //   "active": true,
    //   "discounted": true
    // }, {
    //   "id": 2,
    //   "catId": 1,
    //   "name": "In sagittis dui vel nisl.",
    //   "description": "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    //   "image": "../../assets/img/2.jpg",
    //   "price": 6440,
    //   "stock": 75,
    //   "featured": false,
    //   "active": true,
    //   "discounted": false
    // }, {
    //   "id": 3,
    //   "catId": 1,
    //   "name": "Nulla ac enim.",
    //   "description": "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    //   "image": "../../assets/img/3.jpg",
    //   "price": 2018,
    //   "stock": 21,
    //   "featured": true,
    //   "active": true,
    //   "discounted": true
    // }, {
    //   "id": 4,
    //   "catId": 1,
    //   "name": "Nulla nisl.",
    //   "description": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo.",
    //   "image": "../../assets/img/4.jpg",
    //   "price": 6595,
    //   "stock": 26,
    //   "featured": true,
    //   "active": true,
    //   "discounted": true
    // }, {
    //   "id": 5,
    //   "catId": 1,
    //   "name": "Quisque ut erat.",
    //   "description": "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.",
    //   "image": "../../assets/img/5.jpg",
    //   "price": 1634,
    //   "stock": 9,
    //   "featured": true,
    //   "active": true,
    //   "discounted": true
    // }, {
    //   "id": 6,
    //   "catId": 1,
    //   "name": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
    //   "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    //   "image": "../../assets/img/6.jpg",
    //   "price": 9387,
    //   "stock": 13,
    //   "featured": true,
    //   "active": true,
    //   "discounted": false
    // }, {
    //   "id": 7,
    //   "catId": 1,
    //   "name": "In hac habitasse platea dictumst.",
    //   "description": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    //   "image": "../../assets/img/7.jpg",
    //   "price": 5985,
    //   "stock": 89,
    //   "featured": true,
    //   "active": true,
    //   "discounted": false
    // }, {
    //   "id": 8,
    //   "catId": 1,
    //   "name": "In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    //   "description": "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat.",
    //   "image": "../../assets/img/8.jpg",
    //   "price": 3010,
    //   "stock": 7,
    //   "featured": true,
    //   "active": true,
    //   "discounted": true
    // }, {
    //   "id": 9,
    //   "catId": 1,
    //   "name": "Nulla ac enim.",
    //   "description": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    //   "image": "../../assets/img/9.jpg",
    //   "price": 7521,
    //   "stock": 1,
    //   "featured": false,
    //   "active": true,
    //   "discounted": false
    // }, {
    //   "id": 10,
    //   "catId": 1,
    //   "name": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    //   "description": "Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum.",
    //   "image": "../../assets/img/10.jpg",
    //   "price": 7671,
    //   "stock": 85,
    //   "featured": true,
    //   "active": true,
    //   "discounted": false
    // }, {
    //   "id": 11,
    //   "catId": 1,
    //   "name": "Praesent blandit.",
    //   "description": "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti.",
    //   "image": "../../assets/img/11.jpg",
    //   "price": 6963,
    //   "stock": 13,
    //   "featured": true,
    //   "active": true,
    //   "discounted": false
    // }, {
    //   "id": 12,
    //   "catId": 1,
    //   "name": "Donec semper sapien a libero.",
    //   "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    //   "image": "../../assets/img/12.jpg",
    //   "price": 3041,
    //   "stock": 13,
    //   "featured": false,
    //   "active": true,
    //   "discounted": true
    // }, {
    //   "id": 13,
    //   "catId": 1,
    //   "name": "Donec dapibus.",
    //   "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    //   "image": "../../assets/img/13.jpg",
    //   "price": 7202,
    //   "stock": 47,
    //   "featured": false,
    //   "active": true,
    //   "discounted": true
    // }, {
    //   "id": 14,
    //   "catId": 1,
    //   "name": "Quisque porta volutpat erat.",
    //   "description": "Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt.",
    //   "image": "../../assets/img/14.jpg",
    //   "price": 9352,
    //   "stock": 54,
    //   "featured": false,
    //   "active": true,
    //   "discounted": false
    // }, {
    //   "id": 15,
    //   "catId": 1,
    //   "name": "Nullam varius.",
    //   "description": "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    //   "image": "../../assets/img/15.jpg",
    //   "price": 6283,
    //   "stock": 50,
    //   "featured": false,
    //   "active": true,
    //   "discounted": true
    // }, {
    //   "id": 16,
    //   "catId": 1,
    //   "name": "Fusce consequat.",
    //   "description": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    //   "image": "../../assets/img/16.jpg",
    //   "price": 5896,
    //   "stock": 15,
    //   "featured": true,
    //   "active": true,
    //   "discounted": true
    // }, {
    //   "id": 17,
    //   "catId": 1,
    //   "name": "Nunc rhoncus dui vel sem.",
    //   "description": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla.",
    //   "image": "../../assets/img/17.jpg",
    //   "price": 8679,
    //   "stock": 49,
    //   "featured": false,
    //   "active": true,
    //   "discounted": true
    // }, {
    //   "id": 18,
    //   "catId": 1,
    //   "name": "Mauris sit amet eros.",
    //   "description": "Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    //   "image": "../../assets/img/18.jpg",
    //   "price": 8866,
    //   "stock": 53,
    //   "featured": true,
    //   "active": true,
    //   "discounted": false
    // }, {
    //   "id": 19,
    //   "catId": 1,
    //   "name": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo.",
    //   "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    //   "image": "../../assets/img/19.jpg",
    //   "price": 7558,
    //   "stock": 46,
    //   "featured": false,
    //   "active": true,
    //   "discounted": false
    // }, {
    //   "id": 20,
    //   "catId": 1,
    //   "name": "Nulla ut erat id mauris vulputate elementum.",
    //   "description": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
    //   "image": "../../assets/img/20.jpg",
    //   "price": 1146,
    //   "stock": 32,
    //   "featured": true,
    //   "active": true,
    //   "discounted": true
    // }, {
    //   "id": 21,
    //   "catId": 1,
    //   "name": "Nulla ac enim.",
    //   "description": "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    //   "image": "../../assets/img/21.jpg",
    //   "price": 4847,
    //   "stock": 44,
    //   "featured": true,
    //   "active": true,
    //   "discounted": false
    // }, {
    //   "id": 22,
    //   "catId": 1,
    //   "name": "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
    //   "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    //   "image": "../../assets/img/22.jpg",
    //   "price": 5010,
    //   "stock": 82,
    //   "featured": true,
    //   "active": true,
    //   "discounted": false
    // }, {
    //   "id": 23,
    //   "catId": 1,
    //   "name": "Phasellus in felis.",
    //   "description": "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    //   "image": "../../assets/img/23.jpg",
    //   "price": 3864,
    //   "stock": 79,
    //   "featured": true,
    //   "active": true,
    //   "discounted": true
    // }, {
    //   "id": 24,
    //   "catId": 1,
    //   "name": "Duis mattis egestas metus.",
    //   "description": "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    //   "image": "../../assets/img/24.jpg",
    //   "price": 7616,
    //   "stock": 90,
    //   "featured": true,
    //   "active": true,
    //   "discounted": true
    // }, {
    //   "id": 25,
    //   "catId": 1,
    //   "name": "Sed vel enim sit amet nunc viverra dapibus.",
    //   "description": "Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
    //   "image": "../../assets/img/25.jpg",
    //   "price": 8503,
    //   "stock": 66,
    //   "featured": false,
    //   "active": true,
    //   "discounted": true
    // }, {
    //   "id": 26,
    //   "catId": 2,
    //   "name": "Donec dapibus.",
    //   "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
    //   "image": "../../assets/img/26.jpg",
    //   "price": 2468,
    //   "stock": 71,
    //   "featured": false,
    //   "active": true,
    //   "discounted": true
    // }, {
    //   "id": 27,
    //   "catId": 2,
    //   "name": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi.",
    //   "description": "Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum.",
    //   "image": "../../assets/img/27.jpg",
    //   "price": 6052,
    //   "stock": 54,
    //   "featured": true,
    //   "active": true,
    //   "discounted": false
    // }, {
    //   "id": 28,
    //   "catId": 2,
    //   "name": "Vivamus vestibulum sagittis sapien.",
    //   "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    //   "image": "../../assets/img/28.jpg",
    //   "price": 6218,
    //   "stock": 10,
    //   "featured": true,
    //   "active": true,
    //   "discounted": true
    // }, {
    //   "id": 29,
    //   "catId": 2,
    //   "name": "Morbi porttitor lorem id ligula.",
    //   "description": "Sed accumsan felis. Ut at dolor quis odio consequat varius. Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla.",
    //   "image": "../../assets/img/29.jpg",
    //   "price": 8024,
    //   "stock": 98,
    //   "featured": false,
    //   "active": true,
    //   "discounted": false
    // }, {
    //   "id": 30,
    //   "catId": 2,
    //   "name": "Mauris ullamcorper purus sit amet nulla.",
    //   "description": "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    //   "image": "../../assets/img/30.jpg",
    //   "price": 1763,
    //   "stock": 7,
    //   "featured": true,
    //   "active": null,
    //   "discounted": true
    // }, {
    //   "id": 31,
    //   "catId": 2,
    //   "name": "Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    //   "description": "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    //   "image": "../../assets/img/31.jpg",
    //   "price": 6270,
    //   "stock": 10,
    //   "featured": true,
    //   "active": true,
    //   "discounted": true
    // }, {
    //   "id": 32,
    //   "catId": 2,
    //   "name": "Etiam vel augue.",
    //   "description": "Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus.",
    //   "image": "../../assets/img/32.jpg",
    //   "price": 1799,
    //   "stock": 11,
    //   "featured": true,
    //   "active": true,
    //   "discounted": true
    // }, {
    //   "id": 33,
    //   "catId": 2,
    //   "name": "Aliquam erat volutpat.",
    //   "description": "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus.",
    //   "image": "../../assets/img/33.jpg",
    //   "price": 4123,
    //   "stock": 72,
    //   "featured": false,
    //   "active": true,
    //   "discounted": false
    // }, {
    //   "id": 34,
    //   "catId": 2,
    //   "name": "Morbi ut odio.",
    //   "description": "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    //   "image": "../../assets/img/34.jpg",
    //   "price": 7826,
    //   "stock": 16,
    //   "featured": true,
    //   "active": true,
    //   "discounted": false
    // }, {
    //   "id": 35,
    //   "catId": 2,
    //   "name": "Maecenas rhoncus aliquam lacus.",
    //   "description": "Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui.",
    //   "image": "../../assets/img/35.jpg",
    //   "price": 9430,
    //   "stock": 79,
    //   "featured": true,
    //   "active": true,
    //   "discounted": false
    // }, {
    //   "id": 36,
    //   "catId": 2,
    //   "name": "Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    //   "description": "Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
    //   "image": "../../assets/img/36.jpg",
    //   "price": 3647,
    //   "stock": 27,
    //   "featured": false,
    //   "active": true,
    //   "discounted": true
    // }, {
    //   "id": 37,
    //   "catId": 2,
    //   "name": "Integer non velit.",
    //   "description": "Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc.",
    //   "image": "../../assets/img/37.jpg",
    //   "price": 7803,
    //   "stock": 49,
    //   "featured": true,
    //   "active": true,
    //   "discounted": false
    // }, {
    //   "id": 38,
    //   "catId": 2,
    //   "name": "Nullam molestie nibh in lectus.",
    //   "description": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    //   "image": "../../assets/img/38.jpg",
    //   "price": 5946,
    //   "stock": 64,
    //   "featured": true,
    //   "active": true,
    //   "discounted": false
    // }, {
    //   "id": 39,
    //   "catId": 2,
    //   "name": "Cras in purus eu magna vulputate luctus.",
    //   "description": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    //   "image": "../../assets/img/39.jpg",
    //   "price": 1896,
    //   "stock": 68,
    //   "featured": true,
    //   "active": true,
    //   "discounted": true
    // }, {
    //   "id": 40,
    //   "catId": 2,
    //   "name": "Phasellus in felis.",
    //   "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    //   "image": "../../assets/img/40.jpg",
    //   "price": 5087,
    //   "stock": 45,
    //   "featured": false,
    //   "active": true,
    //   "discounted": true
    // }, {
    //   "id": 41,
    //   "catId": 2,
    //   "name": "Nulla facilisi.",
    //   "description": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    //   "image": "../../assets/img/41.jpg",
    //   "price": 5343,
    //   "stock": 1,
    //   "featured": true,
    //   "active": true,
    //   "discounted": true
    // }, {
    //   "id": 42,
    //   "catId": 2,
    //   "name": "Cras in purus eu magna vulputate luctus.",
    //   "description": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    //   "image": "../../assets/img/42.jpg",
    //   "price": 8456,
    //   "stock": 16,
    //   "featured": false,
    //   "active": true,
    //   "discounted": true
    // }, {
    //   "id": 43,
    //   "catId": 2,
    //   "name": "Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    //   "description": "Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis.",
    //   "image": "../../assets/img/43.jpg",
    //   "price": 5823,
    //   "stock": 14,
    //   "featured": false,
    //   "active": true,
    //   "discounted": true
    // }, {
    //   "id": 44,
    //   "catId": 2,
    //   "name": "Morbi ut odio.",
    //   "description": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    //   "image": "../../assets/img/44.jpg",
    //   "price": 9415,
    //   "stock": 45,
    //   "featured": true,
    //   "active": true,
    //   "discounted": false
    // }, {
    //   "id": 45,
    //   "catId": 2,
    //   "name": "Integer non velit.",
    //   "description": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    //   "image": "../../assets/img/45.jpg",
    //   "price": 7126,
    //   "stock": 97,
    //   "featured": true,
    //   "active": true,
    //   "discounted": false
    // }, {
    //   "id": 46,
    //   "catId": 2,
    //   "name": "Nulla justo.",
    //   "description": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    //   "image": "../../assets/img/46.jpg",
    //   "price": 4918,
    //   "stock": 60,
    //   "featured": true,
    //   "active": true,
    //   "discounted": true
    // }, {
    //   "id": 47,
    //   "catId": 2,
    //   "name": "Nulla ut erat id mauris vulputate elementum.",
    //   "description": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    //   "image": "../../assets/img/47.jpg",
    //   "price": 9802,
    //   "stock": 93,
    //   "featured": false,
    //   "active": true,
    //   "discounted": false
    // }, {
    //   "id": 48,
    //   "catId": 2,
    //   "name": "Cras in purus eu magna vulputate luctus.",
    //   "description": "Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst.",
    //   "image": "../../assets/img/48.jpg",
    //   "price": 5324,
    //   "stock": 41,
    //   "featured": true,
    //   "active": true,
    //   "discounted": false
    // }, {
    //   "id": 49,
    //   "catId": 2,
    //   "name": "Donec posuere metus vitae ipsum.",
    //   "description": "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue.",
    //   "image": "../../assets/img/49.jpg",
    //   "price": 3078,
    //   "stock": 11,
    //   "featured": true,
    //   "active": true,
    //   "discounted": true
    // }, {
    //   "id": 50,
    //   "catId": 2,
    //   "name": "In eleifend quam a odio.",
    //   "description": "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum.",
    //   "image": "../../assets/img/50.jpg",
    //   "price": 6990,
    //   "stock": 40,
    //   "featured": false,
    //   "active": true,
    //   "discounted": true
    // }


  ]
  

  // randomFiveFeaturedProducts: Product[] = this.list.filter( product => product.featured )
  //   .sort( () => 0.5 - Math.random())
  //   .slice(0, 5);

  // randomFiveDiscountProducts: Product[] = this.list.filter( product => product.discounted === true )
  //   .sort( () => 0.5 - Math.random())
  //   .slice(0, 5);


  // allSameCategoryProducts(catId: number): Product[] {
  //     return this.list.filter(product => ( product.catId == catId ));
  // }
    

  // allCategoryFeaturedProducts(catId: number): Product[] {
  //     return this.list.filter(product => ( product.catId == catId && product.featured === true ));
  // }
    

  // randomFiveCategoryProducts(catId: number): Product[] {
  //     return this.allCategoryFeaturedProducts(catId)
  //       .sort(() => 0.5 - Math.random())
  //       .slice(0, 5);
  // }

  // get pList(): Product[] {
  //   return this.list;
  // }

  constructor(private http: HttpClient) {
    
    // if (localStorage.productList) {
    //   this.list = JSON.parse(localStorage.productList);
    // }
  }

  // updateProduct(product: Product): void {
  //   const index = this.pList.findIndex(item => item.id === product.id);
  //   this.pList.splice(index, 1, product);
  //   this.updateLocalStorage();
  // }

  // removeProduct(product: Product): void {
  //   const index = this.pList.findIndex(item => item.id === product.id);
  //   this.pList.splice(index, 1);
  //   this.updateLocalStorage();
  // }

  // updateLocalStorage(): void {
  //   localStorage.productList = JSON.stringify(this.pList);
  // }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  get(product: Product): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${product.id}`);
  }

  update(product: Product): Observable<Product> {
    return this.http.patch<Product>(`${this.apiUrl}/${product.id}`, product);
  }

  remove(product: Product): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/${product.id}`);
  }

}
