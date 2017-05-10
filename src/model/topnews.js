/**
 * Created by fribu on 10.05.17.
 */

import {randomArray} from "../utils/randomArray";

export class Topnews {
  constructor(newsIds) {
    this.news = newsIds;
  }
  
  /**
   * return random ids from array
   *
   * @param amount
   * @returns {Array}
   */
  randomNews(amount = 10) {
    return randomArray(this.news, amount);
  }
}
