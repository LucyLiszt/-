var form = {
  formsubmit: function (url, thisx) {
    thisx.axios.post(url, thisx.values)
      .then((res) => {
        console.log(res)
        if (res.data === 1) {
          alert('Success!')
        } else {
          alert('System Wrong!')
          // console.log(typeof res.data)
        }
      })
  },
  getform: function (url, thisx) {
    thisx.axios.get(url, {
      params: {key: thisx.fkey}
    }).then(function (res) {
    // console.log(res.data)
      thisx.items = res.data
      console.log(thisx.items)
    })
  }
}

exports.form = form
