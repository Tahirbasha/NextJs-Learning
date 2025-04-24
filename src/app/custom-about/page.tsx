import { redirect } from "next/navigation"
export default function CustomAbout () {
    redirect('/')
    return <h1>CustomAbout</h1>
}