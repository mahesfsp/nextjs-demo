export default function DashboardLayout({ children }) {
    return (
        <section className="mahe">
            <nav>
                {/* Navigation content */}
            </nav>
            {/* Render children inside the layout */}
            <main>
                {children}
            </main>
        </section>
    );
}
