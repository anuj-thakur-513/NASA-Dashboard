const { parse } = require("csv-parse");
const fs = require("fs");
const path = require("path");

const habitablePlanets = [];

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
      .on("data", (data) => {
        if (isHabitablePlanet(data)) {
          habitablePlanets.push(data);
        }
      })
      .on("error", (e) => {
        console.log(e);
        reject(e);
      })
      .on("end", () => {
        console.log(
          `Found ${habitablePlanets.length} habitable planets like earth!!!`
        );
        resolve();
      });
  });
}

module.exports = {
  loadPlanetsData,
  planets: habitablePlanets,
};
