
import React from "react";
import ReactDOM from "react-dom/client";


/**
 * -Header
 *  -Logo
 *  -Nav items
 *      -Home
 *      -About
 *      -Cart
 * -Body
 *  -Search
 *  -restaurant cards
 *      -image
 *      -res name
 *      -cuisine
 *      -stars
 *      -deliverytime
 * -Footer
 *  -copyright
 *  -links
 * 
 */

const Header=() =>{
    return (
        <div className="header">
        <div className="logo">
            <img width="90px" src="https://cms-assets.tutsplus.com/cdn-cgi/image/width=400/uploads/users/2660/posts/32688/image-upload/restaurant_chef_logo_KFP7VN2.jpeg"/>      
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Cart</li>
            </ul>
        </div>
        </div>
    )

}

const resList= [
    { "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "644303",
      "name": "A2B Veg",
      "cloudinaryImageId": "262ca7b195a5e7084e175600667f53a5",
      "locality": "Periyamet",
      "areaName": "Egmore",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian",
        "North Indian",
        "Sweets",
        "Chinese"
      ],
      "avgRating": 4.3,
      "veg": true,
      "parentId": "439487",
      "avgRatingString": "4.3",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 0.6,
        "serviceability": "SERVICEABLE",
        "slaString": "17 mins",
        "lastMileTravelString": "0.6 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-07 22:45:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              }
            ]
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=644303&source=collection&query=Idli",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
  },
  {"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
  "info": {
    "id": "18341",
    "name": "Doveton Cafe",
    "cloudinaryImageId": "u5e6ne1v8eu61wykyzw5",
    "locality": "Purasavakkam High Road",
    "areaName": "Purasaiwakkam",
    "costForTwo": "₹250 for two",
    "cuisines": [
      "North Indian",
      "Chinese",
      "South Indian",
      "Indian",
      "Tandoor"
    ],
    "avgRating": 4.4,
    "veg": true,
    "parentId": "11076",
    "avgRatingString": "4.4",
    "totalRatingsString": "10K+",
    "sla": {
      "deliveryTime": 18,
      "lastMileTravel": 2,
      "serviceability": "SERVICEABLE",
      "slaString": "18 mins",
      "lastMileTravelString": "2.0 km",
      "iconType": "ICON_TYPE_EMPTY"
    },
    "availability": {
      "nextCloseTime": "2024-01-07 23:00:00",
      "opened": true
    },
    "badges": {
      "imageBadges": [
        {
          "imageId": "v1695133679/badges/Pure_Veg111.png",
          "description": "pureveg"
        }
      ]
    },
    "isOpen": true,
    "type": "F",
    "badgesV2": {
      "entityBadges": {
        "textExtendedBadges": {
          
        },
        "textBased": {
          
        },
        "imageBased": {
          "badgeObject": [
            {
              "attributes": {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            }
          ]
        }
      }
    },
    "aggregatedDiscountInfoV3": {
      "header": "30% OFF",
      "subHeader": "UPTO ₹75"
    },
    "orderabilityCommunication": {
      "title": {
        
      },
      "subTitle": {
        
      },
      "message": {
        
      },
      "customIcon": {
        
      }
    },
    "differentiatedUi": {
      "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {
          
        },
        "video": {
          
        }
      }
    },
    "reviewsSummary": {
      
    },
    "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    "restaurantOfferPresentationInfo": {
      
    }
  },
  "analytics": {
    
  },
  "cta": {
    "link": "swiggy://menu?restaurant_id=18341&source=collection&query=Idli",
    "text": "RESTAURANT_MENU",
    "type": "DEEPLINK"
  },
  "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
},
{"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "35323",
      "name": "Udipi Hotel Sudha",
      "cloudinaryImageId": "jph9cot4ik5u02jsbfsp",
      "locality": "Poonamallee High Road",
      "areaName": "Egmore",
      "costForTwo": "₹300 for two",
      "cuisines": [
        "South Indian"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "472038",
      "avgRatingString": "4.4",
      "totalRatingsString": "10K+",
      "sla": {
        "deliveryTime": 20,
        "lastMileTravel": 2.2,
        "serviceability": "SERVICEABLE",
        "slaString": "20 mins",
        "lastMileTravelString": "2.2 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-07 15:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              }
            ]
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80"
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=35323&source=collection&query=Idli",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
  },
  {"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "646180",
      "name": "Shero Home Food - Chettinad",
      "cloudinaryImageId": "rs1kkbak8niewxukgoqc",
      "locality": "VV Koil Street",
      "areaName": "Purasawalkam",
      "costForTwo": "₹350 for two",
      "cuisines": [
        "South Indian",
        "Chettinad"
      ],
      "avgRating": 4.2,
      "veg": true,
      "parentId": "298931",
      "avgRatingString": "4.2",
      "totalRatingsString": "100+",
      "sla": {
        "deliveryTime": 49,
        "lastMileTravel": 1.7,
        "serviceability": "SERVICEABLE",
        "slaString": "49 mins",
        "lastMileTravelString": "1.7 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 00:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "v1695133679/badges/Pure_Veg111.png",
            "description": "pureveg"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "imageId": "v1695133679/badges/Pure_Veg111.png",
                  "description": "pureveg"
                }
              }
            ]
          },
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=646180&source=collection&query=Idli",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
  },
  {"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "55045",
      "name": "Murugan Idli Shop",
      "cloudinaryImageId": "snv7czlgke72oianoycz",
      "locality": "George Town",
      "areaName": "Poongavanapuram",
      "costForTwo": "₹200 for two",
      "cuisines": [
        "South Indian"
      ],
      "avgRating": 4.4,
      "veg": true,
      "parentId": "1248",
      "avgRatingString": "4.4",
      "totalRatingsString": "5K+",
      "sla": {
        "deliveryTime": 17,
        "lastMileTravel": 0.5,
        "serviceability": "SERVICEABLE",
        "slaString": "17 mins",
        "lastMileTravelString": "0.5 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 00:00:00",
        "opened": true
      },
      "badges": {
        
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textExtendedBadges": {
            
          },
          "textBased": {
            
          },
          "imageBased": {
            
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=55045&source=collection&query=Idli",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
  },
  {"@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    "info": {
      "id": "561677",
      "name": "The BVK Biryani (Bai Veetu Kalyanam)",
      "cloudinaryImageId": "a2ilmocyunjisvnessva",
      "locality": "Thiruvengadam Street",
      "areaName": "Egmore",
      "costForTwo": "₹550 for two",
      "cuisines": [
        "Biryani",
        "South Indian"
      ],
      "avgRating": 4.1,
      "parentId": "337996",
      "avgRatingString": "4.1",
      "totalRatingsString": "1K+",
      "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 1,
        "serviceability": "SERVICEABLE",
        "slaString": "29 mins",
        "lastMileTravelString": "1.0 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-01-08 03:00:00",
        "opened": true
      },
      "badges": {
        "textExtendedBadges": [
          {
            "iconId": "guiltfree/GF_Logo_android_3x",
            "shortDescription": "options available",
            "fontColor": "#7E808C"
          }
        ]
      },
      "isOpen": true,
      "aggregatedDiscountInfoV2": {
        
      },
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "textBased": {
            
          },
          "imageBased": {
            
          },
          "textExtendedBadges": {
            "badgeObject": [
              {
                "attributes": {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "description": "",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              }
            ]
          }
        }
      },
      "orderabilityCommunication": {
        "title": {
          
        },
        "subTitle": {
          
        },
        "message": {
          
        },
        "customIcon": {
          
        }
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      }
    },
    "analytics": {
      
    },
    "cta": {
      "link": "swiggy://menu?restaurant_id=561677&source=collection&query=Idli",
      "text": "RESTAURANT_MENU",
      "type": "DEEPLINK"
    },
    "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
  }
]


  



const Rescards=(props)=>{
    
    const {resData} =props

    const{cloudinaryImageId,name,cuisines,avgRating,costForTwo}=resData?.info
    
    return (
            
            <div className="res-card" style={{backgroundColor:"rgb(228, 225, 222)"}}>
                <img alt ="logo" 
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
                <h3>{name}</h3>
                <h5>{cuisines.join(", ")}</h5>
                <p>{avgRating + " Stars"}</p>
                <p>{costForTwo}</p>
                <p>36 minutes</p> 
            </div>
    )
}

const Body=()=>{
    return(
        <div className="body-container">
            <div className="search">
                <p>Search</p>
            </div>
            <div className="res-container">
              {
                resList.map((restaurant)=>{
                    return <Rescards key={restaurant.info.id} resData={restaurant}/>
                })
                
              }

            
        
            
            
           
           
           
            </div>
            
            
        </div>
        
    )

}
const Applayout=() =>{
    return (
        <div className="app-container">
            <Header/>
            <Body/>
        </div>
    )
}





const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<Applayout/>);





