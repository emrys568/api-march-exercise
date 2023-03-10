const express = require('express')
const app = express()
const PORT = 8000

const family = {

    'emre':{
    'full name' : 'Himmet Emre AYTAC',
    'age' : 29,
    'job' : 'Engineer,Coder,Academican',
    'birth place' : 'Turkey'
},
    'merve':{
    'full name' : 'Merve AYTAC',
    'age' : 32,
    'job' : 'Academican',
    'birth place' : 'Turkey'
},
    'ali':{
    'full name' : 'Ali AYTAC',
    'age' : 64,
    'job' : 'Retired',
    'birth place' : 'Turkey'
},
    'tulay':{
    'full name' : 'Tülay AYTAC',
    'age' : 54,
    'job' : 'Housewife',
    'birth place' : 'Turkey'
}
    
}
app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:familyName', (request,response)=>{
    const familierName = request.params.familyName.toLowerCase()
    if(family[familierName]) {
        response.json(family[familierName])
    }else{
        response.json(family['emre'])
    }
    
  
  //  response.json(family)
})
app.listen(PORT, ()=> {
    console.log(`The server is running on port ${PORT}! You better go catch it!` )
})