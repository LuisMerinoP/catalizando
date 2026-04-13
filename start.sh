#!/bin/sh
NODE=/volume1/@appstore/Node.js_v12/usr/local/bin/node
PIDFILE=/volume1/server/siulrecycling/pid.txt
LOGFILE=/volume1/server/siulrecycling/server.log
DIR=/volume1/server/siulrecycling

# Kill old process if running
if [ -f "$PIDFILE" ]; then
  kill "$(cat "$PIDFILE")" 2>/dev/null
  sleep 1
fi

cd "$DIR"
nohup "$NODE" index.js > "$LOGFILE" 2>&1 &
echo "$!" > "$PIDFILE"
sleep 1
echo "Started PID: $(cat "$PIDFILE")"
cat "$LOGFILE"
