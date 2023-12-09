import FirebaseClient from "@/src/lib/config/firebaseClient.config";
import { ImportCalculatorValidationSchema } from "@/src/lib/parsers/importCalculator";
import { FirestoreImportCalculator, ImportCalculator } from "@/src/types/calculator";
import { FirestoreDataConverter, Timestamp, collection, doc, setDoc } from "firebase/firestore";

class ImportCalculatorCollection {
  collection;

  constructor() {
    this.collection = collection(FirebaseClient.db, "importCalculator");
  }

  upsert = async (data: ImportCalculator, id?: string) => {
    try {
      const docRef = doc(this.collection, id).withConverter(this.converter());
      await setDoc(docRef, data, { merge: true });
      return docRef.id;
    } catch (e) {
      console.error("Error storing document: ", e);
      return null;
    }
  };

  converter = (): FirestoreDataConverter<ImportCalculator, FirestoreImportCalculator> => ({
    toFirestore: (data: ImportCalculator) => ({
      ...data,
      metadata: {
        ...data.metadata,
        createdAt: Timestamp.fromDate(data.metadata.createdAt || new Date()),
        updatedAt: Timestamp.fromDate(new Date()),
      },
    }),
    fromFirestore: (snap) => ImportCalculatorValidationSchema.parse(snap.data()),
  });
}

const importCalculation = new ImportCalculatorCollection();

export default importCalculation;
