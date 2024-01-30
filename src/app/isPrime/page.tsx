import { PageLayout } from "../../components/PageLayout";
import { IsPrimeForm } from "./IsPrimeForm";
import { Suspense } from "react";

const IsPrimePage = () => {
  return (
    <PageLayout>
      <Suspense>
        <IsPrimeForm />
      </Suspense>
    </PageLayout>
  );
};

export default IsPrimePage;
