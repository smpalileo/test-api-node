const utils = {
  deny: (res) => {
    res.status(403).json({
      status: 0,
      message: 'Unathorized Access!'
    });
  },

  errMsg: (res, err) => {
    res.status(500).json({
      status: 0,
      message: err
    });
  },

  successMsg: (res, payload) => {
    res.status(200).json({
      status: 1,
      message: payload
    });
  }
}

module.exports = utils;