// src/App.tsx

// Color Palette Changes
const colors = {
    background: '#001F3F', // dark premium navy
    text: '#7F3E89', // muted deep violet
    // other color variables...
};

// TrustBar Section
function TrustBar() {
    return (
        <div className="trust-bar">
            <div className="logo-tile">
                <img src="path/to/logo1.png" alt="Logo 1" />
            </div>
            <div className="logo-tile">
                <img src="path/to/logo2.png" alt="Logo 2" />
            </div>
            // Add more logo tiles as needed... 
        </div>
    );
}

// Industries Grid Layout
const IndustriesGrid = () => {
    return (
        <div className="industries-grid">
            <div className="industry-column" style={{ flexBasis: '25%' }}>
                <div>Industry 1</div>
            </div>
            <div className="industry-column" style={{ flexBasis: '25%' }}>
                <div>Industry 2</div>
            </div>
            // Repeat for 4 columns (desktop), 3 columns (tablet), 2 columns (mobile)...
        </div>
    );
};

// Remove unnecessary effects
// Ensure all UI elements adhere to simplicity requirements

export default function App() {
    return (
        <div style={{ backgroundColor: colors.background }}>
            <TrustBar />
            <IndustriesGrid />
            // Other components...
        </div>
    );
}