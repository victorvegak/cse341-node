const helloRoute = (req, res) => {
  res.send("hello there");
};

const hiRoute = (req, res) => {
  res.send("hi Vic");
};

const goodRoute = (req, res) => {
  res.send("Good Job Vic");
};
module.exports = {
  helloRoute,
  hiRoute,
    goodRoute
};