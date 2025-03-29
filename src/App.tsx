import React, { useState } from 'react';
import FinanceCalculator from './components/FinanceCalculator';
import FinanceForm from './components/FinanceForm';
import { FinanceOption, FinanceDetails } from './types';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [isBusinessCustomer, setIsBusinessCustomer] = useState(false);
  const [selectedOption, setSelectedOption] = useState<FinanceOption>('finance1');
  const [financeDetails, setFinanceDetails] = useState<FinanceDetails>({
    monthlyRate: 99,
    downPayment: 3600,
    finalRate: 5400,
    duration: 48,
    totalPrice: 18000,
    productName: 'MINI oneD'
  });

  const handleStartRequest = () => {
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-4">
        {!showForm ? (
          <FinanceCalculator
            isBusinessCustomer={isBusinessCustomer}
            setIsBusinessCustomer={setIsBusinessCustomer}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            financeDetails={financeDetails}
            setFinanceDetails={setFinanceDetails}
            onStartRequest={handleStartRequest}
          />
        ) : (
          <FinanceForm
            financeDetails={financeDetails}
            selectedOption={selectedOption}
            isBusinessCustomer={isBusinessCustomer}
            onBack={() => setShowForm(false)}
          />
        )}
      </div>
    </div>
  );
}

export default App