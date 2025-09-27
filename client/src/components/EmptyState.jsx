const EmptyState = () => {
  return (
    <div className="text-center py-12 px-4 sm:px-6 lg:px-8 text-gray-400 dark:text-gray-500">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png"
        alt="empty"
        className="w-16 sm:w-20 md:w-24 lg:w-32 mx-auto mb-4 opacity-70"
      />
      <p className="text-lg sm:text-xl md:text-2xl font-medium mb-1">No todos yet</p>
      <p className="text-sm sm:text-base md:text-lg">Add your first todo to get started!</p>
    </div>
  );
};

export default EmptyState;
