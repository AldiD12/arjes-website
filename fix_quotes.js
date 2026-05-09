const fs = require('fs');

function fixFile(file, replaces) {
  let c = fs.readFileSync(file, 'utf-8');
  for (const [find, replace] of replaces) {
    c = c.replace(find, replace);
  }
  fs.writeFileSync(file, c);
}

fixFile('src/components/Inquire.tsx', [
  [/'Thanks for reaching out\. I\\'ll get back to you as soon as possible\.'/g, `"Thanks for reaching out. I'll get back to you as soon as possible."`],
  [/'Even one sentence is enough\. Somewhere you\\'ve seen a photo of, something you want to avoid, a food you love\.'/g, `"Even one sentence is enough. Somewhere you've seen a photo of, something you want to avoid, a food you love."`]
]);

fixFile('src/components/Journeys.tsx', [
  [/'Every trip is private — just you, your people, and me\. No fixed departures, no coach groups\. Below are the trips I\\'m asked for most; everything is adjustable\.'/g, `"Every trip is private — just you, your people, and me. No fixed departures, no coach groups. Below are the trips I'm asked for most; everything is adjustable."`]
]);

fixFile('src/components/About.tsx', [
  [/\\"With guests above Valbonë, autumn '24\\"/g, `"With guests above Valbonë, autumn '24"`]
]);

console.log('done');
