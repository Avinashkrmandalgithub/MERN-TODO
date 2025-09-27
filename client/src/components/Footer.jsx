const Footer = () => {
  return (
    <footer className="w-full mt-12 py-6 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-8">
        <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} TodoApp. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 sm:mt-0">
          <a
            href=""
            className="text-sm sm:text-base hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href=""
            className="text-sm sm:text-base hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
          >
            Terms of Service
          </a>
          <a
            href=""
            className="text-sm sm:text-base hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
          >
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
