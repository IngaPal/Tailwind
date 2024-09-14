import { NavItems } from './utils/constants';

export interface NavItem {
    route: string;
    title: string;
}

export interface SWContextType {
    page: NavItems;
    changePage: (page: NavItems) => void;
}

export interface FriendProps {
    picture: string;
    pos: number;
}