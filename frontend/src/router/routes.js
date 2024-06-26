
const routes = [
    { 
        path: '/about', 
        component: () => import("../components/views/AboutView.vue"),
        name: 'AboutView',
        meta: { scrollToTop: true, scrollTo: '#about' } // Adicione meta para definir o scroll
    },
    { 
        path: '/projects', 
        component: () => import("../components/projects/ProjectList.vue"),
        name: 'ProjectList',
        meta: { scrollToTop: true, scrollTo: '#projects' }
    },
    { 
        path: '/skills', 
        component: () => import("../components/skills/SkillTabs.vue"),
        name: 'SkillList',
        meta: { scrollToTop: true, scrollTo: '#skills' }
    },
    {
        path:'/projects/:id',
        component: () => import("../components/projects/ProjectPage.vue"),
        name: 'ProjectPage'
    },
    {
        path:'/projects/new',
        component: () => import("../components/template/addNew/NewProject.vue"),
        name: 'NewProject'
    },
    {
        path:'/skills/new',
        component: () => import("../components/template/addNew/NewSkill.vue"),
        name: 'NewSkill'
    }
    
];
export default routes;
