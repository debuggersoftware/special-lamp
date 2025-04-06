import React from "react";

export const Button = ({ children, onClick }: { children: string; onClick: () => void }) => (
    <button onClick={onClick} style={{ padding: 10, backgroundColor: '#333', color: '#fff' }}>
        {children}
    </button>
);
