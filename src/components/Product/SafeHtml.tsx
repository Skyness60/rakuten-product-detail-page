import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

interface SafeHtmlProps {
  html: string;
}

const SafeHtml = ({ html }: SafeHtmlProps) => {
  const [sanitizedHtml, setSanitizedHtml] = useState<string>("");

  useEffect(() => {
    const loadDOMPurify = async () => {
      const DOMPurify = (await import("dompurify")).default;
      setSanitizedHtml(DOMPurify.sanitize(html));
    };

    loadDOMPurify();
  }, [html]);

  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};

export default dynamic(() => Promise.resolve(SafeHtml), { ssr: false });
