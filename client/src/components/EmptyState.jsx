const EmptyState = () => {
  return (
    <div className="text-center py-12 text-gray-400 dark:text-gray-500">
      <img
        src="https://cdn-icons-png.flaticon.com/512/4076/4076500.png"
        alt="empty"
        className="w-16 mx-auto mb-4 opacity-70"
      />
      <p className="text-lg font-medium">No todos yet</p>
      <p className="text-sm">Add your first todo to get started!</p>
    </div>
  );
};

export default EmptyState;
