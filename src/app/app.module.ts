import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FundService } from './services/fund.service';
import { MemberService } from './services/member.service';
import { PlanService } from './services/plan.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [FundService, MemberService, PlanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
