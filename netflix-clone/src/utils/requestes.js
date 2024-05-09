const API_KEY =process.env.REACT_APP_API_KEY;
const requestes ={
    
    fetchtrending: '/trending/all/week?api_key={API_KEY}&language=en-US',
    fetchNetflixOriginals: "/discover/tv?api_key={API_KEY}&with_networks=213",
    fetchTopRatedMovies: '/movie/top_rated?api_key={API_KEY}&language=en-US',
    fetchActionMovies: '/discover/movie?api_key={API_KEY}&with_genres=28',    
    fetchComadyMovies:'/discover/movie?api_key={API_KEY}&with_genres=35',
    fetchHorrorMovies:'/discover/movie?api_key={API_KEY}&with_genres=27',
    fetchRomanceMovies:'/discover/movie?api_key={API_KEY}&with_genres=10749',
    fetchDocumentataries:'/discover/movie?api_key={API_KEY}&with_genres=99',
    fetchTvShows:'tv/popular?api_key={API_KEY}&language=en-US&page=1',
};

export default requestes;

