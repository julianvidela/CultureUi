"use client"


import {  useSelector } from "react-redux";

import { RootState } from "@/store/index";

const ComponentList = () => {
 
  const { components, loading, error } = useSelector(
    (state: RootState) => state.components
  );


  if (loading) return <p>Cargando componentes...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="text-white">
      <h2 className="text-white">Lista de Componentes</h2>
      <ul>
        {components.map((component) => (
          <li key={component._id}>
            <h3>{component.name}</h3>
            <p>{component.description}</p>
            <p><strong>Instalación:</strong> {component.installationCli}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ComponentList;
