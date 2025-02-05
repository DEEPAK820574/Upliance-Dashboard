import React, { ReactNode } from 'react';
import Navbar from '../Navbar';

interface LayoutProps {
    children: ReactNode;
}

const DashboardLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col">
            <Navbar/>
            <main className="p-6">
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
