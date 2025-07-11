import React, { useState, useEffect } from 'react';
import { TechnicianProfile } from '../types';
import Card from './common/Card';

interface SettingsViewProps {
  profile: TechnicianProfile;
  onSave: (profile: TechnicianProfile) => void;
  onLogout?: () => void;
}

const SettingsView: React.FC<SettingsViewProps> = ({ profile, onSave, onLogout }) => {
  const [formData, setFormData] = useState<TechnicianProfile>(profile);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setFormData(profile);
  }, [profile]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const handleLogout = () => {
    if (window.confirm('Sei sicuro di voler uscire dal sistema?')) {
      onLogout?.();
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Impostazioni</h2>
      
      {/* Profile Settings */}
      <Card className="mb-6">
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Anagrafica Compilatore</h3>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Questi dati verranno utilizzati per compilare le anagrafiche dei documenti.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome e Cognome Compilatore
                </label>
                <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Mario Rossi"
                />
                </div>
                <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Azienda
                </label>
                <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Rossi Impianti S.r.l."
                />
                </div>
                <div>
                <label htmlFor="vatNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Partita IVA / C.F.
                </label>
                <input
                    type="text"
                    id="vatNumber"
                    name="vatNumber"
                    value={formData.vatNumber}
                    onChange={handleInputChange}
                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="IT01234567890"
                />
                </div>
                <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Indirizzo Sede Legale
                </label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Via Garibaldi 10, 00100 Roma"
                />
                </div>
            </div>
          </div>
          <div className="mt-6 flex justify-end items-center">
             {isSaved && <span className="text-sm text-green-600 mr-4 transition-opacity duration-300">Dati salvati!</span>}
            <button
              type="submit"
              className="inline-flex items-center px-6 py-2.5 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Salva Modifiche
            </button>
          </div>
        </form>
      </Card>

      {/* Security Settings */}
      {onLogout && (
        <Card>
          <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Sicurezza</h3>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              Gestisci l'accesso al sistema e le impostazioni di sicurezza.
            </p>
            
            <div className="border-t border-gray-200 pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-900">Sessione Attiva</h4>
                  <p className="text-sm text-gray-500">Disconnettiti dal sistema per proteggere i tuoi dati</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="inline-flex items-center px-4 py-2 border border-red-300 text-sm font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Disconnetti
                </button>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-yellow-800">Nota sulla Sicurezza</h3>
                  <div className="mt-2 text-sm text-yellow-700">
                    <p>
                      La sessione si disconnette automaticamente dopo 24 ore di inattività. 
                      Ricordati di disconnetterti manualmente quando usi computer condivisi.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default SettingsView;