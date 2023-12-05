export const TabelaTreino = () => {
  const treinos = [
    { musculo: 'Bíceps', exercicio: 'Rosca Direta', series: 3, kg: 10, repeticao: 10, descanso: 1, unidadeDescanso: 'minuto', observacoes: 'Manter a postura' },
    { musculo: 'Bíceps', exercicio: 'Rosca Direta', series: 3, kg: 10, repeticao: 10, descanso: 1, unidadeDescanso: 'minuto', observacoes: 'Manter a postura' },
    { musculo: 'Bíceps', exercicio: 'Rosca Direta', series: 3, kg: 10, repeticao: 10, descanso: 1, unidadeDescanso: 'minuto', observacoes: 'Manter a postura' },
    { musculo: 'Bíceps', exercicio: 'Rosca Direta', series: 3, kg: 10, repeticao: 10, descanso: 1, unidadeDescanso: 'minuto', observacoes: 'Manter a postura' }
  ];

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Músculo</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Exercício</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Séries</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kg</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Repetições</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Descanso</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unidade de Descanso</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Observações</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {treinos.map((treino, index) => (
          <tr key={index}>
            <td className="px-6 py-4 whitespace-nowrap">{treino.musculo}</td>
            <td className="px-6 py-4 whitespace-nowrap">{treino.exercicio}</td>
            <td className="px-6 py-4 whitespace-nowrap">{treino.series}</td>
            <td className="px-6 py-4 whitespace-nowrap">{treino.kg}</td>
            <td className="px-6 py-4 whitespace-nowrap">{treino.repeticao}</td>
            <td className="px-6 py-4 whitespace-nowrap">{treino.descanso}</td>
            <td className="px-6 py-4 whitespace-nowrap">{treino.unidadeDescanso}</td>
            <td className="px-6 py-4 whitespace-nowrap">{treino.observacoes}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}