import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import {
    Component,
    Output,
    Input,
    EventEmitter,
    ElementRef,
    ViewChild,
    NgZone,
    ChangeDetectorRef,
    AfterViewInit
} from '@angular/core';
import { Observable } from 'rxjs';


@Component({
    selector:'bc-book-search',
    template:`
    <md-card>
      <md-card-title>Find a Book</md-card-title>
      <md-card-content>
        <md-input-container>
          <input mdInput placeholder="Search for a book" [value]="query" #search>
        </md-input-container>
        <md-spinner [class.show]="searching"></md-spinner>
      </md-card-content>
    </md-card>
  `,
    styles:[`
    md-card-title,
    md-card-content {
      display: flex;
      justify-content: center;
    }

    input {
      width: 300px;
    }

    md-card-spinner {
      padding-left: 60px; // Make room for the spinner
    }

    md-spinner {
      width: 30px;
      height: 30px;
      position: relative;
      top: 10px;
      left: 10px;
      opacity: 0.0;
    }

    md-spinner.show {
      opacity: 1.0;
    }
  `]
})
export class BookSearchComponent implements AfterViewInit {
    @Input() query = '';
    @Input() searching = false;
    @Output() search = new EventEmitter<string>();
    
    @ViewChild('search') inputRef:ElementRef;
    
    constructor(private zone:NgZone, private cd:ChangeDetectorRef) {}
    
    ngAfterViewInit() {
        this.zone.runOutsideAngular(() => {
            console.log('this.inputRef:', this.inputRef);
            Observable.fromEvent(this.inputRef.nativeElement, 'keyup')
                .debounceTime(300)
                .subscribe((keyboardEvent:any) => {
                  this.search.emit(keyboardEvent.target.value);
                  this.cd.detectChanges();
                });
        });
    }
}
