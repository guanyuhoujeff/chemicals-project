import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service-service.service';
import { concatMap, delay, mergeMap } from 'rxjs/operators';
import { of, from } from 'rxjs';

@Component({
  selector: 'app-marked-content',
  templateUrl: './marked-content.component.html',
  styleUrls: ['./marked-content.component.css']
})
export class MarkedContentComponent implements OnInit {
  constructor(private chemicalsService: DataServiceService) {}

  selectTxtFile = '';
  allMarkedContent = {};

  ngOnInit() {
    this.chemicalsService
      .getMarkedContent()
      .pipe(concatMap(val => from(val)))
      .subscribe(theMarkedContent => {
        // console.log('subscribe , ', theMarkedContent);
        this.allMarkedContent[theMarkedContent['txt_file_name']] = theMarkedContent['Marked_text'];
      });
  }

  showSelectMarkedContent() {
    // console.log('this this.selectTxtFile', this.selectTxtFile);
    const targetTxt = this.selectTxtFile;
    // console.log(' MarkedContentComponent ', this.allMarkedContent);


    // try {
    //   this.targetContent = this.allMarkedContent.find(function(item) {
    //     return (item.txt_file_name === targetTxt);
    //   })['Marked_text'];
    //   // console.log('this this.target', this.target);
    // } catch (error) {
    //   alert('請選擇要顯示的檔案名稱');
    // }
  }

  hindSelectMarkedContent() {
    this.selectTxtFile = undefined;
  }
}
