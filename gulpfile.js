const gulp        = require('gulp');
const Hexo        = require('hexo');
const Twitter     = require('twitter');
const fs          = require('fs');
const runSequence = require('run-sequence');


gulp.task('build', (cb) => {

    runSequence(
        'twitter',
        'generate',
        'redirects',
        cb
    )
})

// generate html with 'hexo generate'
const hexo = new Hexo(process.cwd(), {});
gulp.task('generate', function (cb) {

    console.log('hexo running ...');
    hexo.init().then(function () {
        return hexo.call('generate', {
            watch: false
        });
    })
        .then(() => hexo.exit())
        .then(() => cb())
        .catch((err) => {
            console.log(err);
            hexo.exit(err);
            return cb(err);
        })
})

gulp.task('twitter', (cb) => {

    const client = new Twitter({
                                   consumer_key:        process.env.TWITTER_CONSUMER_KEY,
                                   consumer_secret:     process.env.TWITTER_CONSUMER_SECRET,
                                   access_token_key:    '',//process.env.TWITTER_ACCESS_TOKEN_KEY,
                                   access_token_secret: ''//process.env.TWITTER_ACCESS_TOKEN_SECRET
                               });

    let params = {screen_name: 'joeprisk', count: 5};
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {

            tweets = tweets.map((tweet) => {
                return {
                    text:    tweet.text,
                    url:     "https://twitter.com/joeprisk/status/" + tweet.id_str,
                    created: tweet.created_at.substring(0, tweet.created_at.length - 11),
                };
            })

            fs.writeFile('./source/_data/tweets.json', JSON.stringify(tweets), function (err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("Tweets data saved.");
                    cb();
                }
            });
        }
    });
});

gulp.task('redirects', (cb) => {
    console.log("Moving all static hosts files");
    gulp.src("static/*")
        .pipe(gulp.dest('dist'));


});
