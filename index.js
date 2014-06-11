var marked = require('marked');
var fs = require("fs");



var walk = function(path, cb) {
  var dirList = fs.readdirSync(path);
  // console.log(dirList);
  dirList.forEach(function(item){
    if (fs.statSync(path+'/'+item).isDirectory()) {
      walk(path+'/'+item, cb);
    } else {
      if (item != '.DS_Store') {
        cb(path+'/'+item);
      }
    }
  });
}

var myMkdir = function(path) {
  if (fs.existsSync(path)) {
    return;
  } else {
    var index = path.lastIndexOf('/');
    if (index != -1) {
      myMkdir(path.slice(0,index));
    }
    fs.mkdirSync(path);
  }
}

var head = fs.readFileSync('layouts/head.html');
var foot = fs.readFileSync('layouts/foot.html');

var genPosts = function() {
  walk('posts', function(path) {
    var a = path.indexOf('/');
    var b = path.lastIndexOf('/');
    myMkdir('sites'+path.slice(a,b));
    fs.readFile(path, 'utf8', function(err, data) {
      var dist = 'sites'+path.slice(a,-2)+'html';
      var out = marked(data);
      fs.writeFile(dist, head+out+foot, function(err) {if (err) throw err;});
    });
  });
}

var getFileList = function() {
  var l = [];
  walk('posts', function(path) {
    var a = path.indexOf('/');
    l.push(path.slice(a+1));
  })
  return l;
}

var l = getFileList();
