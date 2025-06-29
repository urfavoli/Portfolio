// pages/_app.tsx
import React, { useEffect } from 'react'; // Import useEffect from React
import type { AppProps } from 'next/app'; // For proper TypeScript typing of AppProps

// Import global styles (path adjusted if you moved styles outside of `src/`)
import '../styles/globals.css';

// Import your Layout component (path adjusted if you moved components outside of `src/`)
import Layout from '../components/layout';

// Import the defineCustomElements function from Ionic Core for Ionicons web components
// Make sure you have '@ionic/core' installed: npm install @ionic/core
import { defineCustomElements } from '@ionic/core/loader';

function MyApp({ Component, pageProps }: AppProps) {
    // Use useEffect to ensure defineCustomElements runs only on the client-side
    // and only once when the application mounts.
    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Define Ionicons custom elements in the browser
            defineCustomElements(window);
        }
    }, []); // The empty dependency array ensures this runs only once

    return (
        <Layout>
            {/* Component is the active page component (e.g., HomePage, ContactPage) */}
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;