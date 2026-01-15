import { useEffect, useState } from 'react'

//components
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Filtros from '../components/Filtros/Filtro'
import ListaProdutos from '../components/ListaProdutos/ListaProduto'

// estilos
import '../styles/container.css'
import './Home.css'

export default function Home(){
    const [produtos ,setProdutos] = useState([]);
    const [busca ,setBusca] = useState("");
    const [categoria ,setCategoria] = useState("");

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
           .then(res => res.json())
           .then(data => setProdutos(data))
           .catch(()=> setProdutos([]))
}, []);
    const produtosFiltrados = produtos
     .filter(p => p.title.toLowerCase().includes(busca.toLowerCase()))
     .filter(p => (categoria ? p.category === categoria : true ))
    
     return (
        <div className='home'>
            <Header/>
            <main className='container'>
                <Filtros
                produtos = {produtos}
                buscar={busca}
                setBusca={setBusca}
                categoria={categoria}
                setCategoria={setCategoria}
                />

                <ListaProdutos
                produtos={produtosFiltrados}
                />
            </main>
            <Footer/>

        </div>
    )
}