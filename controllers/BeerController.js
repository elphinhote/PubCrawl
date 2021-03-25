const axios = require("axios");

module.exports = {
  localBars: async (req, res) => {
    try {
      const { data } = await axios.get(
        `http://beermapping.com/webservice/loccity/${process.env.beerkey}/${req.body.search}&s=json`
      );
      res.json(data);
    } catch (err) {
      res.json(err);
    }
  },
  coordinateBars: async (req, res) => {
    const barArray = req.body.idArray;
    console.log(typeof barArray);
    if (!barArray || barArray.length === 0) {
      return res.status(400).json([]);
    }
    Promise.all(barArray.map((id) => getCoordinates(id)))
      .then((results) => {
        let coordinatesArray = [];
        results.forEach((item) => {
          console.log(item.data);
          if (item.data[0].lat && item.data[0].lng) {
            coordinatesArray.push(item.data[0]);
          }
        });
        res.json(coordinatesArray);
      })
      .catch((err) => {
        res.status(400).json([]);
      });
    // res.json({ msg: "Worked okay" });
    // try {
    //   const { data } = await axios.get(
    //     `http://beermapping.com/webservice/locmap/${process.env.beerkey}/${req.body.id}&s=json`
    //   );
    //   res.json(data);
    // } catch (err) {
    //   res.json(err);
    // }
  },
};

function getCoordinates(id) {
  return axios.get(
    `http://beermapping.com/webservice/locmap/${process.env.beerkey}/${id}&s=json`
  );
}
