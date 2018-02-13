import Intro from '../components/Intro'
import Footer from '../components/Footer'
import Movie from '../components/Movie'

export const routes=[
{
    path:'/',
    component:Intro
},
{
    path:'/:id',
    component:Movie
}
]