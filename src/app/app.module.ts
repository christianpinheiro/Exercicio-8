import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { DiscComponent } from './disc/disc.component';
import { TimerComponent } from './timer/timer.component';
import { DiscService } from './disc.service';
import { TimerService } from './timer.service';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule.forRoot([
    {path: '', component: AppComponent},
    {path: 'disc', component: DiscComponent},
    {path: 'timer', component: TimerComponent},    
  ])
],
  declarations: [AppComponent, HelloComponent, DiscComponent, TimerComponent],
  bootstrap: [AppComponent],
  providers: [DiscService, TimerService]
})
export class AppModule {}
