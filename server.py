#!/usr/bin/env python3
"""
Simple HTTP Server for Portfolio Testing
Serves the portfolio with proper MIME types for all resources
"""

import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

# Configuration
PORT = 8000
HOST = "localhost"

# MIME type mappings
MIME_TYPES = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
    '.otf': 'font/otf'
}

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Custom handler with proper MIME types and CORS headers"""
    
    def end_headers(self):
        # Add CORS headers for development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()
    
    def guess_type(self, path):
        """Guess MIME type based on file extension"""
        ext = Path(path).suffix.lower()
        return MIME_TYPES.get(ext, 'application/octet-stream')

def start_server():
    """Start the HTTP server"""
    try:
        # Change to script directory
        os.chdir(os.path.dirname(os.path.abspath(__file__)))
        
        # Create server
        with socketserver.TCPServer((HOST, PORT), CustomHTTPRequestHandler) as httpd:
            print(f"""
╔════════════════════════════════════════════════╗
║     🚀 Portfolio Server Started Successfully    ║
╠════════════════════════════════════════════════╣
║                                                ║
║  Server running at:                           ║
║  → http://{HOST}:{PORT}/                      ║
║                                                ║
║  Press Ctrl+C to stop the server              ║
║                                                ║
╚════════════════════════════════════════════════╝
            """)
            
            # Open browser automatically
            webbrowser.open(f'http://{HOST}:{PORT}/')
            
            # Serve forever
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n\n✋ Server stopped by user")
    except OSError as e:
        if e.errno == 48:  # Port already in use
            print(f"\n❌ Error: Port {PORT} is already in use!")
            print(f"   Try using a different port or close the application using port {PORT}")
        else:
            print(f"\n❌ Error: {e}")
    except Exception as e:
        print(f"\n❌ Unexpected error: {e}")

if __name__ == "__main__":
    start_server()
