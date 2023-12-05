import FirebaseClient from "@/src/lib/config/firebaseClient.config";
import { ImportCalculator } from "@/src/types/calculator";
import { addDoc, collection } from "firebase/firestore";

class ImportCalculatorCollection {
  collection;

  constructor() {
    this.collection = collection(FirebaseClient.db, "importCalculator");
  }

  save = async (data: ImportCalculator) => {
    try {
      const docRef = await addDoc(this.collection, data);
      return docRef.id;
    } catch (e) {
      console.error("Error adding document: ", e);
      return null;
    }
  };
}

const importCalculation = new ImportCalculatorCollection();

export default importCalculation;
