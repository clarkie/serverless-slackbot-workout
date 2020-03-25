"use strict";

const { SLACK_WEBHOOK, CHANNEL_NAME } = process.env;

module.exports.hello = async event => {
  return sendMessage("testing");
};

const sendMessage = message =>
  axios.post(SLACK_WEBHOOK, {
    channel: CHANNEL_NAME,
    username: "WonderWorkout",
    text: message,
    icon_emoji: ":weight_lifter:"
  });
