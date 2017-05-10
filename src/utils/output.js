/**
 * Created by fribu on 10.05.17.
 */

import {Users} from '../model/users';

/**
 * prepare html output
 *
 * @param news
 * @param usermeta
 * @returns {Array}
 */
export function output(news, usermeta) {
  let newsElements = [];
  news.forEach((item) => {
    let user = Users.getUserByName(item.by, usermeta);
    
    let newsElement = document.createElement("div");
    newsElement.className = "panel panel-default col-xs-12 col-sm-6 col-md-4 col-lg-3";
    
    let brElement = document.createElement("br");
    let footerElement = document.createElement("div");
    footerElement.className = "panel-footer";
    
    let bodyElement = document.createElement("div");
    bodyElement.className = "panel-body";
    
    let titleElement = document.createElement("div");
    titleElement.className = "panel-heading";
    titleElement.textContent = item.title;
    
    let urlElement = document.createElement("a");
    urlElement.setAttribute("href", item.url);
    urlElement.textContent = "visit url";
  
    bodyElement.textContent += "Timestamp: " + item.time;
    bodyElement.appendChild(brElement);
    bodyElement.textContent += "Timestamp: " + item.score;
    bodyElement.appendChild(brElement);
    bodyElement.appendChild(urlElement);
  
    footerElement.textContent = user.id + " (" + user.karma + ")";
    
    newsElement.appendChild(titleElement);
    newsElement.appendChild(bodyElement);
    newsElement.appendChild(footerElement);
    
    newsElements.push(newsElement);
  });
  
  return newsElements;
}
