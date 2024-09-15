interface FriendProps {
    picture: string;
    pos: number;
    onClick: () => void;
    isSelected: boolean;
    isHidden: boolean;
}

const Friend = ({ picture, pos, onClick, isSelected, isHidden }: FriendProps) => {
    let containerStyles = 'relative w-full h-full';
    let imageStyles = 'w-full h-full object-cover transition-all duration-300 ease-in-out';
    
    if (pos === 7) imageStyles += ' rounded-bl-3xl';
    if (pos === 9) imageStyles += ' rounded-br-3xl';
    if (isSelected) {
        containerStyles = 'absolute inset-0 z-10';
        imageStyles += ' rounded-b-3xl';
    }
    if (isHidden) containerStyles += ' hidden';

    return (
        <div className={containerStyles} onClick={onClick}>
            <img
                className={imageStyles}
                src={picture}
                alt="Friend"
            />
        </div>
    )
}

export default Friend;