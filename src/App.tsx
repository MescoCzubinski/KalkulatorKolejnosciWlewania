import Header from "./components/Header.tsx";
import AddElement from "./components/AddElement.tsx";
import Section from "./components/Section.tsx";
import ShowElement from "./components/ShowElement.tsx";
import { order } from "./components/data.ts";
import { useEffect, useState } from "react";
export default function App() {
  const [isReset, setIsReset] = useState(false);
  const [hasSorted, setHasSorted] = useState(false);
  const [elements, setElements] = useState<
    {
      name: string;
      type: string;
      subType: string;
      alert1?: string;
      alert2?: string;
      alert3?: string;
      alert4?: string;
    }[]
  >([]);

  useEffect(() => {
    setElements([]);
    setIsReset(false);
  }, [isReset]);

  const woda = {
    name: "H₂O - woda",
    type: "",
    subType: "",
    alert1: "najlepiej ogrzana",
  };

  useEffect(() => {
    elements.forEach((el) => {
      // const o = order.at(0);
      // console.log(o);
      // console.log(
      //   "Order: ",
      //   o?.symbol !== "-" ? o?.symbol + " " : "" + o?.subType
      // );
      console.log(el.subType);
      // const found = order.find(
      //   (o) =>
      //     (o.symbol !== "-" ? o.symbol + " " : "") + o.subType === el.subType
      // );
      // console.log("Order: ", order.at(2));
      // console.log("Found: ", found);

      // if (found) {
      //   el.alert1 = found.alert1;
      //   el.alert2 = found.alert2;
      //   el.alert3 = found.alert3;
      //   el.alert4 = found.alert4;
      // }
      // console.log(found);
    });
  }, [elements]);

  return (
    <div className="w-full min-h-screen h-full text-[var(--detail-color)] flex items-center flex-col bg-[#E6FFE6] p-2">
      <div className="flex justify-center w-fit flex-wrap gap-10 p-4 bg-[var(--bg-color)] rounded-3xl shadow-[0_0_15px_var(--primary-color)]">
        <Header
          title="Kalkulator kolejności wlewania do opryskiwacza"
          resetBtnText={"Reset"}
          reset={setIsReset}
        />
        <Section title="" showTitleOnMobile={false}>
          <AddElement
            setHasSorted={setHasSorted}
            elements={elements}
            setElements={setElements}
            isReset={isReset}
          />
          <button
            className="w-full mt-10 border-2 border-[var(--detail-color)] rounded-2xl p-2 text-xl font-semibold hover:bg-[var(--detail-color)] hover:text-[var(--bg-color)] transition-colors"
            onClick={() => {
              const sortReference = order.map(
                (el) =>
                  el.type + (el.symbol !== "-" ? el.symbol + " " : "") + el.name
              );

              const sorted = [...elements].sort((a, b) => {
                const aIndex = sortReference.indexOf(a.type + a.subType);
                const bIndex = sortReference.indexOf(b.type + b.subType);
                return (
                  (aIndex === -1 ? Infinity : aIndex) -
                  (bIndex === -1 ? Infinity : bIndex)
                );
              });

              setHasSorted(true);
              if (elements.length === 0) return;
              setElements([
                woda,
                ...sorted.filter((el) => el.name !== "H₂O - woda"),
                woda,
              ]);
            }}
          >
            Pokaż kolejność
          </button>
        </Section>
        {elements.length > 0 && (
          <Section title="" showTitleOnMobile={false}>
            <div className="flex flex-col gap-2">
              {elements.map((element, index) => (
                <ShowElement
                  index={hasSorted ? index + 1 : 0}
                  key={index}
                  element={element}
                  elements={elements}
                  setElements={setElements}
                />
              ))}
            </div>
          </Section>
        )}
      </div>
    </div>
  );
}
