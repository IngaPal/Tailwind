import React, { useState } from 'react'
import { friends } from '../utils/constants'
import Friend from './Friend'

const DreamTeam: React.FC = () => {
    const [selectedFriend, setSelectedFriend] = useState<number | null>(null);

    const handleFriendClick = (index: number) => {
        setSelectedFriend(selectedFriend === index ? null : index);
    };

    return (
        <section className="float-right w-1/2 border border-base-color rounded-b-3xl mx-2 relative" style={{ height: '50vw' }}>
            <h2 className="text-center">Dream Team</h2>
            <div className="absolute inset-0 p-2">
                {selectedFriend !== null ? (
                    <Friend
                        picture={friends[selectedFriend]}
                        pos={selectedFriend + 1}
                        onClick={() => handleFriendClick(selectedFriend)}
                        isSelected={true}
                        isHidden={false}
                    />
                ) : (
                    <div className="grid grid-cols-3 gap-1 h-full">
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