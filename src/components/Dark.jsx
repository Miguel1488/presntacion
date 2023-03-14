import React, { useState } from 'react';

const Dark = () => {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
    return (
        <div>
            <section>
      <div className={darkMode ? "dark" : ""}>
      <h1 className="text-2xl font-bold mb-4">Ejemplo de dark/light mode</h1>
      <button
        className="bg-gray-800 text-white px-4 py-2 rounded-lg"
        onClick={toggleDarkMode}
      >
        {darkMode ? "Modo claro" : "Modo oscuro"}
      </button>
    </div>
      </section>
        </div>
    );
};

export default Dark;