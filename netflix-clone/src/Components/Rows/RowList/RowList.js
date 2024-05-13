import React from 'react'
import Row from '../Row/Row'
import requestes from '../../../utils/requestes'

const RowList = () => {
    return (
        <>
            <Row 
                title='NETFLIX ORIGINALS'
                fetchUrl={requestes.fetchNetflixOriginals}
                isLargeRow  ={true}
            />
            <Row 
                title='Trending Now'
                fetchUrl={requestes.fetchtrending}
            />   
            <Row 
                title='Top Rated'
                fetchUrl={requestes.fetchTopRatedMovies}
            /> 
            <Row 
                title='Action Movies'
                fetchUrl={requestes.fetchActionMovies}
            /> 
            <Row 
                title='Comedy Movies'
                fetchUrl={requestes.fetchComadyMovies}
            /> 
            <Row 
                title='Horror Movies'
                fetchUrl={requestes.fetchHorrorMovies}
            /> 
            <Row 
                title='Romance Movies'
                fetchUrl={requestes.fetchRomanceMovies}
            />
            <Row 
                title='TV-Show'
                fetchUrl={requestes.fetchTvShows}
            /> 
            <Row 
                title='Documentaries'
                fetchUrl={requestes.fetchDocumentataries}
            />  
        </>
    )
}

export default RowList
