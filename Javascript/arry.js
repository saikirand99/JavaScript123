var mobile1 =[
    {
        brand: "Samsung",
        price: 25000,
        features:{
        RAM:"4GB",
        camera: 32,
        screensize: 17
        },
        acceserios: ['charger', 'usb', 'earphones']
    },
    {
        brand: "Samsung1",
        price: 250001,
        features:{
        RAM:"4GB1",
        camera: 321,
        screensize: 171
        },
        acceserios: ['charger1', 'usb1', 'earphones1']
       },
       {
        brand: "Samsung2",
        price: 250002,
        features:{
        RAM:"4GB2",
        camera: 322,
        screensize: 172
        },
        acceserios: ['charger2', 'usb2', 'earphones2']
       }

]
mobile1.forEach(mobile => {
    for (const prop in mobile){
        var mob=mobile[prop];
        if (mob instanceof Array){
        for (const i in mob)
        console.log('accessory: '+mob[i]);
        }else if(typeof mob == 'object'){
        for(const key in mob){
        console.log(key+" : "+mob[key]);
        }
        }else if(typeof mob == 'function'){
        mob();
        }else
        console.log(mob);
       }
    
});


