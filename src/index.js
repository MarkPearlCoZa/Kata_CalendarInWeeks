let dateGenerator = require('./YearGenerator.js');
let generator = new dateGenerator();
let weeks = generator.getPeriodsOfYearFor(2017);
let teams = [ 'Galaga', 'Sirius', 'Bumblenauts']

weeks.map((date,index) => {
        let startOfWeek = date.format("DD MMM YYYY");
        let endOfWeek = date.clone().add(4, "days").format("DD MMM YYYY");
        let team = teams[index % 3];
        console.log(startOfWeek + " to " + endOfWeek + ", " + team);
    });
