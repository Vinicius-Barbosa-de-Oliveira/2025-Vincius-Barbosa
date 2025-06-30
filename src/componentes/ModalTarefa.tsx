import React, { useState } from "react";

export default function ModalTarefa({ onFechar }: { onFechar: () => void }) {
    const [tarefa, setTarefa] = useState("");
  
    return (
      <div className="p-6 bg-white rounded shadow-md max-w-md mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-4">Adicionar Nova Tarefa</h2>
  
        <input
          type="text"
          className="w-full border border-gray-300 rounded p-2 mb-4"
          placeholder="Digite sua tarefa"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />
  
        <div className="flex justify-between">
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={() => alert(`Tarefa adicionada: ${tarefa}`)}
          >
            Adicionar
          </button>
  
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={onFechar}
          >
            Fechar
          </button>
        </div>
      </div>
    );
  }
  