export interface FriendProps {
    picture: string;
    pos: number;
    onClick: () => void;
    isSelected: boolean;
    isHidden: boolean;
}