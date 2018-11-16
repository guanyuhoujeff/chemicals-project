import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnDestroy {
  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  mobileQuery: MediaQueryList;

  title = 'chemicals-project';

  private _mobileQueryListener: () => void;

  navigationList = [
    { name: '關鍵詞統計表格', isActive: true },
    { name: '即時新聞監測', isActive: false },
    { name: '線上文件即時分析', isActive: false },
    { name: '其他', isActive: false }
  ];
  selectNavigation = this.navigationList[0].name;
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  checkNavigation(listItem) {
    this.navigationList.forEach(item => {
      if (item['name'] === listItem.name) {
        item['isActive'] = true;
        this.selectNavigation = listItem.name;
      } else {
        item['isActive'] = false;
      }
    });
  }

  test() {
    console.log('this.mobileQuery.matches', this.mobileQuery.matches);
  }
}
