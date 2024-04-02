import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
    history: createWebHistory(), // Use createWebHistory for cleaner URLs
    routes,
});

export default router;