import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { concatMap, delay, mergeMap } from 'rxjs/operators';
import { of, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { MediaMatcher } from '@angular/cdk/layout';
import { DataServiceService } from 'src/app/data-service-service.service';

@Component({
  selector: 'app-real-time-news',
  templateUrl: './real-time-news.component.html',
  styleUrls: ['./real-time-news.component.css']
})
export class RealTimeNewsComponent implements OnInit, OnDestroy {
  constructor(private chemicalsService: DataServiceService) {}
  alertTabIndex = 2;
  alertRankList = of([]);
  allRealTimeNewsObjectList;
  selectedtAlertNews = {
    R1_count: 0,
    R1_tf: 0,
    R1_keyW_list: [],
    R21_count: 0,
    R21_tf: 0,
    R21_keyW_list: [],
    R22_count: 0,
    R22_tf: 0,
    R22_keyW_list: [],
    R23_count: 0,
    R23_tf: 0,
    R23_keyW_list: [],
    R24_count: 0,
    R24_tf: 0,
    R24_keyW_list: [],
    R31_count: 0,
    R31_tf: 0,
    R31_keyW_list: [],
    R32_count: 0,
    R32_tf: 0,
    R32_keyW_list: [],
    R33_count: 0,
    R33_tf: 0,
    R33_keyW_list: [],
    R34_count: 0,
    R34_tf: 0,
    R34_keyW_list: [],
  };
  ngOnInit() {
    this.chemicalsService
      .getRealTimeNewsObjectList()
      .pipe(concatMap(val => of(val)))
      .subscribe(theRealTimeNews => {
        this.allRealTimeNewsObjectList = theRealTimeNews;

        this.allRealTimeNewsObjectList.sort(function(a, b) {
          return (
            b['R1_count'] - a['R1_count'] ||
            b['alertCount'] - a['alertCount'] ||
            b['newnDatetimestamp'] - a['newnDatetimestamp']
          );
          // return a.alertCount < b.alertCount ? 1 : -1;
        });
        const filterAlertRankList = this.allRealTimeNewsObjectList.filter(theRealTimeObject => {
          // tslint:disable-next-line:no-unused-expression
          return theRealTimeObject['R1_count'] > 0 &&
          // (theRealTimeObject['R21_count'] +
          // theRealTimeObject['R22_count'] +
          // theRealTimeObject['R23_count'] +
          // theRealTimeObject['R24_count']) > 0 &&
          (theRealTimeObject['R31_count'] +
          theRealTimeObject['R32_count'] +
          theRealTimeObject['R33_count'] +
          theRealTimeObject['R34_count']) > 0;
        }).slice(1, 20).sort(function(a, b) {
          return (
            b['newnDatetimestamp'] - a['newnDatetimestamp'] ||
            b['alertCount'] - a['alertCount']
          );
          // return a.alertCount < b.alertCount ? 1 : -1;
        });
        console.log('filterAlertRankList ', filterAlertRankList);
        this.alertRankList = of(filterAlertRankList);
        // console.log(
        //   'this.alertRankList',
        //   this.allRealTimeNewsObjectList.slice(0, 10)
        // );
        this.alertRankList.subscribe(theAlertRankList => {
          this.selectedtAlertNews = theAlertRankList[this.alertTabIndex - 1];
        });
      });

  }

  ngOnDestroy(): void {}
  selectedtAlertNewsChanged() {
    this.alertRankList.subscribe(theAlertRankList => {
      this.selectedtAlertNews = theAlertRankList[this.alertTabIndex - 1];
    });
  }
}
