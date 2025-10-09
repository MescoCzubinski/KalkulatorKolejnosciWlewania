import Input from "./Input";
import AddIcon from "../assets/add.svg";

import {
  OptionsSOR,
  OptionsNawoz,
  OptionsAdiuwant,
  OptionsBiopreparat,
  OptionsStymulator,
} from "./data";
import { useEffect, useState } from "react";

export default function AddElement({
  elements,
  setElements,
  isReset,
  setHasSorted,
}: {
  elements: {
    name: string;
    type: string;
    subType: string;
  }[];
  setElements: (
    elements: {
      name: string;
      type: string;
      subType: string;
    }[]
  ) => void;
  isReset: boolean;
  setHasSorted: (hasSorted: boolean) => void;
}) {
  const [showWarning, setShowWarning] = useState(false);
  const [elementType, setElementType] = useState("");

  const [elementName, setElementName] = useState("");
  const [elementValue, setElementValue] = useState("");

  useEffect(() => {
    setShowWarning(false);
  }, [elementName, elementType, elementValue]);

  useEffect(() => {
    if (isReset) {
      setElementName("");
      setElementType("");
      setElementValue("");
    }
  }, [isReset]);

  function mapOptions(elements: { symbol: string; name: string }[]) {
    return elements.map((element) => ({
      name: (element.symbol !== "-" ? element.symbol + " " : "") + element.name,
      value:
        (element.symbol !== "-" ? element.symbol + " " : "") + element.name,
    }));
  }
  return (
    <div className="border-2 border-[var(--detail-color)] rounded-2xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl text-nowrap font-semibold">Dodaj element</h1>
        <img
          src={AddIcon}
          alt="add element"
          className="w-12 cursor-pointer hover:shadow-[0_5_5px_var(--primary-color)] transition-shadow outline-0"
          onClick={() => {
            setHasSorted(false);
            if (elementName === "" || elementValue === "") {
              setShowWarning(true);
              return;
            }
            setShowWarning(false);
            setElementName("");
            setElementType("");
            setElementValue("");
            setElements([
              ...elements.filter((el) => el.name !== "H₂O - woda"),
              {
                name: elementName,
                type: elementType,
                subType: elementValue,
              },
            ]);
          }}
        />
      </div>
      <Input
        text
        value={elementName}
        setValue={setElementName}
        title="Nazwa środka"
        placeholder="Podaj nazwę środka"
      />
      <Input
        select
        value={elementType}
        setValue={setElementType}
        title="Rodzaj składnika"
        placeholder="Wybierz składnik"
        options={[
          { name: "ś.o.r.", value: "ś.o.r." },
          { name: "adiuwant", value: "adiuwant" },
          { name: "nawóz", value: "nawóz" },
          { name: "biopreparat", value: "biopreparat" },
          { name: "stymulator mineralny", value: "stymulator mineralny" },
        ]}
      />
      {elementType === "ś.o.r." && (
        <Input
          select
          value={elementValue}
          setValue={setElementValue}
          title="Formulacja środka"
          placeholder="Wybierz ś.o.r."
          options={mapOptions(OptionsSOR)}
        />
      )}
      {elementType === "adiuwant" && (
        <Input
          select
          value={elementValue}
          setValue={setElementValue}
          title="Formulacja adiuwantu"
          placeholder="Wybierz adiuwant"
          options={mapOptions(OptionsAdiuwant)}
        />
      )}
      {elementType === "nawóz" && (
        <Input
          select
          value={elementValue}
          setValue={setElementValue}
          title="Formulacja nawozu"
          placeholder="Wybierz nawóz"
          options={mapOptions(OptionsNawoz)}
        />
      )}
      {elementType === "biopreparat" && (
        <Input
          select
          value={elementValue}
          setValue={setElementValue}
          title="Formulacja biopreparatu"
          placeholder="Wybierz biopreparat"
          options={mapOptions(OptionsBiopreparat)}
        />
      )}
      {elementType === "stymulator mineralny" && (
        <Input
          select
          value={elementValue}
          setValue={setElementValue}
          title="Formulacja stymulatora"
          placeholder="Wybierz stymulator"
          options={mapOptions(OptionsStymulator)}
        />
      )}
      {showWarning && (
        <p className="text-xl text-center text-red-500">
          Wypełnij wszystkie pola
        </p>
      )}
    </div>
  );
}
