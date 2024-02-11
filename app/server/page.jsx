import { authOptions } from "../api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


const ServerPage = async () => {

    const session = await getServerSession(authOptions)

    if(!session){
        redirect('/')
    }

    redirect('/process')

}



export default ServerPage