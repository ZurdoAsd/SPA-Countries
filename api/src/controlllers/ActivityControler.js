const { Activity, Country } = require("../db");

const createActivity = async (req, res) => {
  const {name ,difficulty ,duration, season, countries} = req.body;
  try {
    let activ = await Activity.create( {
      name: name,
      difficulty:difficulty,
      duration: duration,
       season: season,
      countries:[countries]    
  });

    countries.forEach(async (e) => {
    let countryActiv = await Country.findOne({
        where: {
            name: e 
        }
    })
    await activ.addCountry(countryActiv);                     
});

// const NWactiv = await Activity.create( {
//   name ,difficulty ,duration, season
// })
//   let countryActiv = Country.findAll({
//       where: {
//           name: countries
//       }
//   })

//  await NWactiv.addCountry(countryActiv);                     
// ;

   res.json({msg:"actividad cargada"})
} catch (error) {
    console.log(error)
}
};


const getActivities = async (req, res) => {
  try {     
    let activity = await Activity.findAll({
       include: {model: Country}
    })
    return res.json(activity) 
}catch (error) {
   console.log(error)
}
};

module.exports = { getActivities, createActivity };
