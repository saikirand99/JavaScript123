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

   var jsonstring = JSON.stringify(mobile);
    
   console.log(jsonstring);  
   var jsobj = JSON.parse(jsonstring);
   console.log(jsobj.brand);