console.log({
type:"AmusementPark",

CompositionRollerCoster:{
    type: "",
    safety:null,
    speed:{
        amount:157,
        unit:"kmh",
    },
    seats:24,
},


CompositionFerrisWheel:{
    
    speed:{
        amount:5,
        unit:"kmh"
    },
    seats: 24,
    costs: 5 + " " + "Dolar",
},




});
console.log({
    restaurant:{
        composition:{
            employee:{
                chef:1,
                sousChef:1,
                kitchenManger:1,
                cooks:15,
                cleaners:12,

            },
        },
        building:{
            width: 10 + " " + "meter",
            height: 3 + " " + "meter",
            length: 20 + " " + "meter",
        },

    },
});

console.log({
    Airplane:{
        type:"Boeing" + " " + 747,
        InternalComposition:{
            Capacity:180_000 + " " + "pounds",
            wings:{front: 2, back:2},
            landingGears:{
                wheels:{
                    noseWheels:2,
                    mainGears:4,
                }


            },
           
        },



    },


});

console.log({
    train:{
        InternalComponents:{
            boogies:30,
            couplers:"use to connect between trains",
            brakes:"using air brakes",

        },
    },
    motivePowerOverTheYears:{
        example1:"pulled by horse",
        example2:"using steam",
        example3:"disel",
        example4:"electric",
    },
});
console.log({

    
        lamborgini:{ ExternalComposition: {
    name: "ferrari",
    wheels: 4,
    horsePower: {
      amount: 562,
      unit: "rpm",
    },

    weight: {
      amount: 1_485,
      unit: "kilograms",
    },

    height: {
      amount: 1_213,
      unit: "millimeter",
    },

    width: {
      amount: 1_937,
      unit: "millimeter",
    },

    length: {
      amount: 4_527,
      unit: "millimeter",
    },
  },

  engine: {
    topSpeed: {
      amount: 325,
      unit: "Km/h",
    },
    InternalComposition: {
      Cylinders: 6,
      EngineCapacity: {
        amount: 4_500,
        unit: "cc",
      },
    },
  },},
 
});
