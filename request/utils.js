const request=require('request')

const geocode=(address,callback)=>{
    const geocodeURL='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoibWFkaGF2YTI3IiwiYSI6ImNrdzh5eHRjYzM3MHAybm50aXV5aDFqN2QifQ.OJq-PpFl6Bivc7eminFY9A&limit=1'
    request({ url:geocodeURL, json:true },(error,response)=>{
        if(error){
            callback('unable to connect..',undefined)
        }else if(response.body.features.length===0){
            callback('Wrong search! Try another..',undefined)
        }else{
            callback(undefined,{
                longitude :response.body.features[0].center[0],
                latitude :response.body.features[0].center[1]
            })
        }
    })
}

module.exports=geocode