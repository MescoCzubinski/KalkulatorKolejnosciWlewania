import deleteIcon from "../assets/delete.svg";

export default function ShowElement({
  element,
  elements,
  setElements,
  index,
}: {
  element: {
    name: string;
    type: string;
    subType: string;
    alert1?: string;
    alert2?: string;
    alert3?: string;
    alert4?: string;
  };
  elements: {
    name: string;
    type: string;
    subType: string;
    alert1?: string;
    alert2?: string;
    alert3?: string;
    alert4?: string;
  }[];
  setElements: (
    elements: {
      name: string;
      type: string;
      subType: string;
      alert1?: string;
      alert2?: string;
      alert3?: string;
      alert4?: string;
    }[]
  ) => void;
  index?: number;
}) {
  function alertColor(alert: string) {
    if (
      alert === "najlepiej ogrzana" ||
      alert === "nie łącz nawozów Ca i Mg" ||
      alert === "skonsultuj z doradcą producenta środka" ||
      alert === "ostrożnie łącz żelazo z herbicydami" ||
      alert === "nie łącz siarczanu miedzi z herbicydami" ||
      alert === "nie mieszaj manganu z regulatorami wzrostu" ||
      alert ===
        "nie mieszać z herbicydami typu -fop -den -dym oraz insektycydami EC" ||
      alert ===
        "herbicydów typu -fop -den -dym, insektycydów EC oraz granulatów rozpuszczalnych SG nie mieszać z r.s.m."
    ) {
      return "text-yellow-500";
    }
    return "text-red-500";
  }
  return (
    <div className="flex flex-col gap-y-2 w-full p-4 border-2 border-[var(--primary-color)] rounded-2xl">
      <div className="flex w-full items-center justify-between gap-2">
        <div className="flex items-center justify-between w-full gap-2">
          {index !== 0 && <p className="text-2xl font-semibold">{index}.</p>}
          <p className="text-2xl font-semibold">{element.name}</p>
          <img
            src={deleteIcon}
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

      {element.alert1 && (
        <p className={`text-xl text-center ${alertColor(element.alert1)}`}>
          {element.alert1}
        </p>
      )}
      {element.alert2 && (
        <p className={`text-xl text-center ${alertColor(element.alert2)}`}>
          {element.alert2}
        </p>
      )}
      {element.alert3 && (
        <p className={`text-xl text-center ${alertColor(element.alert3)}`}>
          {element.alert3}
        </p>
      )}
      {element.alert4 && (
        <p className={`text-xl text-center ${alertColor(element.alert4)}`}>
          {element.alert4}
        </p>
      )}
    </div>
  );
}
