const request=require('request')
const geocode=require('./utils.js')
const forecast=require('./utils1.js')

// const url='http://api.weatherstack.com/current?access_key=c2b6f654817f7b80f5e9e12557507543&query=27.2046,77.4977'
// request({ url:url , json:true }, (error,response)=>{
//     // const dataObj =JSON.parse(response.body)
//     // console.log(dataObj.location)
//     // console.log(response)

//     //if json option is added
//     console.log(response.body.location)
// })

// const geocodeURL='https://api.mapbox.com/geocoding/v5/mapbox.places/hyderabad.json?access_token=pk.eyJ1IjoibWFkaGF2YTI3IiwiYSI6ImNrdzh5eHRjYzM3MHAybm50aXV5aDFqN2QifQ.OJq-PpFl6Bivc7eminFY9A&limit=1'
// request({ url:geocodeURL, json:true },(error,response)=>{
    // if(error){
    //     console.log('unable to connect..')
    // }else if(response.body.features.length===0){
    //     console.log('Wrong search! Try another..')
    // }else{
    //     const longitude =response.body.features[0].center[0]
    //     const latitude =response.body.features[0].center[1]
    //     console.log(longitude,latitude)
    // }
// })

// console.log(process.argv[2])

if(!process.argv[2]){
    console.log('Enter address..')
}else{
    geocode(process.argv[2],(error,data)=>{
        if(error){
           return console.log('Error:',error)
        }
        console.log('Data:',data)
        forecast(data.longitude,data.latitude,(error,fcdata)=>{
            if(error){
                return console.log('Error:',error)
            }
            console.log('Data:',fcdata.country)
        })
    })
}



// forecast(78.46667,17.36667,(error,data)=>{
//     console.log('Error:',error)
//     console.log('Data:',data)
// })