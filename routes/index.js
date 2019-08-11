var express = require('express');
var router = express.Router();
var request = require('request');

const host = 'http://sm-members.fcfc-1.com';
const jsonString = '28293a76-72e1-11e9-8373-0a1877ec907c1.json';

//jamra info & main schedule
router.get('/groupInfo', function(req, res, next) {
  var options = { 
    method: 'POST',
    url: host+'/group_infos/sync_gi/'+jsonString,
    body: 
    { os: '02',
      ips: 'N',
      cache: 'N',
      ig: 'Y',
      it: '180000',
      pw: '18a1679ba28e5463acd02e5f593b69fb3c824411d5d300f374f43d1a31ce326d',
      ver: 328,
      gid: '240a5952-5392-11e9-889a-0ac734d8ccc81' },
    json: true };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.json(body);
  });
});

//BBS list
router.get('/bbs/list', function(req, res, next) {
  var options = {
    method: 'POST',
    url: host+'/articles/select_articles/'+jsonString,
    body: {
      "os" : "i1",
      "ver" : 328,
      "it" : "180000",
      "s_t" : 0,
      "pw" : "b4c297631ccefcb681498c0871268f4dad26a427fc2227b5c07479838fe9956c",
      "cat" : "all",
      "g_t" : 554022274,
      "mn" : "김용성",
      "gid" : "240a5952-5392-11e9-889a-0ac734d8ccc81"
    },
    json: true };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.json(body);
  });
});

//BBS detail
router.get('/bbs/detail', function(req, res, next) {
  var options = {
    method: 'POST',
    url: host+'/comments/select_comments/'+jsonString,
    body: {
      "s_t" : 0,
      "pw" : "b4c297631ccefcb681498c0871268f4dad26a427fc2227b5c07479838fe9956c",
      "aim" : false,
      "os" : "i1",
      "it" : "180000",
      "ver" : 328,
      "gid" : "240a5952-5392-11e9-889a-0ac734d8ccc81",
      "gt" : 1,
      "new" : "Y",
      "mn" : "김용성",
      "a_hk" : "240a5952-5392-11e9-889a-0ac734d8ccc81"
    },
    json: true };

  var ot = req.query.ot;
  var bbsId = req.query.bbsId;
  
  options.body.a_pk = options.body.gid + ot;
  options.body.a_rk = Number(ot);
  options.body.aid = bbsId;
  
  console.log(options.body);

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.json(body);
  });
});

//today
router.get('/today', function(req, res, next) {
  var options = {
    method: 'POST',
    url: host+'/today_event_infos/sync_today_event/'+jsonString,
    body: {
      "uc" : "N",
      "os" : "i1",
      "ver" : 328,
      "gn" : "JAMRA CREW (마감)",
      "it" : "180000",
      "pw" : "18a1679ba28e5463acd02e5f593b69fb3c824411d5d300f374f43d1a31ce326d",
      "rrn" : 0,
      "g_t" : 554022274,
      "gid" : "240a5952-5392-11e9-889a-0ac734d8ccc81",
      "ft" : 1
    },
    json: true };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);
    res.json(body);
  });
});

module.exports = router;
