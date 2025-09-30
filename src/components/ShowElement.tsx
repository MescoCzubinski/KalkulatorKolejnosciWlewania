import { useState } from "react";

export default function ShowElement({
  element,
  elements,
  setElements,
}: {
  element: {
    name: string;
    type: string;
    subType: string;
    alert1?: string;
    alert2?: string;
    alert3?: string;
  };
  elements: {
    name: string;
    type: string;
    subType: string;
    alert1?: string;
    alert2?: string;
    alert3?: string;
  }[];
  setElements: (
    elements: {
      name: string;
      type: string;
      subType: string;
      alert1?: string;
      alert2?: string;
      alert3?: string;
    }[]
  ) => void;
}) {
  const [showAlerts] = useState(false);

  const hasAlerts = element.alert1 || element.alert2 || element.alert3;

  return (
    <div className="flex flex-col gap-y-2 w-full p-4 border-2 border-[var(--primary-color)] rounded-2xl">
      <div className="flex w-full items-center justify-between gap-2">
        <div className="flex items-center justify-between w-full gap-2">
          <p className="text-2xl font-semibold">{element.name}</p>
          <img
            src="/delete.svg"
            alt="delete"
            className="w-12 cursor-pointer hover:shadow-[0_5_5px_var(--primary-color)] transition-shadow outline-0"
            onClick={() =>
              setElements(elements.filter((el) => el.name !== element.name))
            }
          />
        </div>
      </div>
      <p className="text-xl leading-snug">
        <span className="font-semibold">{element.type}</span> {element.subType}
      </p>

      {showAlerts && hasAlerts && (
        <div className="mt-2 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h3 className="font-semibold text-yellow-800 mb-2">Uwagi:</h3>
          <ul className="space-y-1">
            {element.alert1 && (
              <li className="text-yellow-700">• {element.alert1}</li>
            )}
            {element.alert2 && (
              <li className="text-yellow-700">• {element.alert2}</li>
            )}
            {element.alert3 && (
              <li className="text-yellow-700">• {element.alert3}</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
