const NotFound = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900">
      <h1 className="text-6xl font-extrabold text-red-600">404</h1>
      <h2 className="text-3xl font-bold text-gray-700 dark:text-white mt-4">Page Not Found</h2>
      <p className="text-gray-600 dark:text-gray-400 mt-2 text-center">
        Sorry, the page you&apos;re looking for doesn&apos;t exist or may have been moved.
      </p>
      <a
        href="/"
        className="bg-blue-500 text-white text-lg py-3 px-8 rounded-lg mt-6 hover:bg-blue-600 focus:ring-4 focus:ring-blue-400 focus:outline-none"
      >
        Go to Homepage
      </a>
    </section>
  );
};

export default NotFound;
