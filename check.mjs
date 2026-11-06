import assert from 'node:assert/strict';import vm from 'node:vm';import{readFileSync as read}from'node:fs';import{execFileSync}from'node:child_process';
for(const f of ['app.js','admin.js','config.js','data.js'])execFileSync(process.execPath,['--check',f]);
const data=vm.runInNewContext(read('data.js','utf8')+';testData');
assert.deepEqual(Array.from(data,s=>s.questions.length),[16,11,30,18,12,20,20,17,18,11]);assert.equal(new Set(data.flatMap(s=>s.questions.map(q=>q.id))).size,173);assert.equal(data.length,10);
for(const f of ['index.html','admin.html','demo.html']){const html=read(f,'utf8');assert.match(html,/Worketers/);assert.doesNotMatch(html,/KBS|Keep Business Success/);assert.match(html,/name="viewport"/);}
const candidate=read('app.js','utf8');assert.doesNotMatch(candidate,/no-cors/);assert.match(candidate,/r\.saved/);assert.match(candidate,/Date\.now\(\)/);
assert.doesNotMatch(candidate,/\b(?:alert|confirm|prompt)\s*\(|beforeunload/);assert.match(read('index.html','utf8'),/id="confirm-series"/);assert.match(candidate,/INVITATION_EXPIRED/);assert.match(read('admin.html','utf8'),/worketers.github.io\/Recruitment\/admin.html/);
assert.doesNotMatch(read('config.js','utf8'),/__API_URL__/);console.log('OK: sintaxis, 10 series / 173 reactivos, identidad y envío con confirmación.');
