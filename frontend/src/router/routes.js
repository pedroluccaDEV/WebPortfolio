const routes = [
    { 
        path: '/about', 
        component: () => import("../components/views/AboutView.vue"),
        name: 'AboutView'
    },{ 
        path: '/projects', 
        component: () => import("../components/projects/ProjectList.vue"),
        name: 'ProjectList'
    },{ 
        path: '/skills', 
        component: () => import("../components/skills/SkillTabs.vue"),
        name: 'SkillList'
    },{
        path:'/projects/:id',
        component: () => import("../components/projects/ProjectPage.vue"),
        name: 'ProjectPage'
    },
    // {
    //     path: "/:catchAll(.*)*",
    //     component: () => import("pages/Error404.vue"),
    // },
];

export default routes;
