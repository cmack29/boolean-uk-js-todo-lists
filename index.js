let userInfo = "";

for (let i=0; i < users.length; i++) {
    const id = users[i].id;
    const name = users[i].name;
    const city = users[i].address.city;

    const row = `${id}\n | ${name}\n ${city}\n`;

    userInfo = userInfo + row;

    console.log("Iteration #", i + 1);
    console.log("message: ", userInfo);

    console.log(userInfo);
};

console.log(userInfo);
alert(userInfo);

const selectedUserId = prompt("Enter your ID to show your list");

let theUser = "";

for (let i=0; i < users.length; i++) {
  
    if (parseInt(selectedUserId) === users[i].id) {
        const username = users[i].username
        console.log(username);
        theUser = username + `\n`;
    }
}

console.log(theUser); 

let todo = "";

for (let i = 0; i < todos.length; i++) {
    
    const userId = todos[i].userId;
    const title = todos[i].title;
    const completed = todos[i].completed;
    
    const list = `${userId}\n | ${title}\n | ${completed}\n`;
    console.log(typeof selectedUserId, typeof userId);


    if (parseInt(selectedUserId) === userId) {
        todo = todo + list;

        // console.log("selected user ID: ", selectedUserId);
    }

    // console.log("Iteration #", i + 1);
    // console.log("To do: ", todo);
}
const fulltodo = theUser + todo;
console.log(fulltodo);
alert(fulltodo);