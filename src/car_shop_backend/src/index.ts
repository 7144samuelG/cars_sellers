import { bool, Canister, Err, ic, nat64, Ok, Principal, query, Record, Result, StableBTreeMap, text, update, Variant, Vec } from 'azle';
// const Comment=Record({
//     nameofcar:text,
//     by:Principal,
//     Comment:text,
//     created_at:nat64
// });
// const Car=Record({
//     nameofcar:text,
//     model:text,
//     carimageurl:text,
//     pricetag:nat64,
//     owner:text,
//     ownerid:Principal,
//     id:Principal,
//     descriptionofcar:text,
//     features:text,
//     statusof:text,
//     hadanaccident:bool,
//     registrationnumber:text,
//     ownerphonenuber:text,
//     owneremail:text,
//     comments:Vec(Comment),
// });
// const Question=Record({
//     email:text,
//     question:text,
//     id:Principal,
// });

// const CarComment=Record({
//     nameofcar:text,
//     by:Principal,
//     Comment:text,
//     created_at:nat64
// });

// const Termination=Record({
//     ownerid:Principal,
//     carregistrtionnumber:text,
//     reason:text,
//     youremail:text,
//     id:Principal
// });
// const SellerCompalin=Record({
//     id:Principal,
//     ownerid:Principal,
//     email:text,
//     complain:text,
//     createdAt:nat64,
// })
// //payloads
// const carPayload=Record({
//     nameofcar:text,
//     model:text,
//     carimageurl:text,
//     pricetag:nat64,
//     negotiable:bool,
//     owner:text,
//     descriptionofcar:text,
//     features:text,
//     statusof:text,
//     hadanaccident:bool,
//     registrationnumber:text,
//     ownerphonenuber:text,
//     owneremail:text,
// });
// const searchcarpayload=Record({
//     nameofthecar:text,
// });

// const questionPayload=Record({
//     email:text,
//     question:text,
// });

// const commentPayload=Record({
//     nameofcar:text,
//     Comment:text,
// });

// const terminationpayload=Record({
//     ownerid:Principal,
//     carregistrtionnumber:text,
//     reason:text,
//     youremail:text
// });

// const sellerCompalinPayload=Record({
//     ownerid:Principal,
//     email:text,
//     complain:text
// })
// //errors
// const errors=Variant({
//     CarNotFound:text,
//     OnlyOwner:text,
//     MissingCredentials:text,
//     InvalidPayload:text,
//     CarAlreadyInMarket:text,
//     CarFound:text

