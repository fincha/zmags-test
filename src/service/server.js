/**
 * Created by fribu on 10.05.17.
 */
"use strict";

/**
 * Defines the server communication
 */
export class Server {
  constructor() {
    this.urlBase = "https://hacker-news.firebaseio.com/v0/";
  }
  
  /**
   * @returns {Promise}
   */
  fetchTopnews() {
    return this._load(this.urlBase + "topstories.json");
  }
  
  /**
   * @param id
   * @returns {Promise}
   */
  fetchSingleNewsItem(id) {
    return this._load(this.urlBase + `item/${id}.json`)
  }
  
  /**
   * @param id
   * @returns {Promise}
   */
  fetchUserMeta(id) {
    return this._load(this.urlBase + `user/${id}.json`)
  }
  
  /**
   * @param url
   * @returns {Promise}
   */
  _load(url) {
    return fetch(url).then((response) => {
      return response.json();
    }).then(function(json) {
      return json;
    }).catch((err) => {
      console.error("failed fetching the url", url, err);
    });
  }
}
