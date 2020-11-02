var mobile = {
    brand: "Samsung",
    price: 25000,
    features:{
    RAM:"4GB",
    camera: 32,
    screensize: 17
    },
    acceserios: ['charger', 'usb', 'earphones']
   }
    
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