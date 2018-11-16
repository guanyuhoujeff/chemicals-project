import { Component, OnInit, ViewChild , Output, EventEmitter} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataServiceService } from 'src/app/data-service-service.service';
import { concatMap, delay, mergeMap } from 'rxjs/operators';
​import { of } from 'rxjs';

@Component({
  selector: 'app-accident-info-key-words',
  templateUrl: './accident-info-key-words.component.html',
  styleUrls: ['./accident-info-key-words.component.css']
})
export class AccidentInfoKeyWordsComponent implements OnInit {
  constructor(private chemicalsService: DataServiceService) {}
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  dataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */

  accidentInfoKeyWords;
  accidentInfoKeyWordsCol: any[];
  isClick = false;
  selectTxtFile;
  columnName = {
    'accidentCharacteristic': '事故訊息名詞',
    'count': '在全文件出現種類總數',
    'tf': '在全文件出現詞頻總數',
    'item': '項目'
  };

  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit() {
    this.chemicalsService.getR3Summary().pipe(
      concatMap(val => of(val))
    ).subscribe(theR2Count => {
      // console.log('subscribe , ', theKeyWordsCounts);
      this.accidentInfoKeyWords = theR2Count;
      this.accidentInfoKeyWordsCol = Object.keys(this.accidentInfoKeyWords[0]).filter(
        col => col !== '_id'
      );

      this.dataSource = new MatTableDataSource(this.accidentInfoKeyWords);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }


  checkTetFile(fileName) {
    // console.log('check checkTetFile !', fileName);
    this.selectTxtFile = fileName;
    this.messageEvent.emit(fileName);
  }
  test() {
    console.log('selectTxtFile:', this.selectTxtFile);
  }
}


