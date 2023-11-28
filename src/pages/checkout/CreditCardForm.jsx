import { useState } from "react";
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export const CreditCardForm = () => {
  const [cardInfo, setCardInfo] = useState({
    cardHolder: '',
    cardNumber: '',
    cardMonth: '',
    cardYear: '',
    cardCVV: '',
  });

  const handleInputChange = (event) => {
    setCardInfo({
      ...cardInfo,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="w-96 p-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Informações do Cartão de Crédito</h2>
        <Cards
          cvc={cardInfo.cardCVV}
          expiry={cardInfo.cardMonth + cardInfo.cardYear}
          name={cardInfo.cardHolder}
          number={cardInfo.cardNumber}
        />
        <input
          type="text"
          name="cardHolder"
          placeholder="Nome do titular"
          className="w-full p-2 mb-3 mt-3 border rounded"
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="cardNumber"
          placeholder="Número do cartão"
          className="w-full p-2 mb-3 border rounded"
          onChange={handleInputChange}
          required
          pattern="\d{16}"
        />
        <div className="flex justify-between mb-3">
          <input
            type="text"
            name="cardMonth"
            placeholder="Mês"
            className="w-24 p-2 border rounded"
            onChange={handleInputChange}
            required
            pattern="(0[1-9]|1[0-2])"
          />
          <input
            type="text"
            name="cardYear"
            placeholder="Ano"
            className="w-24 p-2 border rounded"
            onChange={handleInputChange}
            required
            pattern="\d{4}"
          />
          <input
            type="text"
            name="cardCVV"
            placeholder="CVV"
            className="w-24 p-2 border rounded"
            onChange={handleInputChange}
            required
            pattern="\d{3}"
          />
        </div>
        <button className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Cadastrar</button>
      </div>
    </div>
  );
};
