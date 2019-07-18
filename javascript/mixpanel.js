// This function executes when a user visits my page
function pagevisits() {
    mixpanel.track("page visits");
}

// This function executes when a user visites my blog page
function blogviews() {
    mixpanel.track("blog views");
 }
// This function executes when someone clicks on my instagram icon
function instagram() {
    mixpanel.track_links("#instalink","Instagram");
}

// This function executes when someone clicks on my Twitter icon
function twitter() {
    mixpanel.track_links("#tweetlink","Twitter");
}

// This function executes when someone clicks on my Linkedin icon
function linkedin() {
    mixpanel.track_links("#linkedlink","LinkedIn");
}

// This function executes when a user visits my bookshelf page
function bookviews() {
    mixpanel.track("book views")
}

// This function executes when a user visits my people page
function peoplevisits() {
    mixpanel.track("people visits")
}

// This function executes when a user visits my music page
function musicvisits() {
    mixpanel.track("music visits")
}