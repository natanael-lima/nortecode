import React from 'react';
import MaintenanceNotice from './MaintenanceNotice';

export default function LocationSubscription() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  alert('¡Gracias por suscribirte! Te enviaremos nuestras promociones.');
};

  return (
    <section id="contact" className="py-16 w-full px-6 text-center">
      <MaintenanceNotice />
        <h2 className="text-3xl font-bold mb-10">Contacto</h2>
        <form className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full p-3 border rounded-lg"
          />
          <input
            type="email"
            placeholder="Tu correo"
            className="w-full p-3 border rounded-lg"
          />
          <textarea
            placeholder="Tu mensaje"
            className="w-full p-3 border rounded-lg"
            rows={4}
          />
          <button className="w-full bg-pink-500 text-white py-3 rounded-lg font-bold hover:bg-pink-600 transition">
            Enviar
          </button>
        </form>
      </section>

     
  );
}