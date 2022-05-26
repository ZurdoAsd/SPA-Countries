const axios = require("axios");
const { Activity, Country } = require("../db");
const { Op } = require("sequelize");

const getCountries = async (req, res) => {
  const name = req.query.name;
  try {
    if (name) {
      let paises = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
        include: [
          {
            model: Activity,
            attributes: ["name"], // se relacionan las actividades de cada país
            through: {
              attributes: [],
            },
          },
        ],
      });
      return res.json(paises);
    }
    let dCountries = await Country.findAll({
      include: [{ model: Activity}],
    });
    if (dCountries.length) {
      return res.json(dCountries);
    } else {
      let apiInfo = await axios.get(" https://restcountries.com/v3.1/all");
      let res = apiInfo.data.map(async (e) => {
        return await Country.create({
          id: e.cca3,
          name: e.name.common,
          flag: e.flags.png,
          capital: e.capital,
          continent: e.continents,
          subregion: e.subregion,
          population: e.population,
          area: e.area,
        });
      });
      return res;
    }
  } catch (error) {
    console.log(error);
  }
};

const getCountriesById = async (req, res) => {
  const { id } = req.params;
  try {
    const detail = await Country.findByPk(id,
      {
        include: [ {model: Activity}],
      }
    );
    res.status(200).json(detail);
  
  } catch (error) {
    res.json({ error: "El id ingresado no es válido" });
  }
};

module.exports = {
  getCountries,
  getCountriesById,
};
