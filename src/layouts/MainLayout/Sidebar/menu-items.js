// assets
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

// constant
const icons = {
    DashboardIcon,
    AssessmentIcon, LocalGroceryStoreIcon
};

const menuItems = {
    items: [
        //     {
        //     id: 'dashboard',
        //     title: "dashboard",
        //     type: 'group',
        //     children: [
        //         {
        //             id: 'default',
        //             title: "default",
        //             type: 'item',
        //             url: '/articles',
        //             icon: icons.DashboardIcon,
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'analytics',
        //             title: "analytics",
        //             type: 'item',
        //             url: '/articles',
        //             icon: icons.AssessmentIcon,
        //             breadcrumbs: false
        //         }
        //     ]
        // },
        {
            id: 'application',
            title: "application",
            type: 'group',
            children: [
                {
                    id: 'CUSTOMER',
                    title: "CUSTOMER",
                    type: 'collapse',
                    icon: icons.LocalGroceryStoreIcon,
                    children: [
                        {
                            id: 'customer-list',
                            title: "customer-list",
                            type: 'item',
                            url: '/articles',
                            breadcrumbs: false
                        },
                        {
                            id: 'order-list',
                            title: "order-list",
                            type: 'item',
                            url: '/articles',
                            breadcrumbs: false
                        },

                    ]
                }, {
                    id: 'TEST',
                    title: "TEST",
                    type: 'collapse',
                    icon: icons.LocalGroceryStoreIcon,
                    children: [
                        {
                            id: 'test1',
                            title: "test1",
                            type: 'item',
                            url: '/articles',
                            breadcrumbs: false
                        },
                        {
                            id: 'test2',
                            title: "test2",
                            type: 'item',
                            url: '/articles',
                            breadcrumbs: false
                        },

                    ]
                }
            ]
        }]
};

export default menuItems;
