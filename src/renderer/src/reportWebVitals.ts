interface ReportHandler {
    (metric: any): void;
}

const reportWebVitals = (onPerfEntry?: ReportHandler): void => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
        import("web-vitals").then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
            onCLS(onPerfEntry);
            onFID(onPerfEntry);
            onFCP(onPerfEntry);
            onLCP(onPerfEntry);
            onTTFB(onPerfEntry);
        });
    }
};

export default reportWebVitals;
