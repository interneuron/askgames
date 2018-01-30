import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-topic-panel',
  templateUrl: './topic-panel.component.html',
  styleUrls: ['./topic-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicPanelComponent implements OnInit {
  @Input() topic: {
    title: string;
    text: string;
    game: {
      id: number;
      name: string;
    };
  };

  constructor() {
  }

  ngOnInit() {
  }
}
