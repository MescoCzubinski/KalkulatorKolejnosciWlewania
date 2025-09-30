import Header from "./components/Header.tsx";
import AddElement from "./components/AddElement.tsx";
import Section from "./components/Section.tsx";
import { useEffect, useState } from "react";
export default function App() {
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    console.log("resetowanie");
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
          <AddElement />
        </Section>
      </div>
    </div>
  );
}
