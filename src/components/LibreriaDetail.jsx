import React from "react";
import { Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { toolbarPlugin } from '@react-pdf-viewer/toolbar';
import type { ToolbarSlot, TransformToolbarSlot } from '@react-pdf-viewer/toolbar';
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/toolbar/lib/styles/index.css";
import PDF from "../pdf/Análisis y diseño.pdf";
import {RenderPage} from "@react-pdf-viewer/core";
import {RenderPageProps} from "@react-pdf-viewer/core";

const Libreria: React.FC<{}> = () => {
    const toolbarPluginInstance = toolbarPlugin();
    const { renderDefaultToolbar, Toolbar } = toolbarPluginInstance;
    const renderPage: RenderPage = (props: RenderPageProps) => (
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
    const transform: TransformToolbarSlot = (slot: ToolbarSlot) => {
        const { Download, DownloadMenuItem,Open, OpenMenuItem, Print, PrintMenuItem, SwitchTheme, SwitchThemeMenuItem } = slot;
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
        <div style={{ height: "100vh"}} className="  mb-20 border border-gray-200 rounded">
            <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.6.172/pdf.worker.min.js">
                <div className="rpv-core__viewer bg-gray-50 border border-gray-200 rounded">
                        <Toolbar>{renderDefaultToolbar(transform)}</Toolbar>
                    </div>
                        <Viewer
                            fileUrl={PDF}
                            plugins={[toolbarPluginInstance]}
                            renderPage={renderPage}
                        />
            </Worker>
        </div>
    );
}

export default Libreria;
