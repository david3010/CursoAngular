import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagsHistory: string[] = [];
  private apiKey:       string = 'dGMJW12nlHSz46O3sy81BZFryoPshmUk';
  private serviceUrl:   string = 'https://api.giphy.com/v1/gifs';

  constructor() {}

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  private organizeTagsHistory(tag: string): void {

    tag.toLowerCase();

    if(this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((tagHistory) => tagHistory !== tag);
    }

    this._tagsHistory.unshift(tag);
    this._tagsHistory = this._tagsHistory.splice(0, 10);
  }

  public searchTag(tag: string): void {
    if (tag.length === 0) return;

    this.organizeTagsHistory(tag);
  }
}
