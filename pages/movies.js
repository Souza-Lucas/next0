export default function Movies({data}){
    return (
        <div>
            <table>
                <thead>
                    <tr className="thead"> 
                        <th>Título</th>
                        <th>Ano</th>
                        <th>Poster</th>
                    </tr>
                </thead>
                <tbody>
                    {data.Search.map( (m, i) => <tr key={i}>
                        <td>{m.Title}</td>
                        <td>{m.Year}</td>
                        <td><Image width={200} height={200} src={m.Poster}/></td>
                    </tr>)}  
                </tbody>
            </table>
            <Link href='/'><a className='principal-page'>Home</a></Link>
        </div>

    )

}



export async function getServerSideProps(context){

    const res = await fetch(`http://www.omdbapi.com/?apikey=966cf112d&s=${context.params.title}`)

    const data = await res.json()

    return {

        props: {

            data

        }

    }

}