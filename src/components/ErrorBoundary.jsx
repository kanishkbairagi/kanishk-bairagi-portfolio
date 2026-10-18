import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error('Portfolio Caught Client Runtime Error:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-[#07080c] text-white flex flex-col items-center justify-center p-6 text-center">
                    <div className="max-w-md w-full p-8 rounded-3xl border border-white/10 bg-[#0f1118] shadow-2xl">
                        <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent">
                            <span className="text-xl font-bold">!</span>
                        </div>
                        <h2 className="text-xl font-bold text-white mb-2">Portfolio Interface Reload Required</h2>
                        <p className="text-xs text-zinc-400 mb-6 leading-relaxed">
                            A fresh module cache update is available. Click below to reload the application.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="w-full py-3 px-6 rounded-full bg-accent text-[#07080c] font-bold text-xs uppercase tracking-wider transition hover:bg-white cursor-pointer"
                        >
                            Reload Application
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
