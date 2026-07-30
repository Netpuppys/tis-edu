import TransferCertificateClient from "./TransferCertificateClient";

export const metadata = {
  title: "Transfer Certificate",
  description:
    "Search and download your child's Transfer Certificate (TC) online from Tula's International School, Dehradun.",
  alternates: {
    canonical: "https://tis.edu.in/transfer-certificate/",
  },
};

export default function TransferCertificatePage() {
  return <TransferCertificateClient />;
}
