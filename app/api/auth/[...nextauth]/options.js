import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google"
import { connectToDB } from "@/utils/database"
import User from "@/models/user"

export const authOptions = {

    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    
    
    callbacks: {
       
        async signIn({ user, account }) {     
            const { name, email, image } = user

            if (account.provider === 'google'){
                try{
                    await connectToDB()
                    const userExist = await User.findOne({ email })
                    console.log(userExist)
                    if(!userExist){
                        const res = await fetch('http://localhost:3000/api/user', {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            
                            body: JSON.stringify({
                                name,
                                email,
                                image
                            })
                        });

                        if(res.ok){
                                return user      
                        }
                        }
                    
                }catch(err){
                    console.log(`The error has occured: ${err.message}`)
                }
            }
            return user
        }
    }

}





export default NextAuth(authOptions)

