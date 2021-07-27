import { ListsComponent } from './lists/lists.component';
import { NavbarComponent } from 'src/app/components/globals/navbar/navbar.component';

export const FEED_ROUTES: any[] = [
    {
        name: 'post-list',
        url: "/posts",
        views: {
            'header': NavbarComponent,
            'content': ListsComponent
        }
    },
]
;