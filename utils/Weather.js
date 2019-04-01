const service = {};

service.getweatherInfo = () => {
  wx.request({
    url: 'https://www.tianqiapi.com/api/?version=v1',
    data: '',
    header: {},
    method: 'GET',
    dataType: 'json',
    responseType: 'text',
    success: function (res) {
      console.log(res.data);
    },
    fail: function (res) {
      console.log(res.data);
    },
    complete: function (res) { },
  })
}

module.exports = service