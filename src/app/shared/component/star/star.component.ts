import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";


@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{

    @Input()
    rate: number = 0;

    starWidth!: number;

    ngOnChanges(changes: SimpleChanges): void {
        this.starWidth = this.rate * 74 / 5;
    }

}