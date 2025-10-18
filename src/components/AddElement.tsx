import Input from "./Input";

import type {
  Element as ElementType,
  SetElements as SetElementsType,
} from "../types/types.ts";

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
  sortElementsTrigger,
  setSortElementsTrigger,
  setHasSorted,
}: {
  elements: ElementType[];
  setElements: SetElementsType;
  isReset: boolean;
  sortElementsTrigger: boolean;
  setSortElementsTrigger: (value: boolean) => void;
  setHasSorted: (hasSorted: boolean) => void;
}) {
  const [elementTitle, setElementTitle] = useState("");
  const [elementType, setElementType] = useState("");
  const [showWarning, setShowWarning] = useState(false);

  const [elementValue, setElementValue] = useState("");

  useEffect(() => {
    if (isReset) {
      setElementTitle("");
      setElementType("");
      setElementValue("");
      setShowWarning(false);
    }
  }, [isReset]);

  function getAlerts(elementName: string, elementType: string) {
    const emptyElement: ElementType = {
      name: "",
      type: "",
      alert1: "",
      alert2: "",
      alert3: "",
      alert4: "",
      alert5: "",
    };
    let elements: ElementType = { ...emptyElement };

    switch (elementType) {
      case "ś.o.r.":
        elements =
          OptionsSOR.find((el) => el.name === elementName) ?? emptyElement;
        break;
      case "adiuwant":
        elements =
          OptionsAdiuwant.find((el) => el.name === elementName) ?? emptyElement;
        break;
      case "nawóz":
        elements =
          OptionsNawoz.find((el) => el.name === elementName) ?? emptyElement;
        break;
      case "biopreparat":
        elements =
          OptionsBiopreparat.find((el) => el.name === elementName) ??
          emptyElement;
        break;
      case "stymulator mineralny":
        elements =
          OptionsStymulator.find((el) => el.name === elementName) ??
          emptyElement;
        break;
    }

    return {
      alert1: elements.alert1,
      alert2: elements.alert2,
      alert3: elements.alert3,
      alert4: elements.alert4,
      alert5: elements.alert5,
    };
  }

  function mapOptions(elements: ElementType[]) {
    return elements.map((element) => ({
      name: element.name,
      value: element.name,
    }));
  }

  function addElement() {
    if (elementTitle === "" || elementType === "" || elementValue === "") {
      setShowWarning(true);
      return;
    }

    const alerts = getAlerts(elementValue, elementType);

    setElements([
      ...elements.filter((el) => el.title !== "H₂O - woda"),
      {
        title: elementTitle,
        name: elementValue,
        type: elementType,
        alert1: alerts.alert1,
        alert2: alerts.alert2,
        alert3: alerts.alert3,
        alert4: alerts.alert4,
        alert5: alerts.alert5,
      },
    ]);
    setHasSorted(false);
    setElementTitle("");
    setElementType("");
    setElementValue("");
    setShowWarning(false);
  }

  useEffect(() => {
    addElement();
    setSortElementsTrigger(false);
    setShowWarning(false);
  }, [sortElementsTrigger]);

  return (
    <div className="border-2 border-[var(--detail-color)] rounded-2xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl text-nowrap font-semibold">Dodaj element</h1>
        <img
          src="./add.svg"
          alt="add element"
          className="w-12 cursor-pointer hover:shadow-[0_5_5px_var(--primary-color)] transition-shadow outline-0"
          onClick={() => addElement()}
        />
      </div>
      <Input
        text
        value={elementTitle}
        setValue={setElementTitle}
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
