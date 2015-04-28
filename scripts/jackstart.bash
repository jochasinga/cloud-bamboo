#!/bin/bash

# source this to run jackd server

export DISPLAY=:0
export `dbus-launch | grep ADDRESS`

export `dbus-launch | grep PID`
jackd -d alsa > ~/Desktop/jack.log 2>&1
#jackd -dalsa -dhw:0 -r48000 -p1024 -n2 > ~/Desktop/jack.log 2>&1



