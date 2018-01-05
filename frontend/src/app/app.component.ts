import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const latestTopicsQuery = gql`
  {
    latestTopics {
      id
      title
      text
      game {
        id
        name
      }
    }
  }

`;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
}
