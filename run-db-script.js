const massive = require('massive');

massive('postgres://sxitvkgatauiwy:54a6474a8226e9add8bb9e9f6f62790509209c0fd86786d2f1e385cd095b73a6@ec2-54-221-234-62.compute-1.amazonaws.com:5432/d9g3n7faphbcq2?ssl=true')
    .then(db => db.join())
    .then(data => console.log(data) || console.log('Script ran successfully'))
    .catch(err => console.error(err));