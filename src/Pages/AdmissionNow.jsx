import React from "react";
import { Layout } from "../layout/Index";
import { HeroSection } from "../Components/AdmissionNow/Hero/Index";
import { AdmissionForm } from "../Components/AdmissionNow/About/Index";

export const AdmissionNow = () => {
  return (
    <Layout>
      <HeroSection />
      <AdmissionForm />
    </Layout>
  );
};
