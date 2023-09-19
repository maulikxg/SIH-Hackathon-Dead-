"use client";

import React from "react";
import { useEffect, useRef } from "react";

export default function page() {
  const viewer = useRef(null);

  useEffect(() => {
    import("@pdftron/webviewer").then(() => {
      WebViewer(
        {
          path: "/lib",
          licenseKey: process.env.NEXT_PUBLIC_WEBVIEWER_KEY, // sign up to get a key at https://dev.apryse.com
          initialDoc:
            "https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf",
        },
        viewer.current
      ).then((instance) => {
        const { docViewer } = instance;
        // you can now call WebViewer APIs here...
      });
    });
  }, []);

  return (
    <div className="MyComponent">
      <div className="header">React sample</div>
      <div className="webviewer" ref={viewer} style={{ height: "100vh" }}></div>
    </div>
  );
}
