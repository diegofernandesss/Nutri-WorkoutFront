import { useParams } from "react-router-dom"
import {api} from '../../../services/api'
import { useState, useEffect } from 'react';
import { ModalCardapio } from "./ModalCardapio";

export const Cardapio = () => {
    const {id2, nome} = useParams();

    const TABLE_HEAD = ["", "Nome do Cardápio", "Ações"];

    const [cardapio, setCardapio] = useState([]);
    const [showAddModal, setShowAddModal] = useState(false);

    const getCardapioAtleta = async () => {
        try {
          const response = await api.get(`/nutricionista/atleta/cardapio/${id2}`);
          setCardapio(response.data);
        } catch (error) {
          console.error(error);
        } 
      };
  
      useEffect(() => {
        getCardapioAtleta();
      }, []);


      const deleteCardapioAtleta = async (id) => {
        try {
          await api.delete(`/nutricionista/atleta/cardapio/${id2}`)
          setCardapio((prevData) => prevData.filter((cardapio) => cardapio.id !== id));

        } catch (error) {
          console.error("Error ao Deletar Cardápio", error);
        }
      }

      const handleAddModal = async () => {
        setShowAddModal(!showAddModal);
      }

    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            <div className="bg-white border border-gray-100 shadow-md shadow-black/10 p-6 rounded-md">
                <div className="flex justify-between items-start mb-4">
                    <div className="font-medium text-xl">Cardápio {nome}</div>
                </div>

            <table className="mt-4 w-full text-sm text-left rtl:text-right text-gray-500 ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
                                    <tr>
                                    {TABLE_HEAD.map((head) => (
                                        <th key={head} scope="col" className="px-2 py-3">
                                        {head}
                                        </th>
                                    ))}
                                </tr>
                                </thead>
                            <tbody>
                    {cardapio.map((cardapio) => (
                        <tr key={cardapio.id} className="bg-white border-b hover:bg-gray-100">
                            <td className="w-4 p-4">
                            </td>
                            <td className="px-2 py-4">
                              {cardapio.nome}
                            </td>
                           
                            <td className="px-2 py-4 flex flex-row gap-4">
                                    <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-700 transition duration-150 ease-in-out hover:bg-green-600 bg-green-700 rounded text-white px-8 py-2 text-sm  focus:border-green-700" >Detalhes Refeição</button>
                                    <button onClick={() => deleteCardapioAtleta(cardapio.id)} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-700 transition duration-150 ease-in-out hover:bg-red-600 bg-red-700 rounded text-white px-8 py-2 text-sm  focus:border-red-700" >Excluir Cardápio</button>        
                          </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
                {cardapio.length === 0 && (
                      <div className='flex justify-center items-center mt-5'>
                        <div className='text-gray-400 font-bold text-xl'>Cardápio não cadastrado</div>
                      </div>   
                )}
            <button className="mt-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-700 transition duration-150 ease-in-out hover:bg-violet-600 bg-violet-700 rounded text-white px-8 py-2 text-sm focus:border-violet-700" onClick={() => handleAddModal()}
            >
                Cadastrar Cardápio
            </button>
            </div>

            {showAddModal && (
              <ModalCardapio 
                id2={id2}
                showAddModal={showAddModal}
                cardapio={cardapio}
                setShowAddModal={setShowAddModal}
                setCardapio={setCardapio}
              />
            )}
           
        </div>
        </>
    )
}