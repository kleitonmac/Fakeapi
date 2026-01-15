import './Filtro.css'

export default function Filtros({
    produtos,
    busca,
    setBusca,
    categoria,
    setCategoria,
}){
    const categorias = [...new Set(produtos.map(p => p.category))]
    
    return (
        <div className='controles'>
            <input 
            type="text"
            placeholder='Buscar Produtos'
            value={busca}
            onChange={e => setBusca(e.target.value)}
            />

            <select value={categoria} onChange={e => setCategoria(e.target.value)}>
                <option value="">Todas as categorias</option>
                {categorias.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
            </select>

        </div>  
    )
}