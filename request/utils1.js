const request=require('request')

const forecast=(long,lat,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=c2b6f654817f7b80f5e9e12557507543&query='+lat+','+long
    request({ url, json:true },(error,response)=>{
        if(error){
            callback('unable to connect..',undefined)
        }else if(response.body.error){
            callback('Wrong search! Try another..',undefined)
        }else{
            callback(undefined,response.body.location)
        }
    })
}

module.exports=forecast