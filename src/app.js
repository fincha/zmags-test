/**
 * Created by fribu on 10.05.17.
 */
'use strict';

import {Server} from "./service/server";
import {Topnews} from "./model/topnews";
import {Users} from "./model/users";
import {output} from "./utils/output";
import {Rx} from "rx";

const server = new Server();
const appDiv = document.getElementById('app');

appDiv.addEventListener("data-loaded", function(e) {
  console.log("event", e.detail);
  appDiv.textContent = "";
  let news = output(e.detail.news, e.detail.userMetaData);
  
  news.forEach((item) => {
    appDiv.appendChild(item);
  })
});

const init = function() {
  loadTopnews()
    .subscribe((topNewsIds) => {
      let promises = [];
      
      topNewsIds.forEach((item) => {
        promises.push(server.fetchSingleNewsItem(item));
      });
  
      loadNews(promises)
        .subscribe((news) => {
          /**
           * fetched all the news meta data, format promises for user meta data
           * @type {Array}
           */
          let promises = [];
          let users = Users.getUniqueUsers(news);
  
          users.forEach((item) => {
            promises.push(server.fetchUserMeta(item));
          });
          
          loadUserMeta(promises)
            .subscribe((userMetaData) => {
              /**
               * all data loaded, send an event to app div, to trigger the output
               */
              appDiv.dispatchEvent(new CustomEvent("data-loaded", {'detail': {
                userMetaData,
                news
              }}))
              
            });
        });
    });
};

const loadTopnews = function() {
  const topNewsPromice = server
    .fetchTopnews()
    .then((json) => {
      return new Topnews(json).randomNews();
    });
  
  return Rx.Observable.fromPromise(topNewsPromice);
};

const loadNews = function(promises) {
  return Rx.Observable.fromPromise(Promise.all(promises));
};

const loadUserMeta = function(promises) {
  return Rx.Observable.fromPromise(Promise.all(promises));
};

init();
