import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../../models/movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
   @Input() sliderConfig;
   @Input() movie: Movie;
   @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
