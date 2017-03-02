import { BrowserModule } from '@angular/platform-browser';
import { NgModule,HostBinding, Input, Directive } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {FlexLayoutModule} from "@angular/flex-layout";
import { AppComponent } from '../components/app.component';
import { UserComponent } from '../users/userW.component';
import {MaterialModule} from "@angular/material";
import {UserService} from '../users/user.service'
import {routing} from "../app.routes";
import { UserComponent } from './user/user.component';
@Directive({
  selector:'[layout]'
})

export class LayoutDirective{
  @Input() layout:string;
  @HostBinding('style.display') display = 'flex';

  @HostBinding('style.flex-direction')
  get direction(){
    return (this.layout === 'column') ? 'column':'row';
  }
}
@Directive({
  selector:'[flex]'
})
export class FlexDirective{
  @Input() shrink:number = 1;
  @Input() grow:number = 1;
  @Input() flex:string;

  @HostBinding('style.flex')
  get style(){
    return `${this.grow} ${this.shrink} ${this.flex === '' ? '0':this.flex}%`;
  }
}

@NgModule({
  declarations: [
    AppComponent,FlexDirective ,LayoutDirective, UserComponent, UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }


