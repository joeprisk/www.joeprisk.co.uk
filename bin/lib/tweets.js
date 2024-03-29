const fs = require("fs-extra");
const Twitter = require("twitter");
const twitterHandle = "joeprisk";

module.exports = async function getTweets() {
    const client = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
      access_token_key: "", //process.env.TWITTER_ACCESS_TOKEN_KEY,
      access_token_secret: "", //process.env.TWITTER_ACCESS_TOKEN_SECRET
    });

    return new Promise((resolve) => {
      client.get(
        `statuses/user_timeline`,
        { screen_name: twitterHandle, count: 5 },
        function (_error, data) {
          const tweets = data.map(({ text, id_str, created_at }) => ({
            text,
            url: `https://twitter.com/${twitterHandle}/status/${id_str}`,
            created: created_at.substring(0, created_at.length - 11),
          }));

          fs.writeFile(
            "./source/_data/tweets.json",
            JSON.stringify(tweets, null, 2)
          );

          resolve();
        }
      );
    });
  }