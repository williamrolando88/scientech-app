import CalculatorNotesTable from "./CalculatorNotesTable";
import { NotesInput } from "./NotesInput";

const ImpCalculatorNotes = () => {
  return (
    <section className="flex flex-col items-start gap-2 rounded-md border p-4">
      <h2 className="text-lg">Links y Notas</h2>

      <NotesInput />
      <CalculatorNotesTable />
    </section>
  );
};

export default ImpCalculatorNotes;
