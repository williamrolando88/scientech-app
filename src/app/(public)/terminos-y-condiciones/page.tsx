import { termsAndConditions } from "@/src/constants/staticContent/termsAndConditions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
};

const page = () => {
  return (
    <main className="mx-auto w-full max-w-7xl px-2 py-6 sm:px-6 lg:px-8 lg:py-16">
      <div className="flex flex-col gap-6 lg:gap-8">
        <h2>{termsAndConditions.title}</h2>
        <p>{termsAndConditions.introduction}</p>
        {termsAndConditions.articles.map((article, index) => (
          <div key={article.title}>
            <h5>{index + 1 + ". " + article.title}</h5>
            <p className="mt-2">{article.content}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default page;
