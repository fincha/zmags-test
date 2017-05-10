/**
 * Created by fribu on 10.05.17.
 */

export class Users {
  /**
   * @param username
   * @param users
   */
  static getUserByName(username, users = []) {
    for(let i = 0; i < users.length; i++) {
      if(users[i].id === username) {
        return users[i];
      }
    }
  }
  
  /**
   * Filter the news array and returns an array with unique user names
   *
   * @param users Array
   * @returns {Array}
   */
  static getUniqueUsers(users = []) {
    if(!users) {
      return [];
    }
    
    let userName = [];
    
    users.forEach((user) => {
      let userSaved = false;
      for(let i = 0; i < userName.length; i++) {
        if(userName[i] === user.by) {
          userSaved = true;
          break;
        }
      }
      
      if(!userSaved) {
        userName.push(user.by);
      }
    });
    
    return userName;
  }
}
