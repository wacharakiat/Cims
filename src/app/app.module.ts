import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataTableModule, SharedModule } from 'primeng/primeng';
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
    HttpClientModule,
    CommonModule,
    SharedModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
