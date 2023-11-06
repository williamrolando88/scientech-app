"use client";

import { parseFactura } from "@/src/lib/utils/xmlParser";
import { Factura } from "@/src/types/xmlParsers";
import { FC, useState } from "react";
import { useDropzone } from "react-dropzone";
import BillsViewer from "./BillsViewer";

const XmlParser: FC = () => {
  const [xmlData, setXmlData] = useState<Factura[]>([]);

  const onDrop = (acceptedFiles: File[]) => {
    acceptedFiles.forEach(async (file) => {
      const reader = new FileReader();
      reader.onload = () => {
        const xmlText = reader.result as string;
        const factura = parseFactura(xmlText);

        if (factura) {
          setXmlData((prevState) => [...prevState, factura]);
        }
      };

      reader.readAsText(file);
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  });

  return (
    <>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>
            Drag &apos;n&apos; drop some XML files here, or click to select
            files
          </p>
        )}
      </div>

      <BillsViewer bills={xmlData} />
    </>
  );
};

export default XmlParser;
