marked = require 'marked'
fs = require "fs"
jade = require 'jade'

walk = (path, cb) ->
  dirList = fs.readdirSync path
  for item in dirList
    do (item) ->
      if fs.statSync("#{path}/#{item}").isDirectory()
        walk "#{path}/#{item}", cb
      else if item isnt '.DS_Store'
        cb "#{path}/#{item}"

myMkdir = (path) ->
  return if fs.existsSync path
  index = path.lastIndexOf('/')
  if index isnt -1
    myMkdir path.slice(0,index)
  fs.mkdirSync path

getFileList = () ->
  l = []
  walk 'posts', (path) ->
    a = path.indexOf '/'
    l.push path.slice(a+1)
  l

walkForJson = (path, list) ->
  dirList = fs.readdirSync path
  for item in dirList
    do (item) ->
      if fs.statSync("#{path}/#{item}").isDirectory()
        obj = {}
        obj.name = item
        obj.list = []
        list.push obj
        walkForJson "#{path}/#{item}", obj.list
      else if item isnt '.DS_Store'
        list.push item.slice(0,-2)+'html'

makeLink = (li) ->
  "<p><a href='#{li.slice(0,-2)}html'>#{li}</a></p>"

head = fs.readFileSync('layouts/head.html')
foot = fs.readFileSync('layouts/foot.html')

l = getFileList()

# mkdir
for li in l
  do (li) ->
    index = li.lastIndexOf '/'
    myMkdir "sites/"+li.slice(0,index)

# convert posts
for li in l
  do (li) ->
    fs.readFile 'posts/'+li, 'utf8', (err, data) ->
      content = marked data
      fs.writeFile "sites/#{li.slice(0,-2)}html", head+content+foot, (err) ->
        throw err if err

# index.html

list = []
walkForJson('posts', list)

options =
  list: list

jade.renderFile 'index.jade', options, (err, html) ->
  throw err if err
  # console.log html
  fs.writeFile "sites/index.html", head+html+foot, (err) ->
    throw err if err
