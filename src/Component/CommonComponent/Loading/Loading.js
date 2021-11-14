import React from 'react';

const Loading = () => {
    return (
        <div className="loading container">
            <br /><br /><br /><br /><br /><br /><br />
            <div className="mt-5 text-center">
                <div className="spinner-border text-warning " role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="h3 user-select-none">Loading...</p>
            </div>
        </div>
    );
};

export default Loading;