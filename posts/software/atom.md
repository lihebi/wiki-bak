---

layout: hebi-post
title: Atom
location: 合肥
time: 00:36:22
categories: 软件
---


## Palette (Cmd-Shift-p)

* styleguide

<!--more-->

## Package

## Package Create Tutorial

### 创建工程

`Package Generator: Generate Package`

now I have:

* a package located in `$HOME/.atom/packages/xxx`
* command available `xxx:toggle`
* when execute it, output `Alive` message

### 新的命令

lib/ascii-art.coffee

```
module.exports =
  activate: ->
    atom.workspaceView.command "ascii-art:convert", => @convert()

  convert: ->
    # This assumes the active pane item is an editor
    editor = atom.workspace.activePaneItem
    editor.insertText('Hello, World!')
```

### 激活命令

package.json

```
"activationEvents": ["ascii-art:convert"],
```

### 快捷键

keymaps/ascii-art.cson

```
'.editor':
  'cmd-alt-a': 'ascii-art:convert'
```

### 重启window

`window:reload`, then everything works.

### ASCII

add figlet dependence

```
"dependencies": {
   "figlet": "1.0.8"
}
```

modify `lib/ascii-art.coffee`

```
convert: ->
  # This assumes the active pane item is an editor
  editor = atom.workspace.activePaneItem
  selection = editor.getSelection()

  figlet = require 'figlet'
  figlet selection.getText(), {font: "Larry 3D 2"}, (error, asciiArt) ->
    if error
      console.error(error)
    else
      selection.insertText("\n#{asciiArt}\n")
```
