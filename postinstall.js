'use strict';

var msg = 'FLAGRANT SYSTEM ERROR\n\n';

var rand = Math.random();

if (rand < 0.5) {
  msg += 'Computer Over.\nVirus = Very Yes.';
} else {
  msg += 'The system is down. I dunno what you did, moron, but you sure screwed everything up.';
}

console.error(msg);
