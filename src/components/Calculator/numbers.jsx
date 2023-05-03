
export function Numbers({updateNumber, evalNumber})
{
    // console.log(props);
    let num = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['+', 0, '-'], ['/', '*', '=']];
    return (
        <div style={{ display: "flex", justifyContent: "center"}}>
            <table border="1px solid black" style={{marginTop: "15px"}}>
                <tbody>
                    {
                    num.map((val, index) => {
                        return (
                            <tr key ={index}>
                                {
                                val.map((val1, index1) =>{
                                    return(
                                val1 === '=' ? <td style={{padding: "25px", fontSize: "30px", background: "linear-gradient(to top, rgba(0, 0, 0, 0.534), rgba(129, 243, 247, 0.308))"}} key={index1} onClick={(e) => {evalNumber(e)}}>{val1}</td> : <td style={{padding: "15px 35px", fontSize: "30px", background: "linear-gradient(to top, rgba(0, 0, 0, 0.534), rgba(129, 243, 247, 0.308))"}} key={index1} onClick={(e)=>{updateNumber(e)}}>{val1}</td>
                            )}
                    )}
                            </tr>
                        )
                    })
                    } 
                </tbody>
            </table>
        </div>
    )

}
