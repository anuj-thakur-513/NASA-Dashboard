const { parse } = require("csv-parse");
const fs = require("fs");
const path = require("path");
const planets = require("./planets.mongo");
const { error } = require("console");

const isHabitablePlanet = function (planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
};

/** Declaring Promise
 * const promise = new Promise((resolve, reject) => {
 *  resolve(42);
 * })
 * promise.then((result) => {
 *
 * });
 * const result = await promise;
 * console.log(result);
 */

function loadPlanetsData() {
  return new Promise((resolve, reject) => {
    const pathToFile = path.join(
      __dirname,
      "..",
      "..",
      "data",
      "kepler-data.csv"
    );
    fs.createReadStream(pathToFile)
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", async (data) => {
        if (isHabitablePlanet(data)) {
          await savePlanet(data);
        }
      })
      .on("error", (e) => {
        console.log(e);
        reject(e);
      })
      .on("end", async () => {
        const countPlanetsFound = (await getAllPlanets()).length;
        console.log(
          `Found ${countPlanetsFound} habitable planets like earth!!!`
        );
        resolve();
      });
  });
}

async function getAllPlanets() {
  return await planets.find(
    {},
    {
      _id: 0,
      __v: 0,
    }
  );
}

async function savePlanet(planet) {
  try {
    await planets.updateOne(
      {
        keplerName: planet.kepler_name,
      },
      {
        keplerName: planet.kepler_name,
      },
      {
        upsert: true,
      }
    );
  } catch (err) {
    console.error(`Error in saving the planet: ${err}`);
  }
}

module.exports = {
  loadPlanetsData,
  getAllPlanets,
};
