const eventproxy = require("eventproxy");
const cheerio = require("cheerio");
const superagent = require("superagent");
const url = require("url");

const codeUrl = "https://cnodejs.org";
superagent.get(codeUrl).end((err, res) => {
  if (err) {
    return console.error(err);
  }
  var topicUrls = [];
  var $ = cheerio.load(res.text);
  $("#topic_list .topic_title").each((idx, element) => {
    var $element = $(element);
    var href = url.resolve(codeUrl, $element.attr("href"));
    topicUrls.push(href);
  });
  var ep = new eventproxy();

  ep.after("topic_html", topicUrls.length, topics => {
    topics = topics.map(topicPair => {
      // console.log(topicPair);
      var topicUrl = topicPair[0];
      var topicHtml = topicPair[1];
      var $ = cheerio.load(topicHtml);
      return {
        title: $(".topic_full_title")
          .text()
          .trim(),
        href: topicUrl,
        commit1: $(".reply_item .markdown-text")
          .eq(0)
          .text()
          .trim()
      };
    });
    console.log("final:");
    console.log(topics);
  });
  topicUrls.forEach(function(topicUrl) {
    superagent.get(topicUrl).end(function(err, res) {
      console.log("fetch " + topicUrl + " successful");
      ep.emit("topic_html", [topicUrl, res.text]);
    });
  });
});
