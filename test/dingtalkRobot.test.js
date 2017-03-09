'use strict';

const assert = require('assert');
const request = require('supertest');
const mm = require('egg-mock');

describe('test/dingtalkRobot.test.js', () => {
  let app;

  before(function* () {
    app = mm.app({
      baseDir: 'robot',
    });
    yield app.ready();
  });

  afterEach(mm.restore);

  it('app.dingtalkRobot', function* () {
    assert(app.dingtalkRobot);
  });

  it('should sendText success', function(done) {
    request(app.callback())
      .get('/sendText')
      .expect(200)
      .end(done);
  });

  it('should sendLink success', function(done) {
    request(app.callback())
      .get('/sendLink')
      .expect(200)
      .end(done);
  });

  it('should sendMarkdown success', function(done) {
    request(app.callback())
      .get('/sendMarkdown')
      .expect(200)
      .end(done);
  });

});