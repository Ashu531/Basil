import React from 'react';

const Search = (props) => {
        return (
                <div style={{ position: 'relative' }}>
                    <div style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '10px',marginTop: 1 }}>
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#000000" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path></svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        style={{
                            borderRadius: '4px',
                            padding: '8px',
                            border: '1px solid #efefef',
                            width: '200px',
                            paddingInline: 30
                        }}
                    />
                </div>
            );
};

export default Search;
