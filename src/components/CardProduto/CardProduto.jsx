import './CarProduto.css';

export default function CarProduto({ produto }) {
    return (
        <div className='card'>
            <img src={produto.image} alt={produto.title} />
            <h2>{produto.title}</h2>
            <span className='preco'>R$ {produto.price.toFixed(2)}</span>
            <span className='categoria'>{produto.category}</span>

            <button disabled>Adicionar ao carrinho</button>
            
        </div>

    )
}
