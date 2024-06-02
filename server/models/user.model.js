import { Model, Schema, model } from "mongoose";



const userSchema=new Schema(
    {
        name:{
            type:String
        },
        email:{
            type:String
        },
        phoneNumber:{
            type:String
        },
        planSetup:[
            {
                money:{
                    type:String
                },
                dailyRequired:{
                    status:{
                        type:String,
                        enum : ['LOAN','EDUCATION','MEDICAL','OTHER','NO'],
                        default:'NO'
                    },
                    amount:{
                        type:String
                    }
                },

            }
        ],
        record:[
            {
                amount:{
                    type:String
                },
                purpose:{
                    purposes:{
                        type:String,
                        enum:['ShopingImg','ShopingOther','Medical','Fun','Bills','Transport','Petrol','FoodImg','Loan','Borrow','Other']
                    }
                }
            }
        ]
    },
    {
        timestamps:true
    }

)

const User=model('AmountUser',userSchema)

export default User