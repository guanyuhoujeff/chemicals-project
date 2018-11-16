import { Component, OnInit, ViewChild , Output, EventEmitter} from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { KeyWordsTfTableDataSource } from './key-words-tf-table-datasource';
import { DataServiceService } from 'src/app/data-service-service.service';
import { concatMap, delay, mergeMap } from 'rxjs/operators';
​import { of } from 'rxjs';


@Component({
  selector: 'app-key-words-tf-table',
  templateUrl: './key-words-tf-table.component.html',
  styleUrls: ['./key-words-tf-table.component.css'],
})
export class KeyWordsTfTableComponent implements OnInit {
  constructor(private chemicalsService: DataServiceService) {}
  @ViewChild(MatPaginator)
  paginator: MatPaginator;
  @ViewChild(MatSort)
  sort: MatSort;

  dataSource;



  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  keyWordsTf;
  keyWordsTfCol: any[];
  isClick = false;
  selectTxtFile;

  @Output() messageEvent = new EventEmitter<string>();

  ngOnInit() {
    this.chemicalsService.getKeyWordsTf().pipe(
      concatMap(val => of(val))
    ).subscribe(theKeyWordsTf => {
      console.log('subscribe , ', theKeyWordsTf);
      this.keyWordsTf = theKeyWordsTf;
      this.keyWordsTfCol = Object.keys(this.keyWordsTf[0]).filter(
        col => col !== '_id'
      );

      this.keyWordsTfCol.pop();
      this.keyWordsTfCol = ['txt_file_name'].concat(this.keyWordsTfCol);

      this.dataSource = new MatTableDataSource(this.keyWordsTf);
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

