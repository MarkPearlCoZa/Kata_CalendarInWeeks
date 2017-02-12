let dateGenerator = require('./YearGenerator.js');
let generator = new dateGenerator();
let weeks = generator.getPeriodsOfYearFor(2017);

weeks.map((date,index) => {
        let startOfWeek = date.format("DD MMM YYYY");
        let endOfWeek = date.clone().add(4, "days").format("DD MMM YYYY");
        console.log("Week " + index.toString() + " - " + startOfWeek + " to " + endOfWeek );
    });
