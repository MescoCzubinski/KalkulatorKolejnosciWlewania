import Header from "./components/Header.tsx";
import AddElement from "./components/AddElement.tsx";
import Section from "./components/Section.tsx";
import ShowElement from "./components/ShowElement.tsx";
import { order } from "./components/data.ts";
import { useEffect, useState } from "react";
import type { Element as ElementType } from "./types/types.ts";
export default function App() {
  const [isReset, setIsReset] = useState(false);
  const [hasSorted, setHasSorted] = useState(false);
  const [sortElementsTrigger, setSortElementsTrigger] = useState(false);
  const [elements, setElements] = useState<ElementType[]>([]);

  useEffect(() => {
    setElements([]);
    setIsReset(false);
  }, [isReset]);

  const waterFirst = {
    title: "H₂O - woda",
    type: "",
    name: "do połowy objętości zbiornika",
    alert1: "najlepiej ogrzana",
    alert2: "",
    alert3: "",
    alert4: "",
    alert5: "",
  };

  const waterLast = {
    title: "H₂O - woda",
    type: "",
    name: "do pełnego zbiornika",
    alert1: "najlepiej ogrzana",
    alert2: "",
    alert3: "",
    alert4: "",
    alert5: "",
  };

  function orderElements() {
    setHasSorted(true);
    const sortReference = order.map((el) => el.type + el.name);

    const sorted = [...elements].sort((a, b) => {
      const aIndex = sortReference.indexOf(a.type + a.name);
      const bIndex = sortReference.indexOf(b.type + b.name);
      return (
        (aIndex === -1 ? Infinity : aIndex) -
        (bIndex === -1 ? Infinity : bIndex)
      );
    });

    if (elements.length === 0) return;
    setElements([
      waterFirst,
      ...sorted.filter((el) => el.title !== "H₂O - woda"),
      waterLast,
    ]);
  }

  useEffect(() => {
    if (!sortElementsTrigger) {
      orderElements();
    }
  }, [sortElementsTrigger]);

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
            sortElementsTrigger={sortElementsTrigger}
            setSortElementsTrigger={setSortElementsTrigger}
            setHasSorted={setHasSorted}
            elements={elements}
            setElements={setElements}
            isReset={isReset}
          />
          <button
            className="w-full mt-10 border-2 border-[var(--detail-color)] rounded-2xl p-2 text-xl font-semibold hover:bg-[var(--detail-color)] hover:text-[var(--bg-color)] transition-colors"
            onClick={() => setSortElementsTrigger(true)}
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
