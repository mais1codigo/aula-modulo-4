const estoqueLivros = [];

function adicionarLivro(titulo, autor, quantidade) {
    const livroExistente = estoqueLivros.find(livro => livro.titulo === titulo);
    if (livroExistente) {
        console.log(`O livro "${titulo}" já existe no estoque.`);
        return;
    }
    estoqueLivros.push({ titulo, autor, quantidade });
    console.log(`Livro "${titulo}" adicionado ao estoque.`);
}

function removerLivro(titulo) {
    const index = estoqueLivros.findIndex(livro => livro.titulo === titulo);
    if (index === -1) {
        console.log(`O livro "${titulo}" não foi encontrado no estoque.`);
        return;
    }
    estoqueLivros.splice(index, 1);
    console.log(`Livro "${titulo}" removido do estoque.`);
}

function atualizarQuantidade(titulo, novaQuantidade) {
    const livro = estoqueLivros.find(livro => livro.titulo === titulo);
    if (!livro) {
        console.log(`O livro "${titulo}" não foi encontrado no estoque.`);
        return;
    }
    livro.quantidade = novaQuantidade;
    console.log(`Quantidade do livro "${titulo}" atualizada para ${novaQuantidade}.`);
}

function listarLivros() {
    if (estoqueLivros.length === 0) {
        console.log("O estoque está vazio.");
        return;
    }
    console.log("Lista de livros no estoque:");
    estoqueLivros.forEach(livro => {
        console.log(`Título: ${livro.titulo}, Autor: ${livro.autor}, Quantidade: ${livro.quantidade}`);
    });
}

