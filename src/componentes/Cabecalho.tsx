const Titulo = () => (
	<h1 className="text-2xl font-bold mb-1">React - Conceitos básicos</h1>
);

const SubTitulo = () => (
	<h2 className="text-4xl font-bold mb-6">Lista de tarefas</h2>
);

const Cabecalho = () => {
	return (
		<div className="text-center">
			<Titulo />
			<SubTitulo />
		</div>
	);
};

export default Cabecalho;
export { Titulo, SubTitulo };
