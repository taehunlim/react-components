import React from 'react';

const Account = ({name, mbti}: {name: string, mbti: string}) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{mbti}</p>
        </div>
    );
};

export default Account;