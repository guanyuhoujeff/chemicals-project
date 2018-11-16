import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatPaginatorModule,
  MatTableModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import {MatInputModule} from '@angular/material/input';
import { NavigationComponent } from './navigation/navigation.component';
import { KeyWordsCountsTableComponent } from './table/key-words-counts-table/key-words-counts-table.component';
import { KeyWordsTfTableComponent } from './table/key-words-tf-table/key-words-tf-table.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { DataServiceService } from './data-service-service.service';
import { TestComponent } from './table/test/test.component';
import { MarkedContentComponent } from './marked-content/marked-content.component';
import { ChemicalsKeyWordsComponent } from './table/chemicals-key-words/chemicals-key-words.component';
// tslint:disable-next-line:max-line-length
import { AccidentCharacteristicsKeyWordsComponent } from './table/accident-characteristics-key-words/accident-characteristics-key-words.component';
import { AccidentInfoKeyWordsComponent } from './table/accident-info-key-words/accident-info-key-words.component';
import { RealtimeNewsDashboardComponent } from './realtime-news-dashboard/realtime-news-dashboard.component';
import { OnlineFileDashboardComponent } from './online-file-dashboard/online-file-dashboard.component';
import { OtherDashboardComponent } from './other-dashboard/other-dashboard.component';
import { OnlineFileComponent } from './online-file/online-file/online-file.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatChipsModule} from '@angular/material/chips';
import { RealTimeNewsComponent } from './real-time-news/real-time-news/real-time-news.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    KeyWordsCountsTableComponent,
    KeyWordsTfTableComponent,
    MyDashboardComponent,
    TestComponent,
    MarkedContentComponent,
    ChemicalsKeyWordsComponent,
    AccidentCharacteristicsKeyWordsComponent,
    AccidentInfoKeyWordsComponent,
    RealtimeNewsDashboardComponent,
    OnlineFileDashboardComponent,
    OtherDashboardComponent,
    OnlineFileComponent,
    RealTimeNewsComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatChipsModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
