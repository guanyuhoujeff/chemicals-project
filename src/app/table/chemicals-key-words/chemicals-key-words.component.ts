import { Component, OnInit, ViewChild , Output, EventEmitter} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataServiceService } from 'src/app/data-service-service.service';
import { concatMap, delay, mergeMap } from 'rxjs/operators';
​import { of } from 'rxjs';


@Component({
  selector: 'app-chemicals-key-words',
  templateUrl: './chemicals-key-words.component.html',
  styleUrls: ['./chemicals-key-words.component.css']
})
export class ChemicalsKeyWordsComponent implements OnInit {
  constructor(private chemicalsService: DataServiceService) {}
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  dataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */

  chemicalsKeyWordsCounts;
  chemicalsKeyWordsCountsCol: any[];
  isClick = false;
  selectTxtFile;
  columnName = {
    'chemicalName': '化學品名稱',
    'count': '在全文件出現種類總數',
    'tf': '在全文件出現詞頻總數',
  };

  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit() {
    this.chemicalsService.getR1Summary().pipe(
      concatMap(val => of(val))
    ).subscribe(theR1Count => {
      // console.log('subscribe , ', theKeyWordsCounts);
      this.chemicalsKeyWordsCounts = theR1Count;
      this.chemicalsKeyWordsCountsCol = Object.keys(this.chemicalsKeyWordsCounts[0]).filter(
        col => col !== '_id'
      );

      this.dataSource = new MatTableDataSource(this.chemicalsKeyWordsCounts);
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

