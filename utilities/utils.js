const utils = {
  deny: (res) => {
    res.status(403).json({
      status: 0,
      message: 'Unathorized Access!'
    });
  },

  errMsg: (err) => {
    res.status(500).json({
      status: 0,
      message: err
    });
  }
}

module.exports = utils;