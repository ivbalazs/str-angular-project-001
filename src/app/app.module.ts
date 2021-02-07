import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { Cat01Component } from './page/cat01/cat01.component';
import { Cat02Component } from './page/cat02/cat02.component';
import { HomeComponent } from './page/home/home.component';
import { ProductPagerComponent } from './common/product-pager/product-pager.component';

import { ProductCardComponent } from './common/product-card/product-card.component';
import { FilterPipe } from './pipe/filter.pipe';
import { AdminComponent } from './page/admin/admin.component';
import { DataEditorComponent } from './common/data-editor/data-editor.component';
import { ProductListComponent } from './common/product-list/product-list.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    Cat01Component,
    Cat02Component,
    HomeComponent,
    ProductPagerComponent,

    ProductCardComponent,
    FilterPipe,
    AdminComponent,
    DataEditorComponent,
    ProductListComponent

  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
