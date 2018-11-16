import { Component, OnInit, ViewChild , Output, EventEmitter} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { DataServiceService } from 'src/app/data-service-service.service';
import { concatMap, delay, mergeMap } from 'rxjs/operators';
​import { of } from 'rxjs';

@Component({
  selector: 'app-key-words-counts-table',
  templateUrl: './key-words-counts-table.component.html',
  styleUrls: ['./key-words-counts-table.component.css']
})
export class KeyWordsCountsTableComponent implements OnInit {
  constructor(private chemicalsService: DataServiceService) {}
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  dataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */

  keyWordsCounts;
  keyWordsCountsCol: any[];
  isClick = false;
  selectTxtFile;


  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit() {
    this.chemicalsService.getKeyWordsCounts().pipe(
      concatMap(val => of(val))
    ).subscribe(theKeyWordsCounts => {
      // console.log('subscribe , ', theKeyWordsCounts);
      this.keyWordsCounts = theKeyWordsCounts;
      this.keyWordsCountsCol = Object.keys(this.keyWordsCounts[0]).filter(
        col => col !== '_id'
      );
      this.keyWordsCountsCol.pop();
      this.keyWordsCountsCol = ['txt_file_name'].concat(this.keyWordsCountsCol);
      this.dataSource = new MatTableDataSource(this.keyWordsCounts);
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
