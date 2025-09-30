import Input from "./Input";
import {
  OptionsSOR,
  OptionsNawoz,
  OptionsAdiuwant,
  OptionsBiopreparat,
  OptionsStymulator,
} from "./data";
import { useState } from "react";

export default function AddElement() {
  const [elementType, setElementType] = useState("");
  const [elementValue, setElementValue] = useState("");
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl text-nowrap">Dodaj element</h1>
        <img
          src="/add.svg"
          alt="add element"
          className="w-12 cursor-pointer hover:shadow-[0_5_5px_var(--primary-color)] transition-shadow outline-0"
        />
      </div>
      <Input
        number
        value={""}
        setValue={() => {}}
        title="Nazwa środka"
        placeholder="Podaj nazwę środka"
      />
      <Input
        select
        value={elementType}
        setValue={setElementType}
        title="Rodzaj środka"
        placeholder="Wybierz rodzaj środka"
        options={[
          { name: "ś.o.r.", value: "s_o_r" },
          { name: "adiuwant", value: "adiuwant" },
          { name: "nawóz", value: "nawoz" },
          { name: "biopreparat", value: "biopreparat" },
          { name: "stymulator mineralny", value: "stymulator" },
        ]}
      />
      {elementType === "s_o_r" && (
        <Input
          select
          value={elementValue}
          setValue={setElementValue}
          title="Rodzaj środka"
          placeholder="Wybierz ś.o.r."
          options={OptionsSOR.map((element) => ({
            name:
              (element.symbol !== "-" ? element.symbol + " " : "") +
              element.name,
            value: element.value,
          }))}
        />
      )}
      {elementType === "adiuwant" && (
        <Input
          select
          value={elementValue}
          setValue={setElementValue}
          title="Rodzaj adiuwantu"
          placeholder="Wybierz adiuwant"
          options={OptionsAdiuwant.map((element) => ({
            name:
              (element.symbol !== "-" ? element.symbol + " " : "") +
              element.name,
            value: element.value,
          }))}
        />
      )}
      {elementType === "nawoz" && (
        <Input
          select
          value={elementValue}
          setValue={setElementValue}
          title="Rodzaj nawozu"
          placeholder="Wybierz nawóz"
          options={OptionsNawoz.map((element) => ({
            name:
              (element.symbol !== "-" ? element.symbol + " " : "") +
              element.name,
            value: element.value,
          }))}
        />
      )}
      {elementType === "biopreparat" && (
        <Input
          select
          value={elementValue}
          setValue={setElementValue}
          title="Rodzaj biopreparatu"
          placeholder="Wybierz biopreparat"
          options={OptionsBiopreparat.map((element) => ({
            name:
              (element.symbol !== "-" ? element.symbol + " " : "") +
              element.name,
            value: element.value,
          }))}
        />
      )}
      {elementType === "stymulator" && (
        <Input
          select
          value={elementValue}
          setValue={setElementValue}
          title="Rodzaj stymulatora"
          placeholder="Wybierz stymulator"
          options={OptionsStymulator.map((element) => ({
            name:
              (element.symbol !== "-" ? element.symbol + " " : "") +
              element.name,
            value: element.value,
          }))}
        />
      )}
    </div>
  );
}
