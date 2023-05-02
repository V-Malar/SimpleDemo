import '../Calculator/calculator.css';

export function Input({number})
{
    return (
        <div style={{display: "flex", justifyContent: "center"}}>
            <input type="text" id="io" style={{textAlign:"right"}} value={number}/>
        </div>
    )
}