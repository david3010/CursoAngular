import { defineConfig } from 'vite'
import dns from 'node:dns'

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
    server: {
        open: '/index.html',
        port: 3000,
    }
})