// MaintenanceNotice.tsx
export default function MaintenanceNotice() {
  return (
    <div className="flex flex-col items-center justify-center p-6 border border-dashed border-gray-300 rounded-xl bg-gray-50 text-center shadow-sm">
      <h2 className="text-lg font-semibold text-gray-700">🚧 En Mantenimiento</h2>
      <p className="text-sm text-gray-500 mt-2">
        Esta sección está en proceso de desarrollo.  
        Vuelve más tarde. 🙌
      </p>
    </div>
  );
}
