import { Component } from 'react';

/**
 * Catches render-time errors from its children (e.g. a 3D model that fails
 * to load) so a single failure doesn't crash the entire scene/app.
 * Renders `fallback` (default: nothing) when an error is caught.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught an error:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? null;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
