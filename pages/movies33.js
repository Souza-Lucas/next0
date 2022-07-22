import useSWR from 'swr'
import {useState} from 'react'
import { useForm } from 'react-hook-form'

export function TheForm({filtro, url, acao}){

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    return (
        <div>
            <form className='form-search-movie' onSubmit={handleSubmit(acao)}>
                <label htmlFor="titleSearchString">{filtro}</label>

                <input 
                    id="titleSearchString" 
                    {...register("titleSearchString", { required: true, minLength: 3})} 
                    type="text" 
                    autoComplete="true"
                    placeholder='Título'
                />

                {errors.titleSearchString && <span>Insira no mínimo três caracteres   </span>}

                <input 
                    id="yearSearchNumber" 
                    {...register("yearSearchNumber", { required: true, minLength: 4, maxLength: 4 })} 
                    type="text" 
                    autoComplete="true"
                    placeholder='Ano'
                />

                {errors.yearSearchNumber && <span> Insira um ano válido </span> }
                <button type='submit'>{url === '' ? 'Mostrar' : 'Ocultar'}</button>

            </form>
        </div>
    )
}

export function TheMovies({data,show}){

    if (!show) return (<div></div>)

    if (!data) return (<div></div>)

    if (data.error) return (<div>falha na pesquisa</div>)

    if (data.Response == 'False') return (<div>Nada encontrado</div>)

    return (

        <div>
            <div> {data.Title} --- {data.Year}</div>        
        </div>
    )

}

export default function Movies33(){

    const [state, setState] = useState({url:'', titleSearchString:'', yearSearchNumber:''});

    const {data, error} = useSWR(state.url, async () => {

        if (!state.url || !state.titleSearchString || !state.yearSearchNumber) return {Search:''}
        if (state.url === '' || state.titleSearchString ==='' || state.yearSearchNumber === '') return {Search:''}

        const res = await fetch(`${state.url}/?apiKey=966cf112d&t=${state.titleSearchString}&y=${state.yearSearchNumber}`)
        const json = await res.json();

        return json

    })


    const onClickHandler = () => {

        const t = document.querySelector('#titleSearchString').value
        const y = document.querySelector('#yearSearchNumber').value

        if (state.url === '') {
            setState({url:'https://www.omdbapi.com',titleSearchString:t,yearSearchNumber:y})
        }
        else{
            setState({url:'',titleSearchString: state.titleSearchString, yearSearchNumber: state.yearSearchNumber})
        }
    }



    return (
        <div>
            <TheForm filtro={'Filtro de título'} url={state.url} acao={onClickHandler}/>
            <TheMovies data={error?{error:'Erro na pesquisa'}: data ? data: {Search:''} } show={state.url !== ''} />
        </div>
    )
}