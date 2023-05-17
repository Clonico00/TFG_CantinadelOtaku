import React from "react";
import {Viewer} from "@react-pdf-viewer/core";
import {toolbarPlugin} from '@react-pdf-viewer/toolbar';
import {Worker} from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import {useLocation} from "react-router-dom";
import PDF from "../pdf/Análisis y diseño.pdf";

const LibreriaDetail = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const pdfUrl = searchParams.get("pdf");
    console.log(pdfUrl)

    const toolbarPluginInstance = toolbarPlugin();
    const {renderDefaultToolbar, Toolbar} = toolbarPluginInstance;
    const renderPage = (props) => (
        <>
          {props.canvasLayer.children}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 50,
              right: 0,
              bottom: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                color: 'rgba(0, 0, 0, 0.2)',
                fontSize: `${4 * props.scale}rem`,
                fontWeight: 'bold',
                textTransform: 'uppercase',
                transform: 'rotate(-45deg)',
                userSelect: 'none',
                opacity: 0.5,
              }}
            >
              Cantina del Otaku
            </div>
          </div>
      
          {props.annotationLayer.children}
          {props.textLayer.children}
        </>
      );
      
    const transform = (slot) => {
        const {
          Download,
          DownloadMenuItem,
          Open,
          OpenMenuItem,
          Print,
          PrintMenuItem,
          SwitchTheme,
          SwitchThemeMenuItem,
        } = slot;
        return {
          ...slot,
          Download: Download ? () => <></> : Download,
          DownloadMenuItem: DownloadMenuItem ? () => <></> : DownloadMenuItem,
          Open: Open ? () => <></> : Open,
          OpenMenuItem: OpenMenuItem ? () => <></> : OpenMenuItem,
          Print: Print ? () => <></> : Print,
          PrintMenuItem: PrintMenuItem ? () => <></> : PrintMenuItem,
          SwitchTheme: SwitchTheme ? () => <></> : SwitchTheme,
          SwitchThemeMenuItem: SwitchThemeMenuItem ? () => <></> : SwitchThemeMenuItem,
        };
      };
      

    return (
        <div style={{height: "100vh"}} className="mb-20 border border-gray-200 rounded">
            <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.6.172/pdf.worker.min.js">
                <div className="rpv-core__viewer bg-gray-50 border border-gray-200 rounded">
                    <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
                </div>

                {pdfUrl && (
                    <Viewer
                        fileUrl={PDF}
                        plugins={[toolbarPluginInstance]}
                        renderPage={renderPage}
                    />
                )}
            </Worker>
        </div>
    );
};

export default LibreriaDetail;
