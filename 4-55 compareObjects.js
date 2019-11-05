var user1 = {name : "nerd", org: "dev"};
var user2 = {name : "nerd", org: "dev"};
var eq = JSON.stringify(user1) == JSON.stringify(user2);
console.log(eq);
// Solution: https://stackoverflow.com/questions/1068834/object-comparison-in-javascript