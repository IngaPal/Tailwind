import { useState } from 'react'
import { friends } from '../utils/constants'
import Friend from './Friend'

const DreamTeam = () => {
    const [selectedFriend, setSelectedFriend] = useState<number | null>(null);

    const handleFriendClick = (index: number) => {
        setSelectedFriend(selectedFriend === index ? null : index);
    };

    return (
        <section className="float-right w-1/2 border border-base-color rounded-b-3xl mx-2 relative">
            <h2 className="text-center">Dream Team</h2>
            <div className="relative" style={{ paddingBottom: '75%' }}> {/* Changed to 75% for 4:3 aspect ratio */}
                {selectedFriend !== null ? (
                    <Friend
                        picture={friends[selectedFriend]}
                        pos={selectedFriend + 1}
                        onClick={() => handleFriendClick(selectedFriend)}
                        isSelected={true}
                        isHidden={false}
                    />
                ) : (
                    <div className="absolute inset-0 grid grid-cols-3 gap-1">
                        {friends.map((friend, index) => (
                            <Friend
                                key={index}
                                pos={index + 1}
                                picture={friend}
                                onClick={() => handleFriendClick(index)}
                                isSelected={false}
                                isHidden={false}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default DreamTeam