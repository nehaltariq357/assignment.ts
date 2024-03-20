"use strict";
// 15. Changing Guest List: You just heard that one of your guests can’t make the
// dinner, so you need to send out a new set of invitations. You’ll have to think of
// someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the
// end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with
// the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still
// in your list.
let list = ["Nehal", "Ali", "Hamza"];
list.forEach((invite) => {
    console.log(`${invite} would you like to join me to dinner tomorrow ? `);
});
console.log(`unfortunately ${list[2]} ask me he cannot come to dinner tommorrow , Making new Guest list`);
list[2] = "Haris";
list.forEach((invite) => {
    console.log(`${invite} would you like to join me to dinner tomorrow please`);
});
