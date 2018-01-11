import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KitLoadingBarService } from '@ngx-kit/core';
import { Apollo } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { distinctUntilChanged, filter, map, pluck, switchMap, tap } from 'rxjs/operators';
import { isNull, isObject } from 'util';
import { getGameLatestTopicsQuery, getGameQuery } from '../../graphql-meta';
import { getGame, getGameLatestTopics } from '../game.graphql';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss'],
})
export class GamePageComponent implements OnInit {
  gameData = new BehaviorSubject<getGameQuery>(null);

  topicsData = new BehaviorSubject<getGameLatestTopicsQuery>(null);

  constructor(
    private route: ActivatedRoute,
    private loadingBar: KitLoadingBarService,
    private apollo: Apollo,
  ) {
  }

  ngOnInit() {
    const lb = 'game';
    // fetch game
    this.route.params
      .pipe(
        pluck('id'),
        distinctUntilChanged(),
        tap(() => {
          this.loadingBar.start(lb);
        }),
        switchMap((id: string) => this.apollo
          .query<getGameQuery>({
            query: getGame,
            variables: {id},
          })),
        map(d => d.data),
      )
      .subscribe(this.gameData);
    // fetch topics
    this.gameData.pipe(
      filter(isObject),
      pluck('game', 'id'),
      distinctUntilChanged(),
      switchMap((gameId: string) => this.apollo
        .query<getGameLatestTopicsQuery>({
          query: getGameLatestTopics,
          variables: {gameId},
        })),
      map(d => d.data),
      tap(() => {
        this.loadingBar.end(lb);
      }),
    ).subscribe(this.topicsData);
  }
}
