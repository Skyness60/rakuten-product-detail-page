import dynamic from "next/dynamic";
import DOMPurify from "dompurify";

interface SafeHtmlProps {
  html: string;
}

const SafeHtml = ({ html }: SafeHtmlProps) => {
  const sanitizedHtml = DOMPurify.sanitize(html);
  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};

export default dynamic(() => Promise.resolve(SafeHtml), { ssr: false });
