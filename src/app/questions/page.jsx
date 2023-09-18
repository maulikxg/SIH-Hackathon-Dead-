"use client";

import React from "react";
import {useEffect, useRef} from 'react';
// const page = () => {
//   return (
//     <div>
//       Hey from Upload
//       {/* Library and chat to be implemented */}
//     </div>
//   );
// };

// export default page;



export default function page() {

    const viewer = useRef(null);

    useEffect(() => {
      import('@pdftron/webviewer').then(() => {
        WebViewer(
          {
            path: '/lib',
            licenseKey: 'demo:1695066993218:7c07f8cc0300000000f99ebb993569c8e1f496652765a272900bcaa90c', // sign up to get a key at https://dev.apryse.com
            initialDoc: 'https://pdftron.s3.amazonaws.com/downloads/pl/demo-annotated.pdf',
          },
          viewer.current,
        ).then((instance) => {
            const { docViewer } = instance;
            // you can now call WebViewer APIs here...
          });
      })
    }, []);


    return (
      <div className="MyComponent">
        <div className="header">React sample</div>
        <div className="webviewer" ref={viewer} style={{height: "100vh"}}></div>
      </div>
    );
  
}