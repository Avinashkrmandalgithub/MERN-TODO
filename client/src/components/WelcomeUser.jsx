const WelcomeUser = ({ username }) => {
  return (
    <div className="text-center max-w-3xl mx-auto mt-6 px-6 py-4 rounded-2xl shadow-md bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm text-gray-700 dark:text-gray-200">
      <p className="text-lg">
        Welcome back, <span className="font-semibold">{username}</span>!
      </p>
    </div>
  );
};

export default WelcomeUser;
