import React from 'react';

interface DataProps {
    data: {
        name: string;
        email: string;
        phone: string;
    };
}

const Data: React.FC<DataProps> = ({ data }) => {
    return (
        <div>
            <p>Name: {data.name}</p>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
        </div>
    );
};

export default Data;

