import { Link } from "react-router-dom";

export default function Nopage()
{
    const mystyle = {

    fontSize: "x-large",
    color: "rgba(247, 19, 19, 0.712)",
    padding: "15px"
    };
    return (
        <div><br/><br/>
        <center><h1>404 not found</h1></center><br/><br/>
        <center><Link style = {mystyle} to = "/">Go home..</Link></center>
        </div>
    )
}