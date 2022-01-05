import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li>TO DO: IMPLEMENT</li>
    </ul>
  `
})
export class AppComponent {
  title = 'Star Wars Films';
  films = [
    {
      "title": "A New Hope",
      "episode_id": 4,
      "director": "George Lucas",
      "release_date": "1977-05-25"
    },
    {
      "title": "The Empire Strikes Back",
      "episode_id": 5,
      "director": "Irvin Kershner",
      "release_date": "1980-05-17"
    },
    {
      "title": "Return of the Jedi",
      "episode_id": 6,
      "director": "Richard Marquand",
      "release_date": "1983-05-25"
    },
    {
      "title": "The Phantom Menace",
      "episode_id": 1,
      "director": "George Lucas",
      "release_date": "1999-05-19"
    },
    {
      "title": "Attack of the Clones",
      "episode_id": 2,
      "director": "George Lucas",
      "release_date": "2002-05-16"
    },
    {
      "title": "Revenge of the Sith",
      "episode_id": 3,
      "director": "George Lucas",
      "release_date": "2005-05-19"
    }
  ];
}
