

function Code(props ){      /*or function code ({name,age,city}) */
    return (
        <div>
        <h2> welcome :{props.name} </h2>
        <h2> welcome :{props.age} </h2>
        <h2> welcome :{props.city} </h2>


        {/* and
        <h2> welcome :{name} </h2>
        <h2> welcome :{age} </h2>
        <h2> welcome :{city} </h2>
         */}

        </div>
    )
}

export default Code;