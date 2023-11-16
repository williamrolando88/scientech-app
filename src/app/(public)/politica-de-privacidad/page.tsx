import { privacyPolicy } from "@/src/constants/staticContent/privacyPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
};

const page = () => {
  return (
    <main className="mx-auto w-full max-w-7xl px-2 py-6 sm:px-6 lg:px-8 lg:py-16">
      <div className="flex flex-col gap-6 lg:gap-8">
        <h2>{privacyPolicy.title}</h2>
        <p>{privacyPolicy.introduction}</p>
        {privacyPolicy.articles.map((article, index) => (
          <div key={article.title}>
            <h5>{index + 1 + ". " + article.title}</h5>
            <p className="mt-2">{article.content}</p>
          </div>
        ))}
        <h4>{privacyPolicy.acknowledgment}</h4>
      </div>
    </main>
  );
};

export default page;
