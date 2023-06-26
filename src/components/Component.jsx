

const Component=({data})=>{

    return (
        <div className="container">
            <h4>{data.phrase}</h4>
            <h3>author: {data.author}</h3>
        </div>
    )
}
export default Component;