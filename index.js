const core = require('@actions/core');
const github = require('@actions/github');

try {
  core.setOutput("message", "I am the architect of my life; I build its foundation and choose its contents.");
} catch (error) {
  core.setFailed(error.message);
}
