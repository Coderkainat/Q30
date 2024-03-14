// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// Define the list of users
var users = [];
// Check if the list of users is not empty
if (users.length === 0) {
    console.log("We need to find some users!");
}
else {
    // If the list is not empty, remove all usernames
    users = [];
    console.log("All usernames have been removed.");
}
// Make a list of current users
var currentUsers = ['john', 'alice', 'bob', 'emma', 'david'];
// Make a list of new users
var newUsers = ['emma', 'peter', 'ALICE', 'sarah', 'mike'];
// Function to check if a username is available
function isUsernameAvailable(username) {
    return !currentUsers.some(function (user) { return user.toLowerCase() === username.toLowerCase(); });
}
// Loop through new users and check availability
newUsers.forEach(function (user) {
    if (isUsernameAvailable(user)) {
        console.log("faizan ".concat());
    }
    else {
        console.log("kainat ".concat());
    }
});
