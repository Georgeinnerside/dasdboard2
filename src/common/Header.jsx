const Header = ({ title }) => {
  return (
    <header className="bg-white bg-opacity-50 backdrop-blur-md shadow-lg border-b border-gray-500">
      <div className="max-w-7xl max-auto py-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl text-center font-semibold text-blue-950">
          {title}
        </h1>
      </div>
    </header>
  );
};

export default Header;
