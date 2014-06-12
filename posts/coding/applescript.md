
## Basics

#### if

```
if xxx then
…
else
…
end if
```

#### func

```
on func(arg)
…
end func

func(arg)
```

## Utils

```
display dialog “hello”
```

## Scripts

#### Application Running?

```
on ApplicationIsRunning(appName)
tell application "System Events" to set appNameIsRunning to exists (processes where name is appName)
return appNameIsRunning
end ApplicationIsRunning

if ApplicationIsRunning("iterm") then
 display dialog "hello"
end if
```

#### 谁是当前前置的应用

```
tell application "System Events" to set FrontAppName to name of first process where frontmost is true
if FrontAppName is "DVD Player" then
display dialog "Get to work!"
end if
```

#### 我的iTerm脚本(for Alfred Workflow)

```
on ApplicationIsRunning(appName)
tell application "System Events" to set appNameIsRunning to exists (processes where name is appName)
return appNameIsRunning
end ApplicationIsRunning

on alfred_script(q)


if ApplicationIsRunning("iterm") then
tell application "iTerm"
set myterm to (make new terminal)
tell myterm
set mysession to (make new session at the end of sessions)
tell mysession
exec command "/bin/zsh -l"
end tell
end tell
activate
end tell
else
--tell application "iTerm" to activate
do shell script "open /Applications/iTerm.app"
end if
end alfred_script
```
