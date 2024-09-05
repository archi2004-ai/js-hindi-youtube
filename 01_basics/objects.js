const jsUser = {
    isLoggedIn  : false,
    lastLoginDays :["mon","tues"]
}
jsUser.greeting =function() {
    console.log(`hello me its ,${this.lastLoginDays}`);
}
console.log(jsUser.greeting());
