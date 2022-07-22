import useSWR from 'swr'

export default function Movies2(){

    const {data, error} = useSWR(`http://www.omdbapi.com/?apikey=966cf12d&s=bagdad`, fetcher)    

    if (error) return <div>falha na requisição...</div>

    if (!data) return <div>carregando...</div>

    return (

        <ul>
            {data.Search.map( (m, i) => 
               <div key={i} className='movies'>
                    <Link href={`/movies${m.imdbID}`}>
                      <a>{m.Title}</a>
                    </Link>

                    <img width={100} src={m.Poster}></img>
               </div>
            )}

        </ul>

    )    

}

async function fetcher(url) {

    const res = await fetch(url);

    const json = await res.json();

    return json;

}