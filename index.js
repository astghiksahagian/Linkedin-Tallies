/*
1. extract following html elements
    - user (will help with identifying name when going through for loop)
    - user's activity (will track all of copy pasted activity)
    - results (to alter and return results at the end)

2. create function to find amount of likes and comments
    3. create variable called userActivityValue from input.value (aka user-activity.value)
    4. create for loop that loops through userActivityValue and searches for any instance of user + action (e.g. like [liked, supported, etc.] and comment) and appends them to each respective array (likes array and comments array)
    5. set results to each array's length
    6. return results

7. add event listener for submit button before for loop aka before step 2
*/

var form = document.querySelector(".form-control");
var user = document.getElementById("user")
var userActivity = document.getElementById("user-activity");
var submitBtn = document.querySelector("submit-btn");
var results = document.querySelector(".results");

var likesCount = 0;
var commentsCount = 0;

form.addEventListener("submit", activityCount);

function activityCount (userValue, userActivityValue) {

    var userValue = user.value.split(" ");
    var userActivityValue = userActivity.value.split(" ");

    console.log(userValue[0]);
    console.log(userActivityValue[2]);


    for (var i = 0; i < userActivityValue.length; i++) {

        if (i + 2 <= userActivityValue.length) {
            if (userActivityValue[i] === userValue[0] && 
                userActivityValue[i + 1] === userValue[1] && 
                userActivityValue[i + 2] === "commented") {
                    commentsCount++;
            }

            if (userActivityValue[i] === userValue[0] && 
                userActivityValue[i + 1] === userValue[1] && 
                userActivityValue[i + 2] === "replied") {
                    commentsCount++;
            }

            if (userActivityValue[i] === userValue[0] && 
                userActivityValue[i + 1] === userValue[1] && 
                userActivityValue[i + 2] === "liked") {
                    likesCount++;
            }

            if (userActivityValue[i] === userValue[0] && 
                userActivityValue[i + 1] === userValue[1] && 
                userActivityValue[i + 2] === "celebrates") {
                    likesCount++;
            }


            if (userActivityValue[i] === userValue[0] && 
                userActivityValue[i + 1] === userValue[1] && 
                userActivityValue[i + 2] === "supports") {
                    likesCount++;
            }

            if (userActivityValue[i] === userValue[0] && 
                userActivityValue[i + 1] === userValue[1] && 
                userActivityValue[i + 2] === "loves") {
                    likesCount++;
            }
        }

        if (i + 3 <= userActivityValue.length) {
            if (userActivityValue[i] === userValue[0] && 
                userActivityValue[i + 1] === userValue[1] && 
                userActivityValue[i + 2] === "is" && 
                userActivityValue[i + 3] === "curious") {
                    likesCount++;
            }
        }

        if (i + 4 <= userActivityValue.length) {
            if (userActivityValue[i] === userValue[0] && 
                userActivityValue[i + 1] === userValue[1] && 
                userActivityValue[i + 2] === "find" && 
                userActivityValue[i + 3] === "this" && 
                userActivityValue[i + 4] === "funny") {
                    likesCount++;
            }

            if (userActivityValue[i] === userValue[0] && 
                userActivityValue[i + 1] === userValue[1] &&
                userActivityValue[i + 2] === "finds" && 
                userActivityValue[i + 3] === "this" && 
                userActivityValue[i + 4] === "insightful") {
                    likesCount++;
            }
        }
    }

    event.preventDefault();
    return results.textContent = `Likes: ${likesCount}; \n Comments: ${commentsCount}`;
}

