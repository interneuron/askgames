import { Component, OnInit } from '@angular/core';
import { Topic } from '../../topic/meta';
import { TopicService } from '../../topic/topic.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  topics: Topic[];

  constructor(private topicService: TopicService) {
  }

  ngOnInit() {
    this.topicService.getLatest().subscribe(topics => {
      this.topics = topics;
    });
  }
}
