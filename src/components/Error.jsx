function Error({ message }) {
  return (
    <div className="block text-white font-bold normal-case bg-red-800 text-center p-3 mb-5 rounded-lg">
      <p>{message}</p>
    </div>
  );
}

export default Error;
