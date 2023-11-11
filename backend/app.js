const express = require('express')
const axios = require('axios');
const cheerio = require('cheerio');
const cors = require('cors')

const app = express()
app.use(cors());
const port = 3000

app.get('/', (req, res) => {

  const url = 'https://www.sephora.com/ca/en/'
  
  axios.get(url).then((response) => {
    res.status(200).json(response.data);
  })

//   axios({
//     url: url,
//     method: "get",
//     })
//     .then(response => {
//         res.status(200).json(response.data);
//     })
//     .catch((err) => {
//         res.status(500).json({ message: err });
//     });

//   res.send('Hello World!')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})