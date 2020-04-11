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

// This function executes when a user visits my stack page
function stack() {
    mixpanel.track("Stack Views")
}

// This function executes when someone redirects to bear
function roam() {
    mixpanel.track_links("#roamlink","Roam");
}
// This function executes when someone redirects to brain.fm
function brain() {
    mixpanel.track_links("#brain.fmlink","Brain.fm");
}
// This function executes when someone redirects to spotify
function apple() {
    mixpanel.track_links("#applelink","apple");
}
// This function executes when someone redirects to momentum
function momentum() {
    mixpanel.track_links("#momentumlink","momentum");
}
// This function executes when someone redirects to sketch
function sketch() {
    mixpanel.track_links("#sketchlink","sketch");
}
// This function executes when someone redirects to pocket
function pocket() {
    mixpanel.track_links("#pocketlink","pocket");
}
// This function executes when someone redirects to calm
function calm() {
    mixpanel.track_links("#calmlink","calm");
// This function executes when someone redirects to audible
function audible() {
    mixpanel.track_links("#audiblelink","audible");
}
// This function executes when someone redirects to Lithium
function lithium() {
    mixpanel.track_links("#lithiumlink","Lithium");
}
// This function executes when someone redirects to screentime
function screentime() {
    mixpanel.track_links("#screentimelink","screentime");
}
// This function executes when someone redirects to stratechery
function stratechery() {
    mixpanel.track_links("#stratecherylink","stratechery");
}
// This function executes when someone redirects to badblood
function badblood() {
    mixpanel.track_links("#badbloodlink","badblood");
}
// This function executes when someone redirects to henryviii
function henryviii() {
    mixpanel.track_links("#henryviii","henryviii");
}
// This function executes when someone redirects to hardthings
function hardthings() {
    mixpanel.track_links("#hardthings","hardthings");
}
// This function executes when someone redirects to bigshort
function bigshort() {
    mixpanel.track_links("#bigshort","bigshort");
}
// This function executes when someone redirects to littleprince
function littleprince() {
    mixpanel.track_links("#littleprince","littleprince");
}