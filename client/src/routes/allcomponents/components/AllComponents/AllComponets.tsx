"use client"

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchComponents } from "@/store/slices/ComponentSlice";
import { RootState, AppDispatch } from "@/store/index";

const ComponentList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { components, loading, error } = useSelector(
    (state: RootState) => state.components
  );

  useEffect(() => {
    dispatch(fetchComponents()); // Ya usa componentService internamente
  }, [dispatch]);

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
