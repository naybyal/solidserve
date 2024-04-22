import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import User from './components/user'
export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
       <div>
            <h1>Home</h1>
            <h1>Server Side Rendered : </h1>
            <p>Session: {JSON.stringify(session)}</p>
            <h1>Client Side Rendered : </h1>
            <User />
       </div>
  );
}
