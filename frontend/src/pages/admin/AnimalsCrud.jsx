import { useState } from "react";
import AnimalsForm from "../../components/admin/AnimalsCrud/AnimalsForm";
import AnimalsList from "../../components/admin/AnimalsCrud/AnimalsList";

function AnimalsCrud() {
  const [resetTrigger, setResetTrigger] = useState(false);

  return (
    <div className="w-full my-16">
      {resetTrigger}
      <AnimalsList
        resetTrigger={resetTrigger}
        setResetTrigger={setResetTrigger}
      />
      <AnimalsForm
        resetTrigger={resetTrigger}
        setResetTrigger={setResetTrigger}
      />
    </div>
  );
}

export default AnimalsCrud;
