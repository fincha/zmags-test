# Zmags Test

Pre-build solution can be found in `dist` directory
To build call `gulp`

Load dependencies

> npm i

Load gulp, if you don't have it

> npm gulp -g

## My solution

Due having 3 API call, which also depends on each other it
is an interesting challenge to avoid ugly nested promises.
That's why I have chosen the RxJS and at the end the Event
to solve this problem.

I personally would prefere to do this with TypeScript, but to
show some ES6 skills, I used the ES6.

## Known limitations

I am using the HTML5 fetch() function to load the data from
the API, so your browser should support this.

Build process does not includes the index.html, I created it
manually, it is not a scope of the task anyway.

## Libraries
- RxJS
- Bootstrap (only to make this more nicely)
- gulp
- jQuery (Bootstrap need this)