// });
//types
// type Car=typeof Car.tsType;
// type errors= typeof errors.tsType;
// type Question=typeof Question.tsType;
// type CarComment=typeof CarComment.tsType;
// type Termination=typeof Termination.tsType;
// type SellerCompalin=typeof SellerCompalin.tsType;
// //storages
// const carstorages=StableBTreeMap<text,Car>(0);
// const carstoragesbyname=StableBTreeMap<text,Car>(1);
// const questionstorages=StableBTreeMap<Principal,Question>(2);
// const contarctterminationstorages=StableBTreeMap<Principal,Termination>(3);
// const sellercomplaistorage=StableBTreeMap<Principal,SellerCompalin>(4);
export default Canister({
    whoamai: query([],Principal, () => {
        return ic.caller();
    }),
//    registercarforsale:update([carPayload],Result(text,errors),(payload)=>{
//     if(!payload.nameofcar||!payload.carimageurl||!payload.descriptionofcar||!payload.registrationnumber){
//         return Err({
//             MissingCredentials:"missing parameters"
//         });
//     }
//         //checkif the registartion number already exist
//         const getCarRegistartionNumber=carstorages.get(payload.registrationnumber).Some;
//         if(getCarRegistartionNumber){
//             return Err({
//                 CarAlreadyInMarket:"the car is already listed in acme car salers for sale"
//             });
//         };
//         //check if carname is already in market
//         const getcar=carstoragesbyname.get(payload.nameofcar).Some;
//         if(getcar){
//             return Err({
//                 CarFound:"car already exist"
//             })
//         }
//         //register car
//         const carid:Principal=generateId();
//         const ownerid=ic.caller();
//         const newCarInMarket:Car={
//             nameofcar:payload.nameofcar,
//             model:payload.model,
//             carimageurl:payload.carimageurl,
//             pricetag:payload.pricetag,
          
//             owner:payload.owner,
//             ownerid,
//             id:carid,
//             descriptionofcar:payload.descriptionofcar,
//             features:payload.features,
//             statusof:payload.statusof,
//             hadanaccident:payload.hadanaccident,
//             registrationnumber:payload.registrationnumber,
//             ownerphonenuber:payload.ownerphonenuber,
//             owneremail:payload.owneremail,
//             comments:[]
//         };
//         carstorages.insert(payload.registrationnumber,newCarInMarket);
//         carstoragesbyname.insert(payload.nameofcar,newCarInMarket);
//         return Ok("succeess")
    
//    }),

//    //function to get all cars avaialble for sale
//    getallcars:query([],Vec(Car),()=>{
//     return carstorages.values();
//    }),
   
//    //function to search a car by name of of car
//    getacar:query([searchcarpayload],Result(Car,errors),(payload)=>{
//     if(!payload.nameofthecar){
//         return Err({
//             MissingCredentials:"name of the car is missing"
//         });

//     }
//     const getcar=carstoragesbyname.get(payload.nameofthecar).Some;
//     if(!getcar){
//         return Err({
//             CarNotFound:"no car found with given name"
//         })
//     }
//     return Ok(getcar);
//    }),
// //function to enquire about our services
// enquire:query([questionPayload],Result(text,errors),(payload)=>{
//     if(!payload.email||!payload.question){
//         return Err({
//             MissingCredentials:"some credentials are missing"
//         })
//     };
//     const id=generateId();
//     const newquestion:Question={
//         email:payload.email,
//         question:payload.question,
//         id,
//     }
//     questionstorages.insert(id,newquestion);
//     return Ok("we will get to you as soon as possible");
// }),
// //provide comment about a car
// commentaboutacar:update([commentPayload],Result(text,errors),(payload)=>{
//     if(!payload.Comment||!payload.nameofcar){
//         return Err({
//             MissingCredentials:"missing crendetials"
//         })
//     };
//     //check if car exist
//     const getcar=carstoragesbyname.get(payload.nameofcar).Some;
//     if(!getcar){
//         return Err({
//             CarNotFound:"failed to comment"
//         })
//     };
//     //add comment
//     const newComment:CarComment={
//         nameofcar:payload.nameofcar,
//         by:ic.caller(),
//         Comment:payload.Comment,
//         created_at:ic.time()
//     }

//     //update
//     const updateComments:Car={
//         ...getcar,
//         comments:[...getcar.comments,newComment],
//     };
//     carstorages.insert(getcar.registrationnumber,updateComments);
//     carstoragesbyname.insert(payload.nameofcar,updateComments);
//     return Ok("comment submitted successfully");
// }),

// //function to ask termination of you sale contract from acme sellers
//  requestContracttermination:update([terminationpayload],Result(text,errors),(payload)=>{
//     if(!payload.carregistrtionnumber||!payload.ownerid||!payload.youremail){
//         return Err({
//             MissingCredentials:"some credentails are missing"
//         })
//     };
//     //check if car exist
//     const getCar=carstorages.get(payload.carregistrtionnumber).Some;
//     if(!getCar){
//         return Err(
//         {
//             CarNotFound:"car with registration number is not found"
//         }
//         )
//     };
// //verify its the owner sending the request
// if(getCar.ownerid.toText()!=ic.caller().toText()){
//     return Err({
//         OnlyOwner:"you are no the owner"
//     })
// };
// const id=generateId();
// const newTerminationRequest:Termination={
//     ownerid:payload.ownerid,
//     carregistrtionnumber:payload.carregistrtionnumber,
//     reason:payload.reason,
//     youremail:payload.youremail,
//     id
// }
// contarctterminationstorages.insert(id,newTerminationRequest);
// return Ok(`contract termination on sale of car of registartion number ${payload.carregistrtionnumber} sent successfully .wait for our feedback.thankyou `)
//  }),

//  //seller complain about our services that we are providing
//  sellercomplain:update([sellerCompalinPayload],Result(text,errors),(payload)=>{
//     if(!payload.complain||!payload.email||!payload.ownerid){
//         return Err({
//             MissingCredentials:"some credentails are missing"
//         })
//     };
//     const id=generateId()
//     const newsellerComplain:SellerCompalin={
//         id,
//         ownerid:ic.caller(),
//         email:payload.email,
//         complain:payload.complain,
//         createdAt:ic.time()
//     }
//     sellercomplaistorage.insert(id,newsellerComplain);
//     return Ok("complain submitted successfully");
//  })
})
function generateId(): Principal {
    const randomBytes = new Array(29)
      .fill(0)
      .map((_) => Math.floor(Math.random() * 256));
    return Principal.fromUint8Array(Uint8Array.from(randomBytes));
  }