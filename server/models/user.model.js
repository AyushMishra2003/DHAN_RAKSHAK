import { Model, Schema, model } from "mongoose";



const userSchema=new Schema(
    {
        name:{
            type:String,
            required:true,
        },
        email:{
            type:String,
            required:true
        },
        phoneNumber:{
            type:String,
            required:true
        },
        planSetup:[
            {
                money:{
                    type:String
                },
                status:{
                    type:String,
                    enum : ['LOAN','EDUCATION','MEDICAL','OTHER','NO'],
                    default:'NO'
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