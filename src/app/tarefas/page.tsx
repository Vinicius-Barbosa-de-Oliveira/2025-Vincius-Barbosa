"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Cabecalho from "@/componentes/Cabecalho";
import ModalTarefa from "@/componentes/ModalTarefa";

export interface TarefaInterface {
  id: number;
  title: string;
  completed: boolean;
}

const Tarefa: React.FC<{ titulo: string; concluido?: boolean }> = ({ titulo, concluido }) => {
  const [estaConcluido, setEstaConcluido] = useState(concluido);

  const classeCard = `p-3 mb-3 rounded-lg shadow-md hover:cursor-pointer hover:border ${
    estaConcluido
      ? "bg-gray-800 hover:border-gray-800"
      : "bg-gray-400 hover:border-gray-400"
  }`;
  const classeCorDoTexto = estaConcluido ? "text-amber-50" : "";

  return (
    <div className={classeCard} onClick={() => setEstaConcluido(!estaConcluido)}>
      <h3 className={`text-xl font-bold ${classeCorDoTexto}`}>{titulo}</h3>
      <p className={`text-sm ${classeCorDoTexto}`}>
        {estaConcluido ? "Concluída" : "Pendente"}
      </p>
    </div>
  );
};

const Tarefas: React.FC<{ dados: TarefaInterface[] }> = ({ dados }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    {dados.map((tarefa) => (
      <Tarefa key={tarefa.id} titulo={tarefa.title} concluido={tarefa.completed} />
    ))}
  </div>
);

const Home = () => {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [tarefas, setTarefas] = useState<TarefaInterface[]>([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/todos")
      .then((res) => setTarefas(res.data.todos))
      .catch((err) => console.error("Erro ao carregar tarefas:", err));
  }, []);

  const adicionarTarefa = (titulo: string) => {
    const novaTarefa: TarefaInterface = {
      id: Date.now(),
      title: titulo,
      completed: false,
    };
    setTarefas((prev) => [novaTarefa, ...prev]);
  };

  return (
    <div className="container mx-auto p-4">
      <Cabecalho />
      <button
        onClick={() => setMostrarModal(true)}
        className="mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Nova Tarefa
      </button>

      {mostrarModal && (
        <ModalTarefa
          onFechar={() => setMostrarModal(false)}
          onAdicionarTarefa={adicionarTarefa}
        />
      )}

      <Tarefas dados={tarefas} />
    </div>
  );
};

export default Home;
