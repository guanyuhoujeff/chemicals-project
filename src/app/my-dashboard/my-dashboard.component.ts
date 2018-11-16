import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MarkedContentComponent } from '../marked-content/marked-content.component';

@Component({
  selector: 'app-my-dashboard',
  templateUrl: './my-dashboard.component.html',
  styleUrls: ['./my-dashboard.component.css']
})
export class MyDashboardComponent implements AfterViewInit {
  /** Based on the screen size, switch from standard to one column per row */

  @ViewChild(MarkedContentComponent)
  markedContentComponent;

  selectTxtFile: string;
  selectDocumentTableList = ['全文件關鍵詞種類統計表', '全文件關鍵詞詞頻統計表'];
  selectKeyWordTableList = [ '化學關鍵字統計表', '事故特徵關鍵字統計表', '事故訊息關鍵字統計表'];
  selectDocumentTable = this.selectDocumentTableList[0];
  selectKeyWordTable  = this.selectKeyWordTableList[0];

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [{ title: 'Card 1', cols: 1, rows: 1 }];
      }
      return [{ title: '全文件關鍵詞種類統計表', cols: 2, rows: 1 }];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngAfterViewInit() {
    console.log(' 1 MyDashboardComponent  selectTxtFile ', this.selectTxtFile);
    this.selectTxtFile = this.markedContentComponent.selectTxtFile;
    console.log(' 2 MyDashboardComponent  selectTxtFile ', this.selectTxtFile);
  }

  receiveMessage($event) {
    console.log('MyDashboardComponent  event ', $event);
    this.selectTxtFile = $event;
    this.markedContentComponent.selectTxtFile = $event;
  }


  test() {
    console.log('selectTable   ,', this.selectDocumentTable);
  }

  getSelectDocumentTable(theSelectDocumentTable) {
    this.selectDocumentTable = theSelectDocumentTable;
  }
  getSelectKeyWordTable(theSelectKeyWordTable) {
    this.selectKeyWordTable = theSelectKeyWordTable;
  }
}
