const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const threeLan = users.filter(function(user){
    return user.languages.length >= 3;
});
console.log(threeLan);

const emails = users.map(function(user){
   return user.email;
});
console.log(emails);

const experience = users.reduce((accumulation, currentNumber) => {
    return accumulation + currentNumber.yearsOfExperience;
}, 0);
console.log(experience / users.length);

const lngEmail = users.reduce((longestEmail, user) => user.email.length >= longestEmail.length ? user.email : longestEmail, "");
console.log(lngEmail);

const names = users.reduce((accumulation, currentNumber) => {
    if (users.indexOf(currentNumber) === users.length - 1) {
        return accumulation + currentNumber.name + ".";
    } else {
        return accumulation + currentNumber.name + ", ";
    }
}, "Your instructors are: ");
console.log(names);