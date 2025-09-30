import Header from "./components/Header.tsx";
import AddElement from "./components/AddElement.tsx";
import Section from "./components/Section.tsx";
import ShowElement from "./components/ShowElement.tsx";
import { order } from "./components/data.ts";
import { useEffect, useState } from "react";
export default function App() {
  const [isReset, setIsReset] = useState(false);
  const [elements, setElements] = useState<
    {
      name: string;
      type: string;
      subType: string;
      alert1?: string;
      alert2?: string;
      alert3?: string;
    }[]
  >([]);

  useEffect(() => {
    setElements([]);
    setIsReset(false);
  }, [isReset]);

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
            elements={elements}
            setElements={setElements}
            isReset={isReset}
          />
          <button
            className="w-full mt-5 border-2 border-[var(--detail-color)] rounded-2xl p-2 text-xl font-semibold hover:bg-[var(--detail-color)] hover:text-[var(--bg-color)] transition-colors"
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

              setElements(sorted);
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
