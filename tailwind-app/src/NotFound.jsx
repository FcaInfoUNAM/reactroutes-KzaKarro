function NotFound(){
  return(
    <div class="bg-white py-24 sm:py-32 text-center">
      <h2 class="text-4xl font-bold text-red-600">404 - Página No Encontrada</h2>
      <p class="mt-4 text-lg text-gray-600">La página que buscas no existe o ha sido eliminada.</p>
      <a href="/" class="mt-6 inline-block bg-blue-500 text-white px-4 py-2 rounded-md">Volver al inicio</a>
    </div>
  );
}
export default NotFound;
