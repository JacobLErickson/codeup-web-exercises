"use strict";

const wait = (ms) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    })
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));

const getLastPush = function(username) {
    const giturl = "https://api.github.com/users/" + username + "/events";
    return fetch(giturl, {
        headers: {
            'Authorization': `token ${gitHubKey}`
        }
    })
        .then(response => response.json())
        .then(events => {
            for (let event of events) {
                if (event.type == "PushEvent") {
                    // console.log(`${event.type} at ${event.created_at}`)
                    return (event.created_at)
                }
            }
        })
};

console.log(getLastPush('JacobLErickson'));
